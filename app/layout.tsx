import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import {
  Space_Grotesk,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const fontBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Vectra Solutions | Scalable Apps & Zero-Defect Quality",
    template: "%s | Vectra Solutions",
  },
  description:
    "Full-Stack Web & Mobile MVPs, Playwright & Selenium E2E Automation, and SRE Cloud Infrastructure.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
  lang="en"
  className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable}`}
>
      <body className="min-h-full flex flex-col">{children}<SpeedInsights /><Analytics /></body>
    </html>
  );
}
