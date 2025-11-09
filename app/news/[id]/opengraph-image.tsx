import { ImageResponse } from "next/og"
import { getNewsArticleBySlug } from "@/lib/news-data"

export const runtime = "edge"

export const alt = "Article Azana Worldwide"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = getNewsArticleBySlug(id)

  if (!article) {
    return new ImageResponse(
      <div
        style={{
          fontSize: 48,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Article non trouvé
      </div>,
      {
        ...size,
      },
    )
  }

  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "24px",
          padding: "60px",
          border: "2px solid rgba(255, 153, 0, 0.3)",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            background: "linear-gradient(to right, #ffffff, #ff9900)",
            backgroundClip: "text",
            color: "transparent",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "40px",
          }}
        >
          {article.title}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#999",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Azana Worldwide
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
