import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Imaginify | Transform your images",
  description: "AI powered image manipulation tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#624CF5" } }}>
      <html lang="en">
        <body className={cn("font-ibmPlex antialiased", ibmPlex.variable)}>
          {children}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-BE1GL6Q70E"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BE1GL6Q70E');
            `}
          </Script>
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
