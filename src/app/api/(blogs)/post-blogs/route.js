import { NextResponse } from "next/server";
import { upload, fileUpload } from "@/lib/upload";
import pool from "@/lib/db.con";
import ValidateAdmin from "@/lib/validateAdmin";

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (req) => {
  try {
    const validAdmin = await ValidateAdmin(req);
    if (!validAdmin) {
      return NextResponse.json(
        { success: false, message: "You are not authorized" },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const blogId = formData.get("blogId");
    const title = formData.get("title");
    const content = formData.get("content");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const markdownContent = formData.get("markdownContent");
    const image = formData.get("image");

    if (!title || !content || !metaTitle || !metaDescription) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const createSlug = (title) => {
      return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
    };

    const slug = createSlug(title);
    let imageUrl = null;

    if (blogId) {
      const [existingBlog] = await pool.execute(
        `SELECT * FROM blogs WHERE blog_id = ?`,
        [blogId]
      );

      if (existingBlog.length > 0) {
        const getActualImageName = (url) => {
          if (!url) return null;
          const match = url.match(/\/(\d+-([^.]+\.[a-z]+))/i);
          return match ? match[2] : null;
        };

        const existingImg = getActualImageName(existingBlog[0]?.blog_img);
        if (image && existingImg !== image.name) {
          const buffer = Buffer.from(await image.arrayBuffer());
          const fileName = `${Date.now()}-${image.name.replace(/\s+/g, "_")}`;
          imageUrl = await fileUpload(buffer, fileName);
        } else {
          imageUrl = existingBlog[0]?.blog_img;
        }

        const updateQuery = `
          UPDATE blogs 
          SET blog_title = ?, blog_content = ?, blog_img = ?, metaTitle = ?, metaDesc = ?, markdownContent = ?, 
          blog_slug = ? WHERE blog_id = ?`;
        const updateValues = [
          title,
          content,
          imageUrl,
          metaTitle,
          metaDescription,
          markdownContent,
          slug,
          blogId,
        ];
        await pool.execute(updateQuery, updateValues);

        return NextResponse.json(
          {
            success: true,
            message: "Blog updated successfully",
            blogId: existingBlog[0].blog_id,
            imageUrl,
          },
          { status: 200 }
        );
      }
    }

    if (image) {
      const buffer = Buffer.from(await image.arrayBuffer());
      const fileName = `${Date.now()}-${image.name.replace(/\s+/g, "_")}`;
      imageUrl = await fileUpload(buffer, fileName);
    }

    const query = `
      INSERT INTO blogs 
      (blog_title, blog_content, blog_slug, blog_img, metaTitle, metaDesc, markdownContent) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      title,
      content,
      slug,
      imageUrl,
      metaTitle,
      metaDescription,
      markdownContent,
    ];

    const [result] = await pool.execute(query, values);

    return NextResponse.json(
      {
        success: true,
        message: "Blog added successfully",
        blogId: result.insertId,
        imageUrl,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
};
