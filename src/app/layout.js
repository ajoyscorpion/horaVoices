
import React from "react";
import "./globals.css";

export const metadata = {
  title: "Hora Voices",
  description: "Hora Voice Official Site",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/HoraIcon.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
