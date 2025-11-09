"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, User, Tag, ArrowLeft, ArrowRight, Heart, Share2, MessageCircle } from "lucide-react"
import { getNewsArticleBySlug, newsArticles } from "@/lib/news-data"
import Link from "next/link"
import { notFound } from "next/navigation"
import { use, useState } from "react"

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const article = getNewsArticleBySlug(id)

  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [shares, setShares] = useState(0)

  if (!article) {
    notFound()
  }

  // Get related articles (next 3 articles, excluding current one)
  const relatedArticles = newsArticles.filter((a) => a.slug !== article.slug).slice(0, 3)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
      setIsLiked(false)
    } else {
      setLikes(likes + 1)
      setIsLiked(true)
    }
  }

  const handleShare = async () => {
    setShares(shares + 1)

    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Erreur de partage:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Lien copié dans le presse-papiers!")
    }
  }

  const handleComment = () => {
    const commentSection = document.getElementById("comments")
    if (commentSection) {
      commentSection.scrollIntoView({ behavior: "smooth" })
    }
  }

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

            {/* Social Interaction Buttons */}
            <div className="pt-8 border-t border-border">
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleLike}
                  className={`gap-2 transition-colors ${
                    isLiked
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                  <span>J'aime {likes > 0 && `(${likes})`}</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleShare}
                  className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Share2 className="h-5 w-5" />
                  <span>Partager {shares > 0 && `(${shares})`}</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleComment}
                  className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Commenter</span>
                </Button>
              </div>
            </div>

            {/* Comments Section Placeholder */}
            <div id="comments" className="pt-12 space-y-6">
              <h3 className="text-2xl font-bold">Commentaires</h3>
              <div className="bg-secondary/30 rounded-lg p-8 text-center text-muted-foreground">
                <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Les commentaires seront bientôt disponibles.</p>
              </div>
            </div>
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
                    <Link href={`/news/${related.slug}`}>
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
