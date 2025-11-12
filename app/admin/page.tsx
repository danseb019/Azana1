import { createClient } from '@supabase/supabase-js'

export const revalidate = 60 // Mise à jour toutes les 60 secondes

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function NewsPage() {
  const { data: actualites } = await supabase
    .from('actualites')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-6 grid gap-6">
      {actualites?.map((a) => (
        <div key={a.id} className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-1">{a.titre}</h2>
          <p className="text-sm text-gray-600 mb-2">Artiste : {a.artiste}</p>
          {a.image_url && (
            <img
              src={a.image_url}
              alt={a.titre}
              className="w-full h-64 object-cover rounded mb-3"
            />
          )}
          <p>{a.contenu}</p>
          <div className="mt-2 flex gap-3">
            {a.lien_spotify && (
              <a
                href={a.lien_spotify}
                target="_blank"
                className="text-green-600 underline"
              >
                Écouter sur Spotify
              </a>
            )}
            {a.lien_youtube && (
              <a
                href={a.lien_youtube}
                target="_blank"
                className="text-red-600 underline"
              >
                Voir sur YouTube
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
