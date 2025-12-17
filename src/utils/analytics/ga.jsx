import ReactGA from "react-ga4";

const GA_ID = "G-NMCW7EH7M0"; // hardcoded as requested

const isProd = () =>
    typeof window !== "undefined" &&
    window.location.hostname !== "localhost";

/**
 * Initialize GA4
 * Call once on app load
 */
export const initGA = () => {
    if (!isProd()) return;

    ReactGA.initialize(GA_ID);
};

/**
 * Track page views
 * Call on route change
 */
export const trackPage = (path) => {
    if (!isProd()) return;

    ReactGA.send({
        hitType: "pageview",
        page: path
    });
};

/**
 * Recruiter-readable, heatmap-style events
 *
 * Example:
 * trackEvent({
 *   name: "resume_download",
 *   category: "engagement",
 *   label: "resume_pdf",
 *   value: 1
 * })
 */
export const trackEvent = ({
    name,
    category,
    label,
    value
}) => {
    if (!isProd() || !name) return;

    ReactGA.event(name, {
        category,
        label,
        value
    });
};
