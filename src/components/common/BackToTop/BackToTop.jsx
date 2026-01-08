import React, { useState, useEffect } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import './BackToTop.css';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`back-to-top-wrapper ${isVisible ? 'visible' : ''}`}>
            <button
                type="button"
                className="back-to-top-btn d-flex align-items-center justify-content-center shadow-lg"
                onClick={scrollToTop}
                aria-label="Back to top"
            >
                <BsArrowUpShort className="fs-2" />
            </button>
        </div>
    );
};

export default BackToTop;
