import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { News } from "@/components/news"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <News />
      <Footer />
    </main>
  )
}
