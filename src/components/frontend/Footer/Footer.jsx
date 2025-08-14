import React from "react";
import data from "../../database/localDB.json";
import "../../frontend/Footer/Footer.css";

const Footer = () => {
    const home = data.home;
    return (
        <div className="copyright p-3 text-white text-center bg-dark footer-section">
            <p className="m-0 text-white">© 2016 - {new Date().getFullYear()} {home.name} — All Rights Reserved.</p>
        </div>
    );
};
export default Footer;
