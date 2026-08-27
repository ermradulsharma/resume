import React from 'react';
import { useTheme } from '../../store/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="d-flex align-items-center gap-2">
            <i className={`bi bi-sun-fill ${theme === 'light' ? 'text-warning' : 'text-secondary'}`} style={{ fontSize: '1.2rem' }} aria-hidden="true"></i>
            <div className="form-check form-switch custom-switch mb-0" style={{ transform: 'scale(1.2)', cursor: 'pointer' }}>
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="theme-switch"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    aria-label="Toggle dark mode theme switch"
                />
            </div>
            <i className={`bi bi-moon-fill ${theme === 'dark' ? 'text-info' : 'text-secondary'}`} style={{ fontSize: '1rem' }} aria-hidden="true"></i>
        </div>
    );
};

export default ThemeToggle;
