/**
 * Safely require a project image.
 * Uses a dynamic require with try-catch to prevent runtime errors if an image is missing.
 * 
 * @param {string} imagePath - The filename of the image in src/assets/projects/
 * @param {string} fallbackPath - Optional filename of a fallback image
 * @returns {string|null} - The resolved image path or null
 */
export const getSafeProjectImage = (imagePath, fallbackPath = null) => {
    if (!imagePath) return null;
    
    try {
        // We use a relative path from the utility file to the assets
        return require(`../assets/projects/${imagePath}`);
    } catch (err) {
        console.warn(`[ImageUtils] Image not found: ${imagePath}.`);
        
        if (fallbackPath) {
            try {
                return require(`../assets/projects/${fallbackPath}`);
            } catch (e) {
                console.error(`[ImageUtils] Fallback image also not found: ${fallbackPath}`);
                return null;
            }
        }
        return null;
    }
};
