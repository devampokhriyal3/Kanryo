import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ContactProvider } from "@/components/ContactProvider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kanryo.studio"),
   icons: {
    icon: [
      {
        url: "/Kanryo_logo.png",
        type: "image/png",
      },
    ],
    apple: "/Kanryo_logo.png",
  },
  title: "Kanryo — Digital Growth & Software Solutions",
  description:
    "Kanryo is a technology partner that designs, builds, and grows digital products for ambitious companies — software, design, and demand in one studio.",
  openGraph: {
    title: "Kanryo — Digital Growth & Software Solutions",
    description:
      "Strategy, design, technology, and marketing as one engagement. Build the product. Then grow it.",
    type: "website",
    locale: "en_US",
    siteName: "Kanryo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanryo — Digital Growth & Software Solutions",
    description:
      "A technology partner that doesn’t just build digital products — it helps businesses grow them.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className={`${jakarta.className} min-h-full bg-bg text-ink`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <ContactProvider>{children}</ContactProvider>
      </body>
    </html>
  );
}
