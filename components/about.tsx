import { Card } from "@/components/ui/card"
import { MapPin, Users, Globe } from "lucide-react"

export function About() {
  return (
    <section id="a-propos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              À PROPOS D'<span className="text-primary">AZANA</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Une maison de disques innovante au cœur de l'Afrique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold leading-relaxed text-balance">
                Propulser la musique congolaise vers le monde entier
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">AZANA WORLDWIDE</strong> est une maison de disques musicale basée
                  à l'est de la République Démocratique du Congo. Notre mission est de découvrir, développer et
                  promouvoir les talents musicaux exceptionnels de notre région.
                </p>
                <p>
                  Nous offrons une distribution complète sur toutes les grandes plateformes de streaming (Spotify, Apple
                  Music, Deezer, YouTube Music, et plus), garantissant que votre musique atteint un public mondial.
                </p>
                <p>
                  Au-delà de la distribution, nous créons des stratégies de promotion personnalisées pour chaque
                  artiste, incluant la gestion des réseaux sociaux, les relations médiatiques et le développement de
                  marque.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8 bg-card border-border space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Notre Localisation</h4>
                    <p className="text-muted-foreground">
                      Basés à l'est de la RDC, nous sommes au cœur d'une région riche en talents musicaux et en
                      diversité culturelle.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border space-y-4">
                <div className="flex items-start gap-4">
                  <Globe className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Portée Mondiale</h4>
                    <p className="text-muted-foreground">
                      Distribution sur plus de 150 plateformes de streaming dans le monde entier, touchant des millions
                      d'auditeurs.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Accompagnement</h4>
                    <p className="text-muted-foreground">
                      Support complet des artistes, de la production à la promotion, pour assurer le succès de chaque
                      projet.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
