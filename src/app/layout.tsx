import "@/styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "IPL Team Rating System",
  description: "Rate IPL teams and view results",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
