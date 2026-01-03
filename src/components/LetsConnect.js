import React from 'react';
import { Link } from 'react-router-dom';

export default function LetsConnect() {
    return (
        <Link to="/contact" className="connect text-decoration-none py-4 text-center" style={{ color: "var(--primary-color)" }}>
            <div className="arrows">
                <i className="bx bx-right-arrow-alt"></i>
                <i className="bx bx-right-arrow-alt"></i>
                <i className="bx bx-right-arrow-alt"></i>
            </div>
            <p className='lt_txt mb-0'>Let's Connect!</p>
        </Link>
    );
}