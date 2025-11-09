import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <FileQuestion className="h-24 w-24 mx-auto text-muted-foreground" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Article Non Trouvé</h1>
            <p className="text-xl text-muted-foreground">
              Désolé, l'article que vous recherchez n'existe pas ou a été supprimé.
            </p>
            <Link href="/news">
              <Button size="lg">Retour aux actualités</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
