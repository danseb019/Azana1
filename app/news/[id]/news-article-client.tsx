"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Calendar, User, Tag, ArrowLeft, ArrowRight, Heart, Share2, MessageCircle, Play } from "lucide-react"
import { newsArticles, type NewsArticle } from "@/lib/news-data"
import Link from "next/link"

function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

export default function NewsArticleClient({ article }: { article: NewsArticle }) {
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [shares, setShares] = useState(0)
  const [comments, setComments] = useState<Array<{ name: string; message: string; date: string }>>([])
  const [newComment, setNewComment] = useState({ name: "", message: "" })

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

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.name.trim() && newComment.message.trim()) {
      const comment = {
        name: newComment.name,
        message: newComment.message,
        date: new Date().toLocaleDateString("fr-FR"),
      }
      setComments([comment, ...comments])
      setNewComment({ name: "", message: "" })
    }
  }

  return (
    <>
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Link href="/news">
              <Button variant="ghost" className="gap-2 -ml-2">
                <ArrowLeft className="h-4 w-4" />
                Retour aux actualités
              </Button>
            </Link>

            <div className="flex items-center gap-2 text-primary">
              <Tag className="h-5 w-5" />
              <span className="font-semibold">{article.category}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-balance">{article.title}</h1>

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

            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {article.youtubeUrls && article.youtubeUrls.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Vidéos</h3>
                <div className={`grid gap-4 ${article.youtubeUrls.length > 1 ? "md:grid-cols-2" : ""}`}>
                  {article.youtubeUrls.map((url, index) => {
                    const videoId = getYouTubeVideoId(url)
                    return (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer"
                      >
                        <img
                          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                          alt={`Vidéo ${index + 1}`}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="h-8 w-8 text-primary-foreground fill-current ml-1" />
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            )}

            <div
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

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
                  <span>Commenter {comments.length > 0 && `(${comments.length})`}</span>
                </Button>
              </div>
            </div>

            <div id="comments" className="pt-12 space-y-8">
              <h3 className="text-2xl font-bold">Commentaires ({comments.length})</h3>

              <form onSubmit={handleSubmitComment} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    value={newComment.name}
                    onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                    required
                    className="bg-secondary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Commentaire *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Partagez votre avis..."
                    value={newComment.message}
                    onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-secondary/50 resize-none"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Publier le commentaire
                </Button>
              </form>

              <div className="space-y-6">
                {comments.length === 0 ? (
                  <div className="bg-secondary/30 rounded-lg p-8 text-center text-muted-foreground">
                    <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Soyez le premier à commenter cet article.</p>
                  </div>
                ) : (
                  comments.map((comment, index) => (
                    <Card key={index} className="p-6 bg-secondary/30 border-border">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold">{comment.name}</p>
                              <p className="text-sm text-muted-foreground">{comment.date}</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-foreground leading-relaxed">{comment.message}</p>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

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
    </>
  )
}
