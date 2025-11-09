import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, User, Tag, ArrowLeft, ArrowRight } from "lucide-react"
import { getNewsArticleById, newsArticles } from "@/lib/news-data"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const article = getNewsArticleById(id)

  if (!article) {
    return {
      title: "Article non trouvé - AZANA WORLDWIDE",
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://azanaworldwide.online"

  return {
    title: `${article.title} - AZANA WORLDWIDE`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image.startsWith("http") ? article.image : `${baseUrl}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      siteName: "AZANA WORLDWIDE",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image.startsWith("http") ? article.image : `${baseUrl}${article.image}`],
    },
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = getNewsArticleById(id)

  if (!article) {
    notFound()
  }

  // Get related articles (next 3 articles, excluding current one)
  const relatedArticles = newsArticles.filter((a) => a.id !== article.id).slice(0, 3)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Back Button */}
            <Link href="/news">
              <Button variant="ghost" className="gap-2 -ml-2">
                <ArrowLeft className="h-4 w-4" />
                Retour aux actualités
              </Button>
            </Link>

            {/* Category Badge */}
            <div className="flex items-center gap-2 text-primary">
              <Tag className="h-5 w-5" />
              <span className="font-semibold">{article.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-balance">{article.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{article.author}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Articles <span className="text-primary">Connexes</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((related) => (
                  <Card
                    key={related.id}
                    className="overflow-hidden bg-card border-border group hover:border-primary transition-all duration-300"
                  >
                    <Link href={`/news/${related.id}`}>
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{related.date}</span>
                        </div>
                        <h3 className="text-xl font-bold leading-tight text-balance">{related.title}</h3>
                        <p className="text-muted-foreground leading-relaxed line-clamp-2">{related.excerpt}</p>
                        <Button variant="ghost" className="gap-2 p-0 h-auto hover:gap-3 transition-all">
                          Lire l'article
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
