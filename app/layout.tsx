import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AZANA WORLDWIDE - Maison de Disques | RDC",
  description:
    "AZANA WORLDWIDE est une maison de disques musicale basée à l'est de la République Démocratique du Congo. Distribution et promotion musicale sur toutes les plateformes.",
  openGraph: {
    title: "AZANA WORLDWIDE - Maison de Disques",
    description:
      "Maison de disques musicale basée à l'est de la République Démocratique du Congo. Distribution et promotion musicale sur toutes les plateformes.",
    type: "website",
    url: "https://azanaworldwide.online",
    siteName: "AZANA WORLDWIDE",
    images: [
      {
        url: "https://azanaworldwide.online/azana-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "AZANA WORLDWIDE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AZANA WORLDWIDE - Maison de Disques",
    description:
      "Maison de disques musicale basée à l'est de la RDC. Distribution et promotion musicale sur toutes les plateformes.",
    images: ["https://azanaworldwide.online/azana-logo-transparent.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
