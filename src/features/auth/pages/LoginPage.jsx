import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import {
  getUserRole,
  loginWithGoogle,
} from "../../../firebase/auth";

export default function LoginPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      setError("");

      const user = await loginWithGoogle();
      const role = getUserRole(user.email);

      navigate(role === "admin" ? "/admin" : "/student", {
        replace: true,
      });
    } catch (loginError) {
      console.error(loginError);

      if (loginError.code === "auth/popup-closed-by-user") {
        setError("Google login was cancelled.");
      } else if (loginError.code === "auth/popup-blocked") {
        setError("Please allow pop-ups and try again.");
      } else {
        setError("Google login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            NagarikSuraksha
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-950">
            Student Login
          </h1>

          <p className="mt-3 leading-7 text-slate-600">
            Sign in using your Google account to access the learning portal.
          </p>
        </div>

        {error && (
          <div className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-5 py-4 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FaGoogle />

          {isLoading ? "Signing in..." : "Continue with Google"}
        </button>

        <p className="mt-6 text-center text-sm leading-6 text-slate-500">
          The administrator uses the same login. The account
          beraarnab@gmail.com will automatically open the Admin Dashboard.
        </p>
      </section>
    </main>
  );
}