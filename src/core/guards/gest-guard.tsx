"use client";

import { PAGE_PATHS } from "@/config";
import { useAuth } from "@/core/hooks";
import { useEffect } from "react";

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
