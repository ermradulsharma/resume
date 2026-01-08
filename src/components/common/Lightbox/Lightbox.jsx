import React, { useEffect } from 'react';
import { BsXLg, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './Lightbox.css';

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
    // Prevent scrolling when lightbox is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onPrev, onNext]);

    if (currentIndex === -1) return null;

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <button className="lightbox-close" onClick={onClose} aria-label="Close">
                <BsXLg />
            </button>

            <button
                className="lightbox-nav prev"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Previous"
            >
                <BsChevronLeft />
            </button>

            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img
                    src={images[currentIndex]}
                    alt={`Project screenshot ${currentIndex + 1}`}
                    className="lightbox-image"
                />
                <div className="lightbox-counter">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            <button
                className="lightbox-nav next"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Next"
            >
                <BsChevronRight />
            </button>
        </div>
    );
};

export default Lightbox;
