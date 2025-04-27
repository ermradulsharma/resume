import React from "react";

import data from '../database/localDB.json';

const Footer = () => {
  const home = data.home;
    return (
        <div className="copyright" style={{ color: 'gainsboro',backgroundColor: "black",paddingBottom: "20px" }}>
        <p>© Copyright 2025. All rights Reserved. {home.name}</p>
      </div>
     
    );  
}

export default Footer