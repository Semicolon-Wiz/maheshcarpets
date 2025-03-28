import pool from "@/lib/db.con";
import ValidateAdmin from "@/lib/validateAdmin";
import { v2 as cloudinary } from "cloudinary";

export const DELETE = async (req) => {
  try {
    const validAdmin = await ValidateAdmin(req);
    if (!validAdmin) {
      return Response.json(
        { success: false, message: "You are not authorized" },
        { status: 401 }
      );
    }

    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return Response.json(
        { success: false, message: "Blog ID is required" },
        { status: 400 }
      );
    }

    const [rows] = await pool.execute(
      "SELECT blog_img FROM blogs WHERE blog_slug = ?",
      [id]
    );
    const blog = rows[0];

    if (!blog) {
      return Response.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    if (blog.blog_img) {
      const publicId = blog.blog_img
        .split("/")
        .slice(-2)
        .join("/")
        .split(".")[0];

      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });

      await cloudinary.uploader.destroy(publicId);
    }

    await pool.execute("DELETE FROM blogs WHERE blog_slug = ?", [id]);

    return Response.json(
      { success: true, message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
};
