"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    // On mount, read preference from localStorage or system
    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("theme");
        if (stored === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else if (stored === "light") {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        } else {
            // System preference
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (prefersDark) {
                document.documentElement.classList.add("dark");
                setIsDark(true);
            }
        }
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        if (next) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    // Avoid flash during hydration
    if (!mounted) return <div className="w-10 h-10" />;

    return (
        <button
            onClick={toggle}
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none group"
            title={isDark ? "Modo claro" : "Modo oscuro"}
        >
            {/* Sun icon */}
            <span
                className={`material-icons absolute text-yellow-500 transition-all duration-300 ${isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-90"
                    }`}
            >
                light_mode
            </span>
            {/* Moon icon */}
            <span
                className={`material-icons absolute text-slate-600 dark:text-slate-300 transition-all duration-300 ${isDark ? "opacity-0 scale-75 -rotate-90" : "opacity-100 scale-100 rotate-0"
                    }`}
            >
                dark_mode
            </span>
        </button>
    );
}
