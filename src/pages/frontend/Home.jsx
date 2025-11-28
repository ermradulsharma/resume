import React from "react";
import { Container } from "react-bootstrap";
import useSEO from "../../hooks/useSEO";
import LetsConnect from "../../components/LetsConnect";
import HeroSection from "../../components/frontend/HeroSection/HeroSection";
import About from "../../components/frontend/About/About";
import ContactSection from "../../components/frontend/Contact/Contact";

const Home = () => {
    useSEO({
        title: "Mradul Sharma | Full-Stack Developer Portfolio",
        description: "Explore Mradul Sharma's portfolio featuring enterprise-grade full-stack applications built with Laravel, React, AWS, and more. Specialized in building scalable SaaS platforms and microservices.",
        keywords: "Mradul Sharma, Senior Full Stack Developer, Laravel Developer, React Developer, Node.js Developer, AWS Cloud Developer, Enterprise Application Developer, Microservices Architect, API Development Expert, SaaS Platform Developer, PostgreSQL MongoDB Expert, DevOps Engineer, Docker Kubernetes Specialist, Next.js Developer, Full Stack Developer India, Remote Developer, Freelance Developer, PHP Developer, JavaScript Developer, Backend Developer, Frontend Developer",
        ogUrl: "https://mradulsharma.vercel.app/",
        canonicalUrl: "https://mradulsharma.vercel.app/"
    });

    return (
        <Container fluid className="px-0">
            <HeroSection />
            <About />
            <ContactSection />
            <LetsConnect />
        </Container>
    );
};

export default Home;
