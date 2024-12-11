import Footer from "./Components/Footer";
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
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Itim&display=swap"
          rel="stylesheet"
        /> */}
        <link rel="icon" href="/HoraIcon.jpg" />
      </head>
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
