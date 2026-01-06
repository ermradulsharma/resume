import { useState, useEffect } from "react";
import BrandButton from "./common/BrandButton";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <BrandButton variant="brand-outline" onClick={() => setTheme(theme === "light" ? "dark" : "light")} size="sm">{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}</BrandButton>
    );
}
