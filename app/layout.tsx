import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "AZANA WORLDWIDE - Maison de Disques | RDC",
  description:
    "AZANA WORLDWIDE est une maison de disques musicale basée à l'est de la République Démocratique du Congo. Distribution et promotion musicale sur toutes les plateformes.",
  generator: "v0.app",
  openGraph: {
    title: "AZANA WORLDWIDE - Maison de Disques | RDC",
    description:
      "AZANA WORLDWIDE est une maison de disques musicale basée à l'est de la République Démocratique du Congo. Distribution et promotion musicale sur toutes les plateformes.",
    images: [
      {
        url: "/azana-logo.png",
        width: 1200,
        height: 630,
        alt: "AZANA WORLDWIDE",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AZANA WORLDWIDE - Maison de Disques | RDC",
    description:
      "AZANA WORLDWIDE est une maison de disques musicale basée à l'est de la République Démocratique du Congo. Distribution et promotion musicale sur toutes les plateformes.",
    images: ["/azana-logo.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('azana-theme') || 'dark';
                document.documentElement.classList.add(theme);
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body className={`${poppins.className} font-sans antialiased`}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
