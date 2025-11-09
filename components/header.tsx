"use client"

import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 z-50 relative h-10">
            <div className="relative h-10 w-40">
              <Image
                src="/azana-logo-transparent.png"
                alt="AZANA WORLDWIDE"
                fill
                className="object-contain"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(37%) sepia(97%) saturate(2742%) hue-rotate(356deg) brightness(98%) contrast(106%)",
                }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                pathname === "/" ? "text-primary" : "text-foreground"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                pathname === "/about" ? "text-primary" : "text-foreground"
              }`}
            >
              À Propos
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                pathname === "/services" ? "text-primary" : "text-foreground"
              }`}
            >
              Services
            </Link>
            <Link
              href="/news"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                pathname === "/news" || pathname.startsWith("/news/") ? "text-primary" : "text-foreground"
              }`}
            >
              Actualités
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                pathname === "/contact" ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-9 w-9"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Changer le mode</span>
            </Button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-9 w-9"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Changer le mode</span>
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="h-9 w-9">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium hover:text-primary transition-colors ${
                  pathname === "/" ? "text-primary" : "text-foreground"
                }`}
              >
                Accueil
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium hover:text-primary transition-colors ${
                  pathname === "/about" ? "text-primary" : "text-foreground"
                }`}
              >
                À Propos
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium hover:text-primary transition-colors ${
                  pathname === "/services" ? "text-primary" : "text-foreground"
                }`}
              >
                Services
              </Link>
              <Link
                href="/news"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium hover:text-primary transition-colors ${
                  pathname === "/news" || pathname.startsWith("/news/") ? "text-primary" : "text-foreground"
                }`}
              >
                Actualités
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium hover:text-primary transition-colors ${
                  pathname === "/contact" ? "text-primary" : "text-foreground"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
