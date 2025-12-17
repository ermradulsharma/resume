import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const rootElement = document.getElementById('root');
const hasSkeleton = rootElement.querySelector('.skeleton-loader');

if (rootElement.hasChildNodes() && !hasSkeleton) {
    ReactDOM.hydrateRoot(
        rootElement,
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    );
} else {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    );
}

