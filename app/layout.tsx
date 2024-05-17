import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";

const imbPlex = IBM_Plex_Sans({
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
        <body className={cn("font-ibmPlex antialiased", imbPlex.variable)}>
          {children}
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
