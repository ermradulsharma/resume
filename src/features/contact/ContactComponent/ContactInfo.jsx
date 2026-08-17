import React from "react";
import { BsClock, BsWhatsapp, BsPhoneVibrateFill, BsMailbox2Flag } from "react-icons/bs";
import SocialLinks from "../../../components/layout/SocialLinks/SocialLinks";
import AvailabilityCard from "./AvailabilityCard";
import { trackEvent } from "../../../utils/analytics/ga";

const ContactInfo = () => {
    return (
        <div className="info-box p-3 p-lg-5" data-aos="fade-up" data-aos-delay="200">
            <h2>Contact Info</h2>
            <p>I’m always open to discussing new opportunities, freelance work, or helping with your project. Let’s connect!</p>
            <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box"><BsPhoneVibrateFill /></div>
                <div className="content">
                    <h4>Phone</h4>
                    <p><a href="tel:+917252933077" className="text-white text-decoration-none" onClick={() => trackEvent({ action: "click_contact_link", category: "Contact", label: "Phone", value: 1 })}>+91 72529 33077</a></p>
                </div>
            </div>
            <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                    <BsMailbox2Flag />
                </div>
                <div className="content">
                    <h4>Email</h4>
                    <p><a href="mailto:mradulsharma786@gmail.com" className="text-white text-decoration-none" onClick={() => trackEvent({ action: "click_contact_link", category: "Contact", label: "Email", value: 1 })}>mradulsharma786@gmail.com</a></p>
                </div>
            </div>
            <div className="info-item" data-aos="fade-up" data-aos-delay="450">
                <div className="icon-box"><BsWhatsapp /></div>
                <div className="content">
                    <h4>WhatsApp</h4>
                    <p><a href="https://wa.me/917252933077" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none" onClick={() => trackEvent({ action: "click_contact_link", category: "Contact", label: "WhatsApp", value: 1 })}>Chat on WhatsApp</a></p>
                </div>
            </div>
            <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box"><BsClock /></div>
                <div className="content">
                    <h4>Working Hours</h4>
                    <p>Mon – Sat: 10:00 AM – 7:00 PM IST</p>
                </div>
            </div>
            <SocialLinks withNames platforms={['GitHub', 'LinkedIn', 'X', 'Medium', 'Telegram']} />
            <AvailabilityCard />
            <p className="mt-4 small fst-italic text-white text-center">Currently coding from ☕ Coffee-powered desk.</p>
        </div>
    );
};

export default ContactInfo;
