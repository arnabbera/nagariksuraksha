import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
} from "react-router-dom";

import App from "./App";

import {
  AuthProvider,
} from "../context/AuthContext";

// =========================================================
// GITHUB PAGES SPA DEEP-LINK RECOVERY
// =========================================================
//
// When somebody directly opens:
//
// https://nagariksuraksha.com/posts/some-post-slug
//
// GitHub Pages first serves public/404.html.
// 404.html stores the requested route in sessionStorage
// and redirects the browser to "/".
//
// Before React Router starts, we restore that original URL.
// =========================================================

const spaRedirect =
  sessionStorage.getItem(
    "spa_redirect",
  );

if (spaRedirect) {
  sessionStorage.removeItem(
    "spa_redirect",
  );

  window.history.replaceState(
    null,
    "",
    spaRedirect,
  );
}

// =========================================================
// APPLICATION
// =========================================================

ReactDOM.createRoot(
  document.getElementById(
    "root",
  ),
).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);