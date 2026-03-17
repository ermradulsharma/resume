# Frequently Asked Questions (FAQ)

Here are answers to some of the most common questions regarding this repository.

## 1. Can I use this code for my own portfolio?
Yes! This project is open-source under the MIT License. You are free to fork this repository, modify the code, and use it for your personal or commercial portfolio. We only request that you retain the original copyright notice and consider attributing the original author (Mradul Sharma) in your code or via a link.

## 2. Where is the backend code located?
This repository only contains the frontend (React) codebase for the portfolio. The data you see is driven by static JSON files located in `src/components/database/`. There is no active backend server required to run this portfolio; it is designed to be easily deployed on static hosting platforms like Vercel or GitHub Pages.

## 3. How do I update the packages or "About" data?
All dynamic content is controlled via JSON data files. To update your name, packages, or experience:
1. Navigate to `src/components/database/`.
2. Edit the relevant JSON file (e.g., `portfolio.json`, `about.json`).
3. Commit and push your changes. The UI will automatically reflect the updated data.

## 4. Why are there no dashboard routes?
In version `0.4.0`, we completely removed the admin dashboard components and routes to decrease the bundle size and focus strictly on the public-facing professional portfolio. If you require a dashboard, you will need to implement your own robust backend and authentication structure or revert to an older commit.

## 5. How do I contact the creator?
You can reach out directly via the contact form on the live website, or you can email Mradul Sharma at the email address provided in his GitHub profile. For code bugs, please open an Issue.
