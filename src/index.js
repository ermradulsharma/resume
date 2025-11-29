import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const rootElement = document.getElementById('root');
const hasSkeleton = rootElement.querySelector('.skeleton-loader');

if (rootElement.hasChildNodes() && !hasSkeleton) {
    ReactDOM.hydrateRoot(
        rootElement,
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
} else {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

