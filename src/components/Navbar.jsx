import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const location = useLocation();
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide text-black dark:text-white"
        >
          BLOGS
        </Link>

        {/* NAV LINKS */}
        <div className="flex gap-8 text-sm font-medium items-center">
          <Link
            to="/"
            className={`transition ${
              location.pathname === "/"
                ? "text-blue-600"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
            }`}
          >
            Home
          </Link>

          <Link
            to="/add"
            className={`transition ${
              location.pathname === "/add"
                ? "text-blue-600"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
            }`}
          >
            Add Post
          </Link>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
