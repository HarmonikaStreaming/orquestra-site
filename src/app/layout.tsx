import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1320",
};

export const metadata: Metadata = {
  title: "Orquestra Live — Plataforma de Eventos Digitais",
  description:
    "Plataforma white label de streaming para eventos corporativos e lançamentos digitais. Controle de acesso, captura de leads, branding personalizado e relatórios completos.",
  keywords: [
    "streaming white label",
    "plataforma de eventos digitais",
    "webinar corporativo",
    "transmissão ao vivo",
    "controle de acesso",
    "captura de leads",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Orquestra Live",
    title: "Orquestra Live — Plataforma de Eventos Digitais",
    description:
      "Streaming white label para eventos corporativos e lançamentos digitais com controle total de acesso, branding e relatórios.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Orquestra Live — Plataforma de Eventos Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orquestra Live — Plataforma de Eventos Digitais",
    description:
      "Streaming white label para eventos corporativos com controle de acesso e relatórios completos.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Orquestra Live",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ol-bg text-white">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
