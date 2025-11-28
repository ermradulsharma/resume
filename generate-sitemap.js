const fs = require('fs');
const path = require('path');

// Read blogs data
const blogsData = require('./src/components/database/blogs.json');

// Base URL
const baseUrl = 'https://mradulsharma.vercel.app';

// Get current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Static pages
const staticPages = [
    { url: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { url: '/portfolio', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { url: '/services', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { url: '/blogs', lastmod: today, changefreq: 'daily', priority: '0.9' },
    { url: '/about', lastmod: today, changefreq: 'yearly', priority: '0.7' }
];

// Get published blog posts
const blogPosts = blogsData.blogs.posts
    .filter(post => post.published)
    .map(post => ({
        url: `/blogs/${post.slug}`,
        lastmod: post.date,
        changefreq: 'monthly',
        priority: post.featured ? '0.8' : '0.7'
    }));

// Combine all URLs
const allUrls = [...staticPages, ...blogPosts];

// Generate XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}

</urlset>`;

// Write to file
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml);

console.log(`✅ Sitemap generated successfully with ${allUrls.length} URLs`);
console.log(`   - ${staticPages.length} static pages`);
console.log(`   - ${blogPosts.length} blog posts`);
