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
// RESTORE GITHUB PAGES SPA ROUTE
// =========================================================

const restoreSpaRoute = () => {
  try {
    const redirectUrl =
      sessionStorage.getItem(
        "spa_redirect",
      );

    if (!redirectUrl) {
      return;
    }

    sessionStorage.removeItem(
      "spa_redirect",
    );

    const currentUrl =
      window.location.pathname +
      window.location.search +
      window.location.hash;

    if (
      redirectUrl !== currentUrl
    ) {
      window.history.replaceState(
        null,
        "",
        redirectUrl,
      );
    }
  } catch (error) {
    console.error(
      "Unable to restore SPA route:",
      error,
    );
  }
};

restoreSpaRoute();

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
