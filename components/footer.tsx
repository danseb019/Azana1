import { Music2, Facebook, Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Music2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">AZANA WORLDWIDE</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Maison de disques basée à l'est de la RDC, dédiée à la promotion et distribution de la musique africaine.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#a-propos" className="text-muted-foreground hover:text-primary transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#actualites" className="text-muted-foreground hover:text-primary transition-colors">
                  Actualités
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Services</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Distribution Digitale</li>
              <li className="text-muted-foreground">Promotion Musicale</li>
              <li className="text-muted-foreground">Production Studio</li>
              <li className="text-muted-foreground">Conseil Artistique</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Suivez-nous</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AZANA WORLDWIDE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
