const fs = require('fs');
const path = require('path');

// Load blogs data
const blogsData = require('../src/components/database/blogs.json');

// Configuration
const BASE_URL = 'https://mradulsharma.vercel.app';
const TODAY = new Date().toISOString().split('T')[0];

// Static pages configuration
const staticPages = [
    { url: '/', lastmod: TODAY, changefreq: 'weekly', priority: '1.0' },
    { url: '/about', lastmod: TODAY, changefreq: 'monthly', priority: '0.8' },
    { url: '/portfolio', lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
    { url: '/services', lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
    { url: '/blogs', lastmod: TODAY, changefreq: 'weekly', priority: '0.8' },
    { url: '/privacy', lastmod: TODAY, changefreq: 'yearly', priority: '0.3' },
    { url: '/terms', lastmod: TODAY, changefreq: 'yearly', priority: '0.3' },
];

// Generate sitemap XML
function generateSitemap() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add comment for main pages
    xml += '  <!-- Main Pages -->\n';

    // Add static pages
    staticPages.forEach(page => {
        xml += '  <url>\n';
        xml += `    <loc>${BASE_URL}${page.url}</loc>\n`;
        xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
        xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
        xml += `    <priority>${page.priority}</priority>\n`;
        xml += '  </url>\n';
    });

    // Add comment for blog posts
    xml += '\n  <!-- Blog Posts -->\n';

    // Filter and add published blogs
    const publishedBlogs = blogsData.blogs.posts.filter(blog => blog.published === true);

    console.log(`Found ${publishedBlogs.length} published blogs out of ${blogsData.blogs.posts.length} total blogs`);

    publishedBlogs.forEach(blog => {
        const priority = blog.featured ? '0.7' : '0.6';
        xml += '  <url>\n';
        xml += `    <loc>${BASE_URL}/blogs/${blog.slug}</loc>\n`;
        xml += `    <lastmod>${blog.date}</lastmod>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>${priority}</priority>\n`;
        xml += '  </url>\n';
    });

    xml += '</urlset>';

    return xml;
}

// Write sitemap to file
function writeSitemap() {
    const sitemapContent = generateSitemap();
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log(`✅ Sitemap generated successfully at: ${sitemapPath}`);
    console.log(`📄 Total URLs: ${staticPages.length + blogsData.blogs.posts.filter(b => b.published).length}`);
}

// Execute
writeSitemap();
