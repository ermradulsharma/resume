# SEO Guidelines for Portfolio Website

This document provides ongoing SEO best practices and guidelines for maintaining and improving the search engine optimization of your portfolio website.

## Table of Contents
- [Image Optimization](#image-optimization)
- [Content Structure](#content-structure)
- [Meta Tags Best Practices](#meta-tags-best-practices)
- [Internal Linking](#internal-linking)
- [Keyword Research](#keyword-research)
- [Performance Optimization](#performance-optimization)
- [Regular Maintenance](#regular-maintenance)

---

## Image Optimization

### Alt Text Guidelines
- **Always include alt text** for all images
- Make alt text descriptive and specific (e.g., "Mradul Sharma presenting at tech conference" instead of "image1")
- Include relevant keywords naturally, but avoid keyword stuffing
- Keep alt text under 125 characters
- For decorative images, use empty alt text: `alt=""`

### File Naming
- Use descriptive, hyphen-separated filenames (e.g., `portfolio-project-dashboard.jpg`)
- Include relevant keywords in filenames
- Use lowercase letters
- Avoid special characters and spaces

### Image Format & Size
- Use WebP format for better compression and quality
- Compress images before uploading (aim for under 200KB)
- Use responsive images with `srcset` for different screen sizes
- Implement lazy loading for images below the fold

**Example:**
```jsx
<img 
  src="portfolio-project.webp" 
  alt="Enterprise payroll management system dashboard" 
  loading="lazy"
  width="800"
  height="600"
/>
```

---

## Content Structure

### Heading Hierarchy
- **Use only ONE H1 per page** (typically the page title)
- Follow logical heading order: H1 → H2 → H3 (don't skip levels)
- Make headings descriptive and keyword-rich
- Use headings to break up content for better readability

**Example Structure:**
```
H1: Portfolio - Projects by Mradul Sharma
  H2: Enterprise Applications
    H3: PayStubx - Payroll Management System
    H3: Storytellers - Content Management Platform
  H2: SaaS Platforms
    H3: Wealth Mark - Crypto Trading Platform
```

### Content Quality
- Write unique, original content (avoid duplicate content)
- Aim for at least 300 words per page
- Use natural language and write for humans first, search engines second
- Include relevant keywords in the first 100 words
- Update content regularly to keep it fresh

---

## Meta Tags Best Practices

### Title Tags
- Keep titles between 50-60 characters
- Include primary keyword near the beginning
- Make each page title unique
- Include brand name at the end
- Use separators like `|` or `-`

**Good Examples:**
- `Portfolio - Projects by Mradul Sharma | Full-Stack Developer`
- `Laravel Development Services | Mradul Sharma`

### Meta Descriptions
- Keep descriptions between 150-160 characters
- Include a clear call-to-action
- Make each description unique
- Include primary and secondary keywords naturally
- Accurately summarize page content

**Good Example:**
```
Explore enterprise-grade full-stack applications built by Mradul Sharma. 
Featuring SaaS platforms, CMS systems, and crypto trading applications 
using Laravel, React, and AWS.
```

### Keywords
- Focus on 3-5 primary keywords per page
- Include long-tail keywords (3-4 word phrases)
- Research competitor keywords
- Use keyword variations naturally throughout content

---

## Internal Linking

### Best Practices
- Link to related pages within your site
- Use descriptive anchor text (avoid "click here")
- Ensure all pages are accessible within 3 clicks from homepage
- Fix broken internal links regularly
- Create a logical site structure

**Good Example:**
```jsx
Check out my <a href="/portfolio">portfolio projects</a> 
to see enterprise applications I've built.
```

**Bad Example:**
```jsx
To see my work, <a href="/portfolio">click here</a>.
```

---

## Keyword Research

### Tools to Use
- Google Keyword Planner
- Ahrefs Keywords Explorer
- SEMrush
- Google Search Console (Search Analytics)
- Answer the Public

### Research Process
1. **Identify seed keywords** (e.g., "full stack developer", "Laravel developer")
2. **Find long-tail variations** (e.g., "Laravel developer for hire India")
3. **Analyze search intent** (informational, navigational, transactional)
4. **Check competition** (keyword difficulty)
5. **Prioritize keywords** based on relevance and search volume

### Target Keywords by Page
- **Home**: Full stack developer, Laravel React developer, senior developer
- **Portfolio**: Web development portfolio, Laravel projects, React applications
- **Services**: Laravel development services, React development, AWS consulting
- **Blog**: Web development tutorials, Laravel tips, React best practices
- **About**: Developer profile, software engineer background

---

## Performance Optimization

### Core Web Vitals
Monitor and optimize for:
- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100 milliseconds
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Techniques
- Minimize JavaScript and CSS files
- Enable browser caching
- Use CDN for static assets
- Implement code splitting
- Optimize font loading
- Reduce server response time

### Tools for Testing
- Google PageSpeed Insights
- Lighthouse (Chrome DevTools)
- GTmetrix
- WebPageTest

---

## Regular Maintenance

### Weekly Tasks
- Monitor Google Search Console for errors
- Check for broken links
- Review analytics for traffic patterns
- Respond to comments on blog posts

### Monthly Tasks
- Update sitemap.xml if new pages added
- Review and update meta descriptions
- Analyze keyword rankings
- Check page load speeds
- Update old content with new information

### Quarterly Tasks
- Conduct comprehensive SEO audit
- Review and update keyword strategy
- Analyze competitor websites
- Update structured data if needed
- Review and improve internal linking structure

### Annual Tasks
- Major content refresh
- Redesign outdated pages
- Update all screenshots and images
- Review and update all meta tags
- Comprehensive backlink audit

---

## Additional Resources

### Recommended Reading
- Google Search Central Documentation
- Moz Beginner's Guide to SEO
- Ahrefs Blog
- Search Engine Journal

### Tools to Bookmark
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## Quick Checklist for New Content

Before publishing any new page or blog post:

- [ ] Unique, descriptive title tag (50-60 characters)
- [ ] Compelling meta description (150-160 characters)
- [ ] One H1 tag with primary keyword
- [ ] Logical heading hierarchy (H2, H3, etc.)
- [ ] All images have descriptive alt text
- [ ] Images are compressed and optimized
- [ ] At least 300 words of quality content
- [ ] Primary keyword in first 100 words
- [ ] Internal links to related pages
- [ ] External links open in new tab
- [ ] Mobile-responsive design
- [ ] Fast page load time (< 3 seconds)
- [ ] Updated sitemap.xml
- [ ] Submitted to Google Search Console

---

## Contact for SEO Questions

If you have questions about implementing these guidelines or need SEO assistance, refer to the implementation plan or consult with an SEO specialist.

**Last Updated:** November 23, 2025
