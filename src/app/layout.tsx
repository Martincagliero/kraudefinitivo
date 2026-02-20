import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const maguntia = UnifrakturMaguntia({
  subsets: ["latin"],
  variable: "--font-maguntia",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Krautermeister | Licor de Hierbas Argentino",
  description: "Krautermeister: herbal, profundo, argentino. Licor de hierbas artesanal de Argentina.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <style>{`
          :root {
            --font-playfair: ${playfair.variable};
            --font-inter: ${inter.variable};
            --font-maguntia: ${maguntia.variable};
          }
        `}</style>
      </head>
      <body
        style={{
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
        }}
        className="bg-kraut-dark text-kraut-white overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
