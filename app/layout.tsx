import "./globals.css";

import React from "react";
import Header from './components/Header';
import { FontContextProvider } from "./context/FontContextProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Alec Payos' Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {<Header />}

        <FontContextProvider>
          {children}
        </FontContextProvider>
      </body>
    </html>
  );
}