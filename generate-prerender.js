const fs = require('fs');
const path = require('path');

// Read the blogs data
const blogsData = require('./src/components/database/blogs.json');

// Read the base index.html
const indexPath = path.join(__dirname, 'build', 'index.html');
const baseHTML = fs.readFileSync(indexPath, 'utf8');

// Routes to pre-render
const routes = [
    { path: '/', title: 'Mradul Sharma | Senior Full-Stack Developer', description: 'Explore Mradul Sharma\'s portfolio featuring enterprise-grade full-stack applications built with Laravel, React, AWS, and more.' },
    { path: '/about', title: 'About Mradul Sharma | Full-Stack Developer', description: 'Learn about Mradul Sharma, a Senior Full-Stack Developer with 5+ years of experience in Laravel, React, Node.js, and AWS.' },
    { path: '/portfolio', title: 'Portfolio | Mradul Sharma', description: 'View my portfolio of enterprise-grade web applications and projects built with modern technologies.' },
    { path: '/services', title: 'Services | Mradul Sharma', description: 'Professional web development services including Laravel, React, Node.js, and AWS cloud solutions.' },
    { path: '/blogs', title: 'Blog | Mradul Sharma', description: 'Technical articles and tutorials on web development, Laravel, React, AWS, and modern development practices.' },
    { path: '/privacy', title: 'Privacy Policy | Mradul Sharma', description: 'Privacy policy for Mradul Sharma\'s portfolio website.' },
    { path: '/terms', title: 'Terms of Service | Mradul Sharma', description: 'Terms of service for Mradul Sharma\'s portfolio website.' },
];

// Add blog posts
blogsData.blogs.posts.forEach(post => {
    routes.push({
        path: `/blogs/${post.slug}`,
        title: `${post.title} | Mradul Sharma Blog`,
        description: post.excerpt,
        canonical: `https://mradulsharma.vercel.app/blogs/${post.slug}`
    });
});

// Function to update HTML with meta tags
function updateHTML(html, route) {
    let updatedHTML = html;

    // Update title
    updatedHTML = updatedHTML.replace(
        /<title>.*?<\/title>/,
        `<title>${route.title}</title>`
    );

    // Update meta description
    updatedHTML = updatedHTML.replace(
        /<meta name="description" content=".*?"\/>/,
        `<meta name="description" content="${route.description}"/>`
    );

    // Add/update canonical URL
    const canonicalUrl = route.canonical || `https://mradulsharma.vercel.app${route.path}`;
    if (updatedHTML.includes('<link rel="canonical"')) {
        updatedHTML = updatedHTML.replace(
            /<link rel="canonical" href=".*?"\/>/,
            `<link rel="canonical" href="${canonicalUrl}"/>`
        );
    } else {
        updatedHTML = updatedHTML.replace(
            '</head>',
            `  <link rel="canonical" href="${canonicalUrl}"/>\n</head>`
        );
    }

    return updatedHTML;
}

// Generate pre-rendered files
console.log('Generating pre-rendered HTML files...');

routes.forEach(route => {
    const updatedHTML = updateHTML(baseHTML, route);

    // Create directory structure
    const routePath = route.path === '/' ? '/index' : route.path;
    const filePath = path.join(__dirname, 'build', `${routePath}.html`);
    const dirPath = path.dirname(filePath);

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(filePath, updatedHTML);
    console.log(`✓ Generated: ${filePath}`);
});

console.log(`\n✅ Successfully generated ${routes.length} pre-rendered HTML files!`);
