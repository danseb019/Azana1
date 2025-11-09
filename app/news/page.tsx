import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Tag } from "lucide-react"
import { newsArticles } from "@/lib/news-data"
import Link from "next/link"

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-balance">
              ACTUALITÉS <span className="text-primary">MUSICALES</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Restez informés des dernières nouvelles de l'industrie musicale et d'AZANA WORLDWIDE
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden bg-card border-border group hover:border-primary transition-all duration-300"
              >
                <Link href={`/news/${article.slug}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <Tag className="h-4 w-4" />
                        <span>{article.category}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold leading-tight text-balance">{article.title}</h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
                    <Button variant="ghost" className="gap-2 p-0 h-auto hover:gap-3 transition-all">
                      Lire la suite
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
