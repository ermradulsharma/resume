import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/buttons.css";

const rootElement = document.getElementById('root');
const hasSkeleton = rootElement.querySelector('.skeleton-loader');

if (rootElement.hasChildNodes() && !hasSkeleton) {
    ReactDOM.hydrateRoot(
        rootElement,
        <HelmetProvider>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </HelmetProvider>
    );
} else {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <HelmetProvider>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </HelmetProvider>
    );
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

