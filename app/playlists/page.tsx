import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Music } from "lucide-react"

export const metadata = {
  title: "Nos Playlists - AZANA WORLDWIDE",
  description: "Découvrez nos playlists sur Audiomack et Spotify",
}

const playlists = [
  {
    id: 1,
    name: "Kivu Best Music",
    platform: "Audiomack",
    url: "https://audiomack.com/azanaworldwide/playlist/kivu-best-music?share-user-id=160097046",
    image: "/kivu-best-music-african-playlist-cover.jpg",
  },
  {
    id: 2,
    name: "Hit After Hit",
    platform: "Audiomack",
    url: "https://audiomack.com/azanaworldwide/playlist/hit-after-hit?share-user-id=160097046",
    image: "/hit-after-hit-music-playlist-cover.jpg",
  },
  {
    id: 3,
    name: "Playlist Spotify 1",
    platform: "Spotify",
    url: "https://open.spotify.com/playlist/2iyPGcFaSkzv87Twj944ft?si=cqxTshEoQjSEl0cZHwK9zw&pi=TVUt1AgqSOeEH",
    image: "/spotify-music-playlist-mosaic-cover.jpg",
  },
  {
    id: 4,
    name: "Playlist Spotify 2",
    platform: "Spotify",
    url: "https://open.spotify.com/playlist/1cKz1jy2UrIQsgea2NLi3T?si=uv8znIZTQgSC1OynG6k6zQ&pi=mCaAotLBS0eUc",
    image: "/spotify-african-music-playlist-cover.jpg",
  },
]

export default function PlaylistsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 px-4 container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-primary">Playlists</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos sélections musicales sur Audiomack et Spotify
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {playlists.map((playlist) => (
            <Link
              key={playlist.id}
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={playlist.image || "/placeholder.svg"}
                  alt={playlist.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {playlist.name}
                </h3>
                <p className="text-sm text-muted-foreground">{playlist.platform}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
