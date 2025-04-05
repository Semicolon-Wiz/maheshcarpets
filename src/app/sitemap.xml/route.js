export async function GET() {
  try {
    const res = await fetch("https://www.maheshcarpets.com/api/sitemap");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const contentType = res.headers.get("Content-Type");
    const sitemap = await res.text();

    return new Response(sitemap, {
      headers: {
        "Content-Type": "text/xml",
      },
    });
  } catch (error) {
    return new Response(`Error fetching sitemap: ${error.message}`, {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}