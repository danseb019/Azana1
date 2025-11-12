import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getNewsArticleBySlug } from "@/lib/news-data"
import { notFound } from "next/navigation"
import NewsArticleClient from "./news-article-client"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const article = getNewsArticleBySlug(id)

  if (!article) {
    return {
      title: "Article non trouvé",
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://azanaworldwide.online"
  const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`

  return {
    title: `${article.title} | Azana Worldwide`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: "article",
      siteName: "Azana Worldwide",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [imageUrl],
    },
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = getNewsArticleBySlug(id)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <NewsArticleClient article={article} />
      <Footer />
    </main>
  )
}
