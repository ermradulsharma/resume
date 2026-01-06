import React from "react";
// Force rebuild
import {
    BsLinkedin,
    BsGithub,
    BsInstagram,
    BsTwitterX,
    BsGitlab,
    BsStackOverflow,
    BsMedium,
    BsFacebook,
    BsYoutube,
    BsTelegram,
} from "react-icons/bs";
import {
    FaTiktok,
    FaSnapchat,
    FaPinterest,
    FaBitbucket,
    FaStackExchange,
    FaDev,
    FaCodepen,
    FaHackerrank,
    FaWordpress,
    FaBlogger,
    FaTwitch,
    FaVimeo,
    FaWhatsapp,
    FaDiscord,
    FaSlack,
    FaReddit,
    FaQuora,
    FaBehance,
    FaDribbble,
    FaDeviantart
} from "react-icons/fa";
import {
    SiThreads,
    SiLeetcode,
    SiCodesignal,
    SiGeeksforgeeks,
    SiSubstack,
    SiDailymotion,
    SiCanva
} from "react-icons/si";
import data from "../../database/socialMedia.json";
import { trackEvent } from "../../../utils/analytics/ga";
import "./SocialLinks.css";

const iconMap = {
    BsLinkedin: BsLinkedin,
    BsGithub: BsGithub,
    BsGitlab: BsGitlab,
    BsStackOverflow: BsStackOverflow,
    BsMedium: BsMedium,
    BsTwitterX: BsTwitterX,
    BsFacebook: BsFacebook,
    BsInstagram: BsInstagram,
    BsYoutube: BsYoutube,
    BsTelegram: BsTelegram,
    FaTiktok: FaTiktok,
    FaSnapchat: FaSnapchat,
    SiThreads: SiThreads,
    FaPinterest: FaPinterest,
    FaBitbucket: FaBitbucket,
    FaStackExchange: FaStackExchange,
    FaDev: FaDev,
    FaCodepen: FaCodepen,
    FaHackerrank: FaHackerrank,
    SiLeetcode: SiLeetcode,
    SiCodesignal: SiCodesignal,
    SiGeeksforgeeks: SiGeeksforgeeks,
    SiSubstack: SiSubstack,
    FaWordpress: FaWordpress,
    FaBlogger: FaBlogger,
    FaTwitch: FaTwitch,
    FaVimeo: FaVimeo,
    SiDailymotion: SiDailymotion,
    FaWhatsapp: FaWhatsapp,
    FaDiscord: FaDiscord,
    FaSlack: FaSlack,
    FaReddit: FaReddit,
    FaQuora: FaQuora,
    FaBehance: FaBehance,
    FaDribbble: FaDribbble,
    FaDeviantart: FaDeviantart,
    SiCanva: SiCanva
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
