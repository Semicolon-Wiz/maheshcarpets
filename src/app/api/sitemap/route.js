import { NextResponse } from "next/server";
import { handloomData, bespoke, flatWeave, handKnotted, handTufted, shaggy, shaped } from "@/data/productdata";

const BASE_URL = "https://www.maheshcarpets.com/";

export async function GET() {
  const allProducts = [...handloomData, ...handTufted, ...bespoke, ...flatWeave, ...handKnotted, ...shaggy, ...shaped];

  // Static pages (add more if needed)
  const staticPages = ["", "our-story", "contact"];

  // Generate URLs for sitemap
  const urls = [
    ...staticPages.map(
      (page) => `
      <url>
        <loc>${BASE_URL}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>`
    ),

    ...allProducts.map((product) => {
      let categorySlug = product.category.split(" ").join("-").toLowerCase();

      if (product.collection.toLowerCase().includes("bespoke")) {
        categorySlug = "bespoke";
      } else if (product.collection.toLowerCase().includes("shaped rugs")) {
        categorySlug = "shaped";
      }

      return `
      <url>
        <loc>${BASE_URL}collections/${categorySlug}/${product.uri}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`;
    }),
  ].join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
