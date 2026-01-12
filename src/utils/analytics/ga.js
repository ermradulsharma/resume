import ReactGA from "react-ga4";

const GA_ID = "G-NMCW7EH7M0";

/**
 * Check if the current environment is production.
 * @returns {boolean}
 */
const isDev = () =>
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

/**
 * Initialize GA4
 * Call once on app load
 */
export const initGA = () => {
  const enableDebug = process.env.REACT_APP_ENABLE_GA_DEBUG === "true";

  if (isDev() && !enableDebug) {
    console.log("GA Init:", GA_ID);
    return;
  }

  ReactGA.initialize(GA_ID, { debug: enableDebug });
};

/**
 * Track page views
 * Call on route change
 */
export const trackPage = (path) => {
  const enableDebug = process.env.REACT_APP_ENABLE_GA_DEBUG === "true";

  if (isDev() && !enableDebug) {
    console.log("GA Pageview:", path);
    return;
  }

  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

/**
 * Track custom events
 *
 * @param {Object} params
 * @param {string} params.action - Event action (e.g., 'download_resume')
 * @param {string} params.category - Event category (e.g., 'Engagement')
 * @param {string} params.label - Event label (e.g., 'PDF Download')
 * @param {number} [params.value] - Event value (optional)
 * @param {boolean} [params.nonInteraction] - If the event is non-interactive (optional)
 */
export const trackEvent = ({
  action,
  category,
  label,
  value,
  nonInteraction = false,
}) => {
  const enableDebug = process.env.REACT_APP_ENABLE_GA_DEBUG === "true";

  if (isDev() && !enableDebug) {
    const eventData = { action, category, label, value, nonInteraction };
    // Remove undefined keys for cleaner log
    Object.keys(eventData).forEach(
      (key) => eventData[key] === undefined && delete eventData[key]
    );

    console.log("GA Event:", eventData);
    return;
  }

  if (!action) return;

  ReactGA.event(action, {
    category,
    label,
    value,
    nonInteraction,
  });
};
