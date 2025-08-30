import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="btn btn-primary">{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}</button>
    );
}
