"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { PAGE_PATHS } from "../constants";
import { useAuth } from "../hooks";

export default function AuthGuard({ children }: React.PropsWithChildren) {
  const { isAuthenticated, isInitialized, user } = useAuth();
  const { replace } = useRouter();

  useEffect(() => {
    if (!isInitialized) return;

    if (isAuthenticated) {
      console.log("User", user);
    } else {
      replace(PAGE_PATHS.HOME);
    }
  }, [isAuthenticated, isInitialized, replace, user]);

  if (!isInitialized) return null;

  return children;
}
