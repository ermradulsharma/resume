import React from "react";
import "./TechStackMarquee.css";
import data from "../../database/techStack.json";
import {
    SiHtml5, SiJavascript, SiReact, SiVuedotjs, SiNodedotjs, SiPhp,
    SiLaravel, SiNextdotjs, SiMysql, SiMongodb, SiPostgresql,
    SiAmazon, SiDocker, SiGithub,
    SiStripe, SiJsonwebtokens
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { Container } from "react-bootstrap";

// Mapping icons to specific brands for a professional look
const iconMap = {
    "HTML5/CSS3": SiHtml5, // Representative
    "JavaScript (ES6+)": SiJavascript,
    "React.js": SiReact,
    "Vue.js": SiVuedotjs,
    "Node.js": SiNodedotjs,
    "PHP 8+": SiPhp,
    "Laravel": SiLaravel,
    "Next.js": SiNextdotjs,
    "MySQL": SiMysql,
    "MongoDB": SiMongodb,
    "PostgreSQL": SiPostgresql,
    "AWS (EC2, S3, Lambda, RDS)": SiAmazon,
    "Docker": SiDocker,
    "Git & GitHub": SiGithub,
    "VS Code": VscVscode,
    "Stripe": SiStripe,
    "JWT": SiJsonwebtokens,
    "RESTful API": TbApi // Clean API icon
};

const linkMap = {
    "HTML5/CSS3": "https://developer.mozilla.org/en-US/docs/Web/HTML",
    "JavaScript (ES6+)": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "React.js": "https://reactjs.org/",
    "Vue.js": "https://vuejs.org/",
    "Node.js": "https://nodejs.org/",
    "PHP 8+": "https://www.php.net/",
    "Laravel": "https://laravel.com/",
    "Next.js": "https://nextjs.org/",
    "MySQL": "https://www.mysql.com/",
    "MongoDB": "https://www.mongodb.com/",
    "PostgreSQL": "https://www.postgresql.org/",
    "AWS (EC2, S3, Lambda, RDS)": "https://aws.amazon.com/",
    "Docker": "https://www.docker.com/",
    "Git & GitHub": "https://github.com/",
    "VS Code": "https://code.visualstudio.com/",
    "Stripe": "https://stripe.com/",
    "JWT": "https://jwt.io/",
    "RESTful API": "https://restfulapi.net/"
};

// Fallback icon
const DefaultIcon = TbApi;

const TechStackMarquee = () => {
    const { technology } = data.techStack;

    // Flatten and Categorize for the two rows
    // Row 1: Frontend, Tools, Frameworks
    const row1Categories = ['frontend', 'frameworks', 'tools', 'testing'];
    // Row 2: Backend, Database, Cloud, Auth
    const row2Categories = ['backend', 'database', 'cloudsAndDevOps', 'authentication', 'paymentGateway'];

    const getItems = (categories) => {
        let items = [];
        categories.forEach(cat => {
            if (technology[cat]) {
                items = [...items, ...technology[cat]];
            }
        });
        return items;
    };

    const row1Items = getItems(row1Categories);
    const row2Items = getItems(row2Categories);

    // Helper to render a generic list into marquee content
    const renderMarqueeRow = (items, direction) => (
        <div className={`marquee-row ${direction}`}>
            {/* Double the content to create seamless loop */}
            {[...items, ...items, ...items].map((item, index) => { // Tripling ensuring enough width
                const IconComponent = iconMap[item.name] || DefaultIcon;
                const link = linkMap[item.name] || "#";
                return (
                    <div key={`${item.name}-${index}`} className="marquee-tech-card">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="marquee-tech-link">
                            <IconComponent className="marquee-tech-icon" />
                        </a>
                        <span className="marquee-tech-name">{item.name}</span>
                    </div>
                );
            })}
        </div>
    );

    return (
        <Container fluid className="tech-marquee-section d-flex align-items-center justify-content-between flex-wrap gap-3" id="techStack" data-aos="fade-up" data-aos-delay="100">
            {renderMarqueeRow(row1Items, "scroll-left")}
            {renderMarqueeRow(row2Items, "scroll-right")}
        </Container>
    );
};

export default TechStackMarquee;
