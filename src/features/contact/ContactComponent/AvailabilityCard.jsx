import React from 'react';
import { BsCheckCircleFill, BsCurrencyRupee, BsClock, BsGlobe2, BsPersonBadge } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../../utils/analytics/ga';
import './AvailabilityCard.css';

/** HR-facing availability & CTC card shown on Contact page */
const AvailabilityCard = () => {
    return (
        <div className="availability-card" data-aos="fade-up" data-aos-delay="100">
            {/* Status Header */}
            <div className="avail-header">
                <span className="avail-status-dot" aria-hidden="true" />
                <span className="avail-status-text">Open to Work</span>
                <span className="avail-updated">Updated Aug 2026</span>
            </div>

            {/* Quick Info Grid */}
            <div className="avail-grid">
                <div className="avail-item">
                    <BsPersonBadge className="avail-icon" />
                    <div>
                        <span className="avail-label">Availability</span>
                        <span className="avail-value">Immediate · 15 Days Notice</span>
                    </div>
                </div>

                <div className="avail-item">
                    <BsCurrencyRupee className="avail-icon" />
                    <div>
                        <span className="avail-label">Full-Time CTC</span>
                        <span className="avail-value">₹8 – 14 LPA</span>
                    </div>
                </div>

                <div className="avail-item">
                    <BsGlobe2 className="avail-icon" />
                    <div>
                        <span className="avail-label">Freelance / Contract</span>
                        <span className="avail-value">$20–35 /hr · ₹1200–2000 /hr</span>
                    </div>
                </div>

                <div className="avail-item">
                    <BsClock className="avail-icon" />
                    <div>
                        <span className="avail-label">Response Time</span>
                        <span className="avail-value">Within 2 Hours (IST business hrs)</span>
                    </div>
                </div>
            </div>

            {/* Preferences */}
            <div className="avail-preferences">
                {['Full-Time', 'Remote', 'Hybrid', 'Freelance / Contract', 'On-site (Indore / Bhopal)'].map((pref) => (
                    <span key={pref} className="avail-pref-tag">
                        <BsCheckCircleFill className="text-success me-1" style={{ fontSize: '0.65rem' }} />
                        {pref}
                    </span>
                ))}
            </div>

            {/* CTA */}
            <Link
                to="/resume"
                className="avail-cta"
                onClick={() => trackEvent({ action: 'click_view_resume_from_contact', category: 'Contact', label: 'Availability Card CTA', value: 1 })}
            >
                View Full Resume →
            </Link>
        </div>
    );
};

export default AvailabilityCard;
