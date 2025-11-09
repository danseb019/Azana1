export interface NewsArticle {
  id: string
  title: string
  date: string
  excerpt: string
  image: string
  content: string
  category: string
  author: string
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "BFM Monster & The Mingongo préparent une sortie explosive !",
    date: "9 janvier 2025",
    excerpt:
      "L'attente touche à sa fin ! Deux figures montantes de la scène urbaine congolaise, BFM Monster et The Mingongo, s'apprêtent à dévoiler leur toute nouvelle chanson une collaboration qui promet de marquer les esprits.",
    image: "/bfm-monster-mingongo.jpeg",
    category: "Annonce",
    author: "Dan Seb",
    content: `
      <p>L'attente touche à sa fin ! Deux figures montantes de la scène urbaine congolaise, BFM Monster et The Mingongo, s'apprêtent à dévoiler leur toute nouvelle chanson une collaboration qui promet de marquer les esprits.</p>
      
      <p>Entre énergie brute, flow percutant et mélodies accrocheuses, ce titre s'annonce comme une véritable fusion entre les univers des deux artistes. BFM Monster, connu pour sa puissance vocale et son style audacieux, unit sa créativité à celle de The Mingongo, artiste à la vibe unique et à la plume affûtée. Ensemble, ils livrent un son qui reflète l'authenticité et la force du mouvement musical congolais actuel.</p>
      
      <p>Ce nouveau single, dont la sortie est prévue très bientôt, mettra en avant des sonorités afro urbaines modernes, portées par une production soignée et une ambiance aussi dansante qu'engagée. Les fans peuvent s'attendre à un clip haut en couleur, fidèle à l'énergie débordante des deux artistes.</p>
      
      <h3>Restez connectés !</h3>
      <p>La sortie officielle sera annoncée dans les jours à venir sur toutes les plateformes digitales et les réseaux sociaux des artistes. Une seule chose est sûre : BFM Monster x The Mingongo, c'est une combinaison à ne surtout pas manquer !</p>
    `,
  },
]

export function getNewsArticleById(id: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.id === id)
}

export function getRecentNews(count = 3): NewsArticle[] {
  return newsArticles.slice(0, count)
}
