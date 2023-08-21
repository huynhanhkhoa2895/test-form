import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { AppProvider } from "@/contexts";
import { ReactNode } from "react";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Next Generation",
  description: "Next Generation",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
