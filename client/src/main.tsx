import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet";
import App from "./App";
import "./index.css";
import "./lib/i18n"; // Import i18n configuration

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#9333EA" />
      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      {/* Preconnect to external resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* Load Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
        rel="stylesheet"
      />
    </Helmet>
    <App />
  </>,
);
