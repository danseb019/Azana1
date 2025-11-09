export interface NewsArticle {
  id: string
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  content: string
  category: string
  author: string
  youtubeUrls?: string[]
}

export const newsArticles: NewsArticle[] = [
  {
    id: "7",
    slug: "lionel-ekongo-devoile-kindoki",
    title: 'Lionel Ekongo dévoile "KINDOKI"',
    date: "19 novembre 2025",
    excerpt:
      'Après le succès de son titre "Jackpot", l\'artiste congolais Lionel Ekongo revient sur le devant de la scène avec un nouveau single explosif intitulé "KINDOKI", dont la sortie officielle est prévue pour le 19 novembre 2025.',
    image: "/lionel-ekongo-kindoki.jpeg",
    category: "Sortie",
    author: "Azana Worldwide",
    youtubeUrls: ["https://youtu.be/n_9OFtwz5IM?si=6ZlLKWqm5LYkvx2K"],
    content: `
      <p>Après le succès de son titre "Jackpot", l'artiste congolais Lionel Ekongo revient sur le devant de la scène avec un nouveau single explosif intitulé "KINDOKI", dont la sortie officielle est prévue pour le 19 novembre 2025.</p>
      
      <p>Originaire d'une famille d'artistes chanteurs et lauréat du célèbre concours Vodacom Best of the Best, Lionel Ekongo s'impose aujourd'hui comme l'un des jeunes talents les plus prometteurs de la rumba congolaise moderne. Avec KINDOKI, il plonge ses auditeurs dans un univers où se mêlent mystère, émotion et énergie pure, en explorant les réalités sociales et spirituelles de la culture congolaise.</p>
      
      <h3>Une fusion musicale audacieuse</h3>
      <p>Musicalement, KINDOKI est une fusion audacieuse entre rumba traditionnelle, sonorités urbaines et influences afro modernes, une signature que Lionel maîtrise avec élégance. Sa voix, pleine de chaleur et de vérité, transporte l'auditeur dans une histoire forte — celle d'un peuple, de ses croyances, mais aussi de ses contradictions.</p>
      
      <blockquote>"KINDOKI parle de ce qu'on ne comprend pas toujours, de ce qu'on juge sans connaître… mais aussi de la force intérieure qu'on porte en soi," confie Lionel Ekongo.</blockquote>
      
      <h3>Un morceau phare de l'EP "Sacrifice"</h3>
      <p>Le titre s'annonce déjà comme l'un des morceaux phares de son prochain EP "Sacrifice", attendu dans les mois à venir. Avec une production soignée et un message profond, KINDOKI marque une étape décisive dans la carrière de l'artiste, prêt à représenter fièrement l'énergie authentique de la musique congolaise sur la scène internationale.</p>
      
      <p>Le rendez-vous est donc pris : le 19 novembre 2025, la rumba aura un nouveau visage — celui de Lionel Ekongo, et un nouveau nom à retenir : KINDOKI.</p>
      
      <p><strong>Disponible sur toutes les plateformes de téléchargements : YouTube, Spotify, Apple Music, Boomplay, Audiomack.</strong></p>
    `,
  },
  {
    id: "1",
    slug: "bfm-monster-the-mingongo-sortie-explosive",
    title: "BFM Monster & The Mingongo préparent une sortie explosive !",
    date: "9 janvier 2025",
    excerpt:
      "L'attente touche à sa fin ! Deux figures montantes de la scène urbaine congolaise, BFM Monster et The Mingongo, s'apprêtent à dévoiler leur toute nouvelle chanson une collaboration qui promet de marquer les esprits.",
    image: "/bfm-monster-mingongo.jpeg",
    category: "Annonce",
    author: "Dan Seb",
    youtubeUrls: [
      "https://youtu.be/jFR_W2ODIOM?si=xTOk4dm7v-BYBHm7",
      "https://youtu.be/GiTo8PgvbcU?si=IoDjdcu34U9ambLi",
    ],
    content: `
      <p>L'attente touche à sa fin ! Deux figures montantes de la scène urbaine congolaise, BFM Monster et The Mingongo, s'apprêtent à dévoiler leur toute nouvelle chanson une collaboration qui promet de marquer les esprits.</p>
      
      <p>Entre énergie brute, flow percutant et mélodies accrocheuses, ce titre s'annonce comme une véritable fusion entre les univers des deux artistes. BFM Monster, connu pour sa puissance vocale et son style audacieux, unit sa créativité à celle de The Mingongo, artiste à la vibe unique et à la plume affûtée. Ensemble, ils livrent un son qui reflète l'authenticité et la force du mouvement musical congolais actuel.</p>
      
      <p>Ce nouveau single, dont la sortie est prévue très bientôt, mettra en avant des sonorités afro urbaines modernes, portées par une production soignée et une ambiance aussi dansante qu'engagée. Les fans peuvent s'attendre à un clip haut en couleur, fidèle à l'énergie débordante des deux artistes.</p>
      
      <h3>Restez connectés !</h3>
      <p>La sortie officielle sera annoncée dans les jours à venir sur toutes les plateformes digitales et les réseaux sociaux des artistes. Une seule chose est sûre : BFM Monster x The Mingongo, c'est une combinaison à ne surtout pas manquer !</p>
    `,
  },
]

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug)
}

export function getNewsArticleById(id: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.id === id)
}

export function getRecentNews(count = 3): NewsArticle[] {
  return newsArticles.slice(0, count)
}
