"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const MOCK_EMAIL = "test@example.com";
const MOCK_PASSWORD = "123456";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    setTimeout(() => {
      if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
        // ✅ Set auth cookie
        document.cookie = "auth=true; path=/";

        // ✅ Dispatch event for Navbar to update instantly
        window.dispatchEvent(new Event("authChanged"));

        // ✅ Show success toast
        toast.success("Login successful!");

        // Redirect after short delay
        setTimeout(() => router.push("/items"), 1000);
      } else {
        toast.error("Invalid email or password");
      }
      setLoading(false);
    }, 500);
  };

  return (
<div className="min-h-screen flex items-center justify-center px-4 ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-200 space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-600">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500">
          Sign in to manage your products
        </p>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition shadow-sm hover:shadow-md"
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition shadow-sm hover:shadow-md"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition shadow-md hover:shadow-lg flex justify-center items-center ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading && (
            <svg
              className="w-5 h-5 animate-spin mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          )}
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
