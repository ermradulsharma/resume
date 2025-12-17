import React from "react";
import { Container } from "react-bootstrap";
import SEO from "../../components/common/SEO";
import LetsConnect from "../../components/LetsConnect";
import HeroSection from "../../components/frontend/HeroSection/HeroSection";
import About from "../../components/frontend/About/About";
import ContactSection from "../../components/frontend/Contact/Contact";
import Services from "../../components/frontend/Services/Services";

const Home = () => {
    return (
        <Container fluid className="px-0">
            <SEO
                title="Mradul Sharma | Senior Full-Stack Developer Portfolio"
                description="Explore Mradul Sharma's portfolio featuring enterprise-grade full-stack applications built with Laravel, React, AWS. Specialized in scalable SaaS platforms."
                keywords="Mradul Sharma, Senior Full Stack Developer, Laravel Developer, React Developer, Node.js Developer, AWS Cloud Developer, Enterprise Application Developer, Microservices Architect, API Development Expert, SaaS Platform Developer, PostgreSQL MongoDB Expert, DevOps Engineer, Docker Kubernetes Specialist, Next.js Developer, Full Stack Developer India, Remote Developer, Freelance Developer, PHP Developer, JavaScript Developer, Backend Developer, Frontend Developer"
                ogUrl="https://mradulsharma.vercel.app/"
                canonicalUrl="https://mradulsharma.vercel.app/"
            />
            <HeroSection />
            <About />
            <Services />
            <ContactSection />
            <LetsConnect />
        </Container>
    );
};

export default Home;
