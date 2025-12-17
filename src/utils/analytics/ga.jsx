import ReactGA from "react-ga4";

const GA_ID = "G-NMCW7EH7M0"; // hardcoded as requested

export const initGA = () => {
    if (window.location.hostname !== "localhost") {
        ReactGA.initialize(GA_ID);
    }
};

export const trackPage = (path) => {
    if (window.location.hostname !== "localhost") {
        ReactGA.send({ hitType: "pageview", page: path });
    }
};

/**
 * Heatmap-style, recruiter-readable events
 */
export const trackEvent = ({
    category,
    action,
    label,
    value
}) => {
    if (window.location.hostname !== "localhost") {
        ReactGA.event({
            category,
            action,
            label,
            value
        });
    }
};
