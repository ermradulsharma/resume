import React from "react";
import { Container } from "react-bootstrap";
import SEO from "../../components/ui/SEO";
import LetsConnect from "./LetsConnect";
import HeroSection from "./HeroSection/HeroSection";
import About from "../about/AboutComponent/About";
import Services from "../services/ServicesComponent/Services";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import Testimonials from "./Testimonials/Testimonials";
import LatestBlogs from "../blog/LatestBlogs/LatestBlogs";
import TechStackMarquee from "./TechStackMarquee/TechStackMarquee";
import seoData from "../../data/seo.json";

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
