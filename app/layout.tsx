import type { Metadata } from "next";
import {Inter,IBM_Plex_Serif} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets:['latin'], variable:'--front-inter'});
const ibmPlexSerif=IBM_Plex_Serif({subsets:['latin'], variable:'--font-ibm-plex-serif',weight:['500','700']});

export const metadata: Metadata = {
  title: "SunShineBank",
  description: "Modern Banking Platform for Texans",
  icons:{
    icon:'icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
