import type { Metadata } from "next";
import { Manrope, Noto_Sans_JP } from "next/font/google";
import { assetPath } from "@/lib/assetPath";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEYOND中野 | 営業提案用サンプルLP",
  description:
    "BEYOND中野店・中野ANNEX店の魅力を伝える、ミセミルWebの営業提案用サンプルLPです。",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: assetPath("/favicon.ico"),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
