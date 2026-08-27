import React from "react";
import {
    BsLinkedin,
    BsGithub,
    BsGitlab,
    BsStackOverflow,
    BsMedium,
    BsTwitterX,
    BsFacebook,
    BsInstagram,
    BsYoutube,
    BsTelegram,
} from "react-icons/bs";
import { FaDev, FaSlack } from "react-icons/fa";
import { SiSubstack, SiLeetcode } from "react-icons/si";
import data from "../../../data/socialMedia.json";
import { trackEvent } from "../../../utils/analytics/ga";
import "./SocialLinks.css";

const iconMap = {
    BsLinkedin,
    BsGithub,
    BsGitlab,
    BsStackOverflow,
    BsMedium,
    BsTwitterX,
    BsFacebook,
    BsInstagram,
    BsYoutube,
    BsTelegram,
    FaDev,
    FaSlack,
    SiSubstack,
    SiLeetcode
};

const SocialLinks = ({ withNames = false, platforms }) => {
    if (!platforms || platforms.length === 0) return null;
    const socialMedia = data.social;
    let filtered = [];
    if (platforms === "all") {
        filtered = socialMedia.filter((item) => item.status === true);
    } else if (Array.isArray(platforms) && platforms.length > 0) {
        filtered = socialMedia.filter((item) => item.status === true && platforms.includes(item.name));
    } else {
        return null;
    }

    if (filtered.length === 0) return null;
    return (
        <div className="social-links" data-aos="fade-up" data-aos-delay="400">
            {filtered.filter(item => item.status === true).map((item, index) => {
                const Icon = iconMap[item.icon];
                if (!Icon) return null;
                return (<a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className={`social-link ${withNames ? 'has-name' : ''}`} aria-label={`${item.name} Profile`} onClick={() => trackEvent({ action: "click_social_link", category: "Engagement", label: item.name })}><Icon className="social-icon" />{withNames && <span className="social-name">{item.name}</span>}</a>);
            })}
        </div>
    );
};

export default SocialLinks;
