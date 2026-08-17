import React, { useEffect, useRef } from 'react';
import { BsXLg, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './Lightbox.css';

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
    const dialogRef = useRef(null);
    const closeButtonRef = useRef(null);

    useEffect(() => {
        const previouslyFocusedElement = document.activeElement;
        const previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            if (previouslyFocusedElement instanceof HTMLElement) {
                previouslyFocusedElement.focus();
            }
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onClose();
                return;
            }
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                onPrev();
                return;
            }
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                onNext();
                return;
            }
            if (event.key !== 'Tab' || !dialogRef.current) return;

            const focusableElements = dialogRef.current.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])');
            if (focusableElements.length === 0) {
                event.preventDefault();
                dialogRef.current.focus();
                return;
            }

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onPrev, onNext]);

    if (currentIndex === -1) return null;

    return (
        <div
            ref={dialogRef}
            className="lightbox-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Project screenshot gallery"
            tabIndex={-1}
            onClick={onClose}
        >
            <button ref={closeButtonRef} className="lightbox-close" onClick={(event) => { event.stopPropagation(); onClose(); }} aria-label="Close gallery">
                <BsXLg />
            </button>

            <button
                className="lightbox-nav prev"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Previous screenshot"
            >
                <BsChevronLeft />
            </button>

            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img
                    src={images[currentIndex]}
                    alt={`Project screenshot ${currentIndex + 1}`}
                    className="lightbox-image"
                />
                <div className="lightbox-counter" aria-live="polite" aria-atomic="true">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            <button
                className="lightbox-nav next"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Next screenshot"
            >
                <BsChevronRight />
            </button>
        </div>
    );
};

export default Lightbox;
