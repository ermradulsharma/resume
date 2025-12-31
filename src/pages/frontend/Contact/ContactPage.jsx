import React from "react";
import SEO from "../../../components/common/SEO";
import ContactSection from "../../../components/frontend/Contact/Contact";
import LetsConnect from "../../../components/LetsConnect";
import contact from "../../../assets/contact.webp";
const ContactPage = () => {
    return (
        <div className="contact-page">
            <SEO
                title="Contact Me | Mradul Sharma - Let's Talk Development"
                description="Get in touch for project collaborations, technical consulting, or just to say hi. I'm available for freelance work and full-stack development opportunities."
                keywords="Contact Mradul Sharma, Hire Full Stack Developer, Laravel Consultant, React Developer for Hire, Technical Collaboration, Software Development Inquiry"
                ogUrl="https://mradulsharma.vercel.app/contact"
                canonicalUrl="https://mradulsharma.vercel.app/contact"
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
