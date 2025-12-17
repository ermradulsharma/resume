import ReactGA from "react-ga4";

const GA_ID = "G-NMCW7EH7M0";

const isProd = () =>
    typeof window !== "undefined" &&
    window.location.hostname !== "localhost";

/**
 * Initialize GA4
 * Call once on app load
 */
export const initGA = () => {
    if (!isProd()) {
        console.log("GA Init:", GA_ID);
        return;
    }

    ReactGA.initialize(GA_ID);
};

/**
 * Track page views
 * Call on route change
 */
export const trackPage = (path) => {
    if (!isProd()) {
        console.log("GA Pageview:", path);
        return;
    }

    ReactGA.send({
        hitType: "pageview",
        page: path
    });
};

/**
 * Track custom events
 * 
 * @param {Object} params
 * @param {string} params.name - Event name (e.g., 'download_resume')
 * @param {string} params.category - Event category (e.g., 'User Interaction')
 * @param {string} params.label - Event label (e.g., 'PDF Download')
 * @param {number} [params.value] - Event value (optional)
 */
export const trackEvent = ({
    name,
    category,
    label,
    value
}) => {
    if (!isProd()) {
        console.log("GA Event:", { name, category, label, value });
        return;
    }

    if (!name) return;

    ReactGA.event(name, {
        category,
        label,
        value
    });
};

