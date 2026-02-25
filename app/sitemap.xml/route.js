export const dynamic = "force-static";


export async function GET() {
  const baseUrl = "https://www.rehobothdigitechsolution.com";

  const pages = [
    "",
    "/about",
    "/services",
    "/contact",
    "/seo-service",
    "/social-media-marketing",
    "/web-development",
    "/graphic-design",
    "/it-support",
  ];

  const urls = pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}