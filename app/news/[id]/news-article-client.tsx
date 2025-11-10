"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Calendar, User, Tag, ArrowLeft, ArrowRight, Heart, Share2, MessageCircle, Play, Send } from "lucide-react"
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
  const [shareSuccess, setShareSuccess] = useState(false)
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
        setShareSuccess(true)
        setTimeout(() => setShareSuccess(false), 2000)
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          navigator.clipboard.writeText(window.location.href)
          setShareSuccess(true)
          setTimeout(() => setShareSuccess(false), 2000)
        }
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      setShareSuccess(true)
      setTimeout(() => setShareSuccess(false), 2000)
    }
  }

  const handleComment = () => {
    const commentSection = document.getElementById("comments")
    if (commentSection) {
      commentSection.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        document.getElementById("name")?.focus()
      }, 500)
    }
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.name.trim() && newComment.message.trim()) {
      const comment = {
        name: newComment.name,
        message: newComment.message,
        date: new Date().toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
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

            <div
              className="prose prose-lg max-w-none [&>p]:text-base [&>p]:md:text-lg [&>p]:leading-relaxed [&>p]:mb-6 [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-bold [&>h3]:mt-12 [&>h3]:mb-4 [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:italic [&>blockquote]:my-8 [&>blockquote]:bg-secondary/20 [&>blockquote]:rounded-r [&>ul]:my-6 [&>ul]:space-y-2 [&>li]:text-base [&>li]:leading-relaxed [&>strong]:font-semibold [&>strong]:text-primary"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {article.youtubeUrls && article.youtubeUrls.length > 0 && (
              <div className="space-y-4 pt-8">
                <h3 className="text-xl font-semibold">Vidéos</h3>
                <div className={`grid gap-6 ${article.youtubeUrls.length > 1 ? "md:grid-cols-2" : ""}`}>
                  {article.youtubeUrls.map((url, index) => {
                    const videoId = getYouTubeVideoId(url)
                    return (
                      <div key={index} className="space-y-2">
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer block"
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
                        {article.videoTitles && article.videoTitles[index] && (
                          <p className="text-sm text-muted-foreground text-center">{article.videoTitles[index]}</p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            <div className="pt-12">
              <Card className="p-8 bg-secondary/20 border-border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Interagir avec l'article</h3>
                    <Separator className="flex-1 ml-6" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Button
                      variant={isLiked ? "default" : "outline"}
                      size="lg"
                      onClick={handleLike}
                      className="gap-3 h-auto py-4 transition-all hover:scale-105 active:scale-95"
                    >
                      <Heart className={`h-5 w-5 ${isLiked ? "fill-current animate-pulse" : ""}`} />
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">J'aime</span>
                        <span className="text-xs opacity-80">
                          {likes} {likes > 1 ? "personnes" : "personne"}
                        </span>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleShare}
                      className={`gap-3 h-auto py-4 transition-all hover:scale-105 active:scale-95 ${
                        shareSuccess ? "bg-green-500/20 border-green-500" : ""
                      }`}
                    >
                      <Share2 className="h-5 w-5" />
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">{shareSuccess ? "Copié!" : "Partager"}</span>
                        <span className="text-xs opacity-80">
                          {shares} {shares > 1 ? "partages" : "partage"}
                        </span>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleComment}
                      className="gap-3 h-auto py-4 transition-all hover:scale-105 active:scale-95 bg-transparent"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">Commenter</span>
                        <span className="text-xs opacity-80">
                          {comments.length} {comments.length > 1 ? "commentaires" : "commentaire"}
                        </span>
                      </div>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div id="comments" className="pt-12 space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-3xl font-bold">Commentaires</h3>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                  {comments.length}
                </span>
              </div>

              <Card className="p-6 bg-secondary/20 border-border">
                <form onSubmit={handleSubmitComment} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      Votre nom *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Entrez votre nom"
                      value={newComment.name}
                      onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-primary" />
                      Votre commentaire *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Partagez votre avis sur cet article..."
                      value={newComment.message}
                      onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}
                      required
                      rows={4}
                      className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                    <Send className="h-4 w-4" />
                    Publier le commentaire
                  </Button>
                </form>
              </Card>

              <div className="space-y-4">
                {comments.length === 0 ? (
                  <Card className="p-12 bg-secondary/10 border-dashed border-2 border-border text-center">
                    <MessageCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-30" />
                    <p className="text-lg text-muted-foreground font-medium">Aucun commentaire pour le moment</p>
                    <p className="text-sm text-muted-foreground mt-2">Soyez le premier à partager votre avis!</p>
                  </Card>
                ) : (
                  comments.map((comment, index) => (
                    <Card
                      key={index}
                      className="p-6 bg-secondary/20 border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0">
                            <User className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <p className="font-semibold text-lg">{comment.name}</p>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">{comment.date}</span>
                            </div>
                            <p className="text-foreground/90 leading-relaxed">{comment.message}</p>
                          </div>
                        </div>
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
