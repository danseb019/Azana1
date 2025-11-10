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
    image:
      "https://assets.audiomack.com/azanaworldwide/c9ea8c95bf3d59e19c1b6dd9d09b7cd0e13e3b44ed61fa1e2e0b1e4e1c9f2b8a.jpeg?width=640&height=640&max=true",
  },
  {
    id: 2,
    name: "Hit After Hit",
    platform: "Audiomack",
    url: "https://audiomack.com/azanaworldwide/playlist/hit-after-hit?share-user-id=160097046",
    image:
      "https://assets.audiomack.com/azanaworldwide/bb2e5c8dcfaf0bb41e45cf67b96de86cfb14a24f5e22b0dd0b14f73dbfbb8cb5.jpeg?width=640&height=640&max=true",
  },
  {
    id: 3,
    name: "Playlist 1",
    platform: "Spotify",
    url: "https://open.spotify.com/playlist/2iyPGcFaSkzv87Twj944ft?si=cqxTshEoQjSEl0cZHwK9zw&pi=TVUt1AgqSOeEH",
    image:
      "https://mosaic.scdn.co/640/ab67616d00001e02336a5329f90a5f1db8e85e1bab67616d00001e023edd98bf5c1b4b3e8e89f4acab67616d00001e025f1b8c8c5e1d3b7e3f5e5f1aab67616d00001e029e5c8f5c1d3b7e3f5e5f1abc",
  },
  {
    id: 4,
    name: "Playlist 2",
    platform: "Spotify",
    url: "https://open.spotify.com/playlist/1cKz1jy2UrIQsgea2NLi3T?si=uv8znIZTQgSC1OynG6k6zQ&pi=mCaAotLBS0eUc",
    image:
      "https://mosaic.scdn.co/640/ab67616d00001e021a2f3e5b4c6d7e8f9a0b1c2dab67616d00001e022b3f4e5c6d7e8f9a0b1c2d3eab67616d00001e023c4f5e6d7e8f9a0b1c2d3e4fab67616d00001e024d5f6e7d8e9f0a1b2c3d4e5f",
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
