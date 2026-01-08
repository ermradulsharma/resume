import React from "react";
import SEO from "../../../components/common/SEO";
import ContactSection from "../../../components/frontend/Contact/Contact";
import LetsConnect from "../../../components/LetsConnect";
import contact from "../../../assets/contact.webp";
import seoData from "../../../components/database/seo.json";

const ContactPage = () => {
    return (
        <div className="contact-page">
            <SEO
                title={seoData.contactSeo.title}
                description={seoData.contactSeo.description}
                keywords={seoData.contactSeo.keywords}
                ogUrl={seoData.contactSeo.ogUrl}
                canonicalUrl={seoData.contactSeo.canonicalUrl}
                ogImage={seoData.contactSeo.ogImage}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": seoData.contactSeo.title,
                    "description": seoData.contactSeo.description,
                    "url": seoData.contactSeo.ogUrl
                }}
            />
            <div className="contact-hero text-white d-flex align-items-center justify-content-center text-center" style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('${contact}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "90vh",
                position: "relative"
            }}>
                <div className="hero-content">
                    <h1 className="display-4 fw-bold">Get In Touch</h1>
                    <p className="lead text-white">Have a project in mind or just want to chat? Reach out anytime!</p>
                </div>
            </div>
            <ContactSection />
            <LetsConnect />
        </div>
    );
};

export default ContactPage;
