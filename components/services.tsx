import { Card } from "@/components/ui/card"
import { Disc3, Share2, Megaphone, Headphones, BarChart3, Mic2 } from "lucide-react"

const services = [
  {
    icon: Disc3,
    title: "Distribution Digitale",
    description:
      "Diffusion de votre musique sur Spotify, Apple Music, Deezer, YouTube Music, Tidal, Amazon Music et plus de 150 plateformes mondiales.",
  },
  {
    icon: Megaphone,
    title: "Promotion Musicale",
    description:
      "Campagnes marketing personnalisées, relations avec les médias, placement dans les playlists et promotion sur les réseaux sociaux.",
  },
  {
    icon: Mic2,
    title: "Production & Studio",
    description:
      "Accès à des studios d'enregistrement professionnels et accompagnement dans la production de vos morceaux.",
  },
  {
    icon: Share2,
    title: "Gestion des Réseaux",
    description:
      "Création de contenu, gestion de communauté et stratégie digitale pour développer votre présence en ligne.",
  },
  {
    icon: BarChart3,
    title: "Analyse & Rapports",
    description:
      "Suivi détaillé des performances, statistiques d'écoute et insights pour optimiser votre stratégie musicale.",
  },
  {
    icon: Headphones,
    title: "Conseil Artistique",
    description:
      "Guidance professionnelle sur le développement de carrière, l'image de marque et les opportunités de collaboration.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              NOS <span className="text-primary">SERVICES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Des solutions complètes pour propulser votre carrière musicale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
