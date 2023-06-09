import { Inter } from "next/font/google";
import "./globals.css";

// DEMO: Font family
const inter = Inter({ subsets: ["latin"], weight: ["300", "500", "700"] });

// DEMO: Metadata
export const metadata = {
  title: "POC APP",
  description: "Generated by create next app",
};

// DEMO: Layout
export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
