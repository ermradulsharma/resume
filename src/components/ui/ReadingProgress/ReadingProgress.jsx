import React, { useState, useEffect } from 'react';
import './ReadingProgress.css';

const ReadingProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const updateScrollProgress = () => {
        const currentScrollY = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (totalHeight > 0) {
            const progress = (currentScrollY / totalHeight) * 100;
            setScrollProgress(progress);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <div className="reading-progress-container">
            <div
                className="reading-progress-bar"
                style={{ width: `${scrollProgress}%` }}
                role="progressbar"
                aria-valuenow={scrollProgress}
                aria-valuemin="0"
                aria-valuemax="100"
            />
        </div>
    );
};

export default ReadingProgress;
