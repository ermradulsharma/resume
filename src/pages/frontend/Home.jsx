import React from "react";
import { Container } from "react-bootstrap";
import SEO from "../../components/common/SEO";
import LetsConnect from "../../components/LetsConnect";
import HeroSection from "../../components/frontend/HeroSection/HeroSection";
import About from "../../components/frontend/About/About";
import Services from "../../components/frontend/Services/Services";
import FeaturedProjects from "../../components/frontend/FeaturedProjects/FeaturedProjects";
import Testimonials from "../../components/frontend/Testimonials/Testimonials";
import LatestBlogs from "../../components/frontend/LatestBlogs/LatestBlogs";
import TechStackMarquee from "../../components/frontend/TechStackMarquee/TechStackMarquee";
import seoData from "../../components/database/seo.json";

const Home = () => {
    return (
        <Container fluid className="px-0" id="home" data-aos="fade-up" data-aos-delay="100">
            <SEO
                title={seoData.homeSeo.title}
                description={seoData.homeSeo.description}
                keywords={seoData.homeSeo.keywords}
                ogUrl={seoData.homeSeo.ogUrl}
                canonicalUrl={seoData.homeSeo.canonicalUrl}
                ogImage={seoData.homeSeo.ogImage}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": seoData.homeSeo.title,
                    "image": seoData.homeSeo.ogImage,
                    "author": {
                        "@type": "Person",
                        "name": "Mradul Sharma"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Mradul Sharma",
                        "logo": {
                            "@type": "ImageObject",
                            "url": seoData.homeSeo.ogImage
                        }
                    },
                    "datePublished": "",
                    "description": seoData.homeSeo.description,
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://mradulsharma.vercel.app`
                    }
                }}
            />
            <HeroSection />
            <TechStackMarquee />
            <About />
            <Services />
            <FeaturedProjects />
            <Testimonials />
            <LatestBlogs />
            <LetsConnect />
        </Container>
    );
};

export default Home;
