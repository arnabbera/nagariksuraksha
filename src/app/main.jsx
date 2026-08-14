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
    const searchParams =
      new URLSearchParams(
        window.location.search,
      );

    const queryRedirect =
      searchParams.get(
        "spa_redirect",
      );

    const storedRedirect =
      sessionStorage.getItem(
        "spa_redirect",
      );

    const redirectUrl =
      queryRedirect ||
      storedRedirect;

    sessionStorage.removeItem(
      "spa_redirect",
    );

    if (!redirectUrl) {
      return;
    }

    window.history.replaceState(
      null,
      "",
      redirectUrl,
    );
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
