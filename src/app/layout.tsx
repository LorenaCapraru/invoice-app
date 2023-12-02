import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "./recoil/RecoilRootWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CGM Drylining Ltd",
  description: "Invoice application for CGM",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilRootWrapper>
        <body className={inter.className}>{children}</body>
      </RecoilRootWrapper>
    </html>
  );
}
