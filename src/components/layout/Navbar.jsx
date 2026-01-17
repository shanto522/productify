"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to check auth cookie
  const checkAuth = () => {
    const authCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth="));
    setIsLoggedIn(authCookie?.split("=")[1] === "true");
  };

  useEffect(() => {
    checkAuth();

    // Listen for login/logout events
    window.addEventListener("authChanged", checkAuth);

    return () => {
      window.removeEventListener("authChanged", checkAuth);
    };
  }, []);

  const linkClass = (path) =>
    `px-3 py-2 rounded-md transition font-medium ${
      pathname === path
        ? "bg-indigo-600 text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  const handleLogout = () => {
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Trigger authChanged so Navbar updates instantly
    window.dispatchEvent(new Event("authChanged"));
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-white">
      <nav className="container mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Productify
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-3 items-center">
          <Link href="/items" className={linkClass("/items")}>
            Items
          </Link>
          {isLoggedIn && (
            <Link href="/add-item" className={linkClass("/add-item")}>
              Add Item
            </Link>
          )}
          {!isLoggedIn ? (
            <Link href="/login" className={linkClass("/login")}>
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 transition font-medium"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <Link
            href="/items"
            className="block px-6 py-3 border-b hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Items
          </Link>
          {isLoggedIn && (
            <Link
              href="/add-item"
              className="block px-6 py-3 border-b hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Add Item
            </Link>
          )}
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="block px-6 py-3 border-b hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full text-left px-6 py-3 border-b text-red-500 hover:bg-gray-50"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
