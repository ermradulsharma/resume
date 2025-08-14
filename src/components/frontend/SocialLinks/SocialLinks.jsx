import React from "react";
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
import data from "../../database/localDB.json";

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
                return (<a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="social-link"><Icon className="social-icon" />{withNames && <span className="social-name">{item.name}</span>}</a>);
            })}
        </div>
    );
};

export default SocialLinks;
