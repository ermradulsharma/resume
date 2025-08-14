import React from "react";
import data from "../../database/localDB.json";
const Footer = () => {
    const home = data.home;
    return (
        <div className="copyright p-3 text-white text-center bg-dark">
            <p className="m-0 text-white">© Copyright 2025. All rights Reserved. {home.name}</p>
        </div>
    );
};
export default Footer;
