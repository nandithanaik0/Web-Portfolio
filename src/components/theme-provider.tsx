"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
theme: Theme;
toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
const [theme, setTheme] = useState<Theme>("dark");

  // Load saved theme or system preference
useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;

    const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = saved ?? (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
}, []);

const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
};

return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
    </ThemeContext.Provider>
);
}

export function useTheme() {
const ctx = useContext(ThemeContext);
if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
return ctx;
}
