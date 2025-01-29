import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const kodakku = localFont({
//   src: "./fonts/kodakku-cufonfonts/kodakku.ttf",
//   variable: "--font-kodakku",
// });

export const metadata: Metadata = {
  title: "Tkotizo",
  description: "Cotiza lo que quieras de forma facil y rapida, sin intermediarios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{fontFamily: 'Kodakku, sans-serif'}}
        // className={`${geistSans.variable} ${kodakku.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
