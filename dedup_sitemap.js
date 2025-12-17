const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Match all <url> blocks
const urlRegex = /<url>[\s\S]*?<\/url>/g;
const matches = sitemapContent.match(urlRegex);

if (!matches) {
    console.log("No URLs found!");
    process.exit(1);
}

const uniqueUrls = new Map();
const duplicates = [];

matches.forEach(block => {
    const locMatch = block.match(/<loc>(.*?)<\/loc>/);
    if (locMatch) {
        const url = locMatch[1];
        if (uniqueUrls.has(url)) {
            duplicates.push(url);
        } else {
            uniqueUrls.set(url, block);
        }
    }
});

console.log(`Found ${matches.length} total URLs.`);
console.log(`Found ${uniqueUrls.size} unique URLs.`);
console.log(`Removing ${duplicates.length} duplicates.`);

const newContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(uniqueUrls.values()).join('\n')}
</urlset>`;

fs.writeFileSync(sitemapPath, newContent);
console.log("Sitemap updated.");
