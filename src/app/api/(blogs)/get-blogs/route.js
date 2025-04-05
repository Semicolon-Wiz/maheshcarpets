import pool from "@/lib/db.con";

export async function GET() {
  try {
    const query = "SELECT * FROM blogs ORDER BY created_at DESC";
    const [blogs] = await pool.execute(query);

    if (blogs.length === 0) {
      return Response.json(
        { success: false, message: "No blogs found" },
        { status: 404 }
      );
    }

    const data = blogs.map((blog) => {
      return {
        blog_id: blog.blog_id,
        blog_title: blog.blog_title,
        blog_content: blog.blog_content.trim().substring(0, 250) + "...",
        blog_img: blog.blog_img,
        blog_slug: blog.blog_slug,
        createdAt: blog.created_at,
      };
    });

    return Response.json(
      {
        success: true,
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
