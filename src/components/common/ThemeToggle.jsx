import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="d-flex align-items-center gap-2">
            <i className={`bi bi-sun-fill ${theme === 'light' ? 'text-warning' : 'text-secondary'}`} style={{ fontSize: '1.2rem' }}></i>
            <Form.Check
                type="switch"
                id="theme-switch"
                checked={theme === 'dark'}
                onChange={toggleTheme}
                className="custom-switch"
                style={{ transform: 'scale(1.2)', cursor: 'pointer' }}
                aria-label="Toggle theme"
            />
            <i className={`bi bi-moon-fill ${theme === 'dark' ? 'text-info' : 'text-secondary'}`} style={{ fontSize: '1rem' }}></i>
        </div>
    );
};

export default ThemeToggle;
