"use client";

import { useEffect } from "react";

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.theme = "dark";
  }, []);

  return <div>{children}</div>;
}
