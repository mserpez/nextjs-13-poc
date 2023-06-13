"use client";

import { useEffect } from "react";
import { PAGE_PATHS } from "../constants";
import { useAuth } from "../hooks";

export default function GestGuard({ children }: React.PropsWithChildren) {
  const { isAuthenticated, isInitialized } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = PAGE_PATHS.HOME;
    }
  }, [isAuthenticated, isInitialized]);

  if (!isInitialized) return null;

  return children;
}
