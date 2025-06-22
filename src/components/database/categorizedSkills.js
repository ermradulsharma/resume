import { FaPhp, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaVuejs } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiPostgresql, SiMysql, SiLaravel, SiExpress, SiDocker, SiAwsamplify, SiPostman, SiMautic, SiNextdotjs, SiIntellijidea } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

export const categorizedSkills = {
    "Client-Side Engineering": [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Vue.js", icon: <FaVuejs /> },
        { name: "Next.js", icon: <SiNextdotjs /> }
    ],
    "Server-Side Development & Frameworks": [
        { name: "PHP", icon: <FaPhp /> },
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> }
    ],
    "Data Persistence & Storage Technologies": [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> }
    ],
    "Cloud Platforms & DevOps Practices": [
        { name: "AWS (EC2, S3, RDS)", icon: <SiAwsamplify /> },
        { name: "Docker", icon: <SiDocker /> }
    ],
    "Development Tools & Environments": [
        { name: "VS Code", icon: <TbBrandVscode /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Git", icon: <FaGitAlt /> }
    ],
    "Marketing Automation & Integration Tools": [
        { name: "Mautic", icon: <SiMautic /> }
    ]
};
