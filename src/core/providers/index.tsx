"use client";

import { AuthProvider } from "./auth";
import ThemeProvider from "./theme";

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
