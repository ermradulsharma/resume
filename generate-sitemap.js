const fs = require('fs');
const path = require('path');
const blogsData = require('./src/components/database/blogs.json');

// Get all published posts
const publishedPosts = blogsData.blogs.posts.filter(p => p.published);

console.log(`Found ${publishedPosts.length} published blog posts`);

// Generate sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url>
    <loc>https://mradulsharma.vercel.app/</loc>
    <lastmod>2025-12-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mradulsharma.vercel.app/about</loc>
    <lastmod>2025-12-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mradulsharma.vercel.app/portfolio</loc>
    <lastmod>2025-12-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://mradulsharma.vercel.app/services</loc>
    <lastmod>2025-12-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://mradulsharma.vercel.app/blogs</loc>
    <lastmod>2025-12-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mradulsharma.vercel.app/privacy</loc>
    <lastmod>2025-12-02</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://mradulsharma.vercel.app/terms</loc>
    <lastmod>2025-12-02</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <!-- Blog Posts -->
`;

// Add all published blog posts
publishedPosts.forEach(post => {
    const priority = post.featured ? '0.7' : '0.6';
    sitemap += `  <url>
    <loc>https://mradulsharma.vercel.app/blogs/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

sitemap += `</urlset>`;

// Write to public/sitemap.xml
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log(`✅ Sitemap generated successfully!`);
console.log(`Total URLs: ${7 + publishedPosts.length} (7 main pages + ${publishedPosts.length} blog posts)`);
console.log(`Saved to: ${sitemapPath}`);
