"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Music, Radio, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { getRecentNews } from "@/lib/news-data"
import Image from "next/image"

export function Hero() {
  const newsArticles = getRecentNews(4)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsArticles.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, newsArticles.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsArticles.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsArticles.length) % newsArticles.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="accueil" className="relative pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <div className="relative group">
            {/* Carousel Container - 16:9 aspect ratio */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
              {newsArticles.map((article, index) => (
                <Link href={`/news/${article.slug}`} key={article.id}>
                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  </div>
                </Link>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-2.5 rounded-full bg-black/70 hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-2.5 rounded-full bg-black/70 hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </button>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs md:text-sm font-semibold rounded-full">
                  {newsArticles[currentSlide]?.category}
                </span>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {newsArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="mt-6 space-y-2">
              <Link href={`/news/${newsArticles[currentSlide]?.slug}`}>
                <h3 className="text-xl md:text-2xl font-bold hover:text-primary transition-colors">
                  {newsArticles[currentSlide]?.title}
                </h3>
              </Link>
              <p className="text-sm md:text-base text-muted-foreground">{newsArticles[currentSlide]?.excerpt}</p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {newsArticles[currentSlide]?.date} • {newsArticles[currentSlide]?.author}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <div className="flex justify-center mb-4">
              <div className="relative h-32 sm:h-40 md:h-48 w-full max-w-2xl">
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
            </div>
            <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Votre partenaire musical de confiance en République Démocratique du Congo
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <Link href="/about" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 h-12 md:h-14 font-semibold"
              >
                Nous Découvrir
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 h-12 md:h-14 bg-transparent font-semibold border-2"
              >
                Nos Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-8 md:pt-12 px-2">
            <div className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 rounded-xl bg-card/60 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <Music className="h-7 w-7 md:h-8 md:w-8 text-primary" />
              <h3 className="font-semibold text-base md:text-lg">Distribution</h3>
              <p className="text-xs md:text-sm text-muted-foreground text-center text-balance">
                Sur toutes les plateformes digitales
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 rounded-xl bg-card/60 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <Radio className="h-7 w-7 md:h-8 md:w-8 text-primary" />
              <h3 className="font-semibold text-base md:text-lg">Promotion</h3>
              <p className="text-xs md:text-sm text-muted-foreground text-center text-balance">
                Campagnes marketing ciblées
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 rounded-xl bg-card/60 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 sm:col-span-2 md:col-span-1">
              <TrendingUp className="h-7 w-7 md:h-8 md:w-8 text-primary" />
              <h3 className="font-semibold text-base md:text-lg">Développement</h3>
              <p className="text-xs md:text-sm text-muted-foreground text-center text-balance">
                Accompagnement des artistes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
