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
  videoTitles?: string[]
}

export const newsArticles: NewsArticle[] = [
  {
    id: "9",
    slug: "mira-suka-challenge-fido-drc",
    title: "Mira Suka lance un nouveau challenge en collaboration avec Fido DRC !",
    date: "13 novembre 2025",
    excerpt:
      "L'artiste congolaise Mira Suka revient en force avec un tout nouveau challenge musical qui promet de faire vibrer les réseaux sociaux ! En collaboration avec Fido DRC, cette initiative marque une nouvelle ère dans la créativité et la participation des jeunes talents congolais.",
    image: "/mira-suka-fido-challenge.jpeg",
    category: "Annonce",
    author: "Azana Worldwide",
    youtubeUrls: [
      "https://youtu.be/LoBMxta4rUI?si=1rcVuMapndrXyVSQ",
      "https://youtu.be/4ZsTtU5zdPc?si=BdhRE6ZzTKMUVVD_",
    ],
    videoTitles: ["Mira Suka x Fido DRC Challenge - Vidéo 1", "Mira Suka x Fido DRC Challenge - Vidéo 2"],
    content: `
      <p>L'artiste congolaise Mira Suka revient en force avec un tout nouveau challenge musical qui promet de faire vibrer les réseaux sociaux ! En collaboration avec Fido DRC, cette initiative sera officiellement lancée le 13 novembre 2025, marquant une nouvelle ère dans la créativité et la participation des jeunes talents congolais.</p>
      
      <p>Après avoir conquis le public avec ses précédents titres et performances remarquées, Mira Suka continue d'imposer son empreinte dans l'univers musical urbain. Ce nouveau challenge, soutenu par la marque Fido DRC, vise à encourager la communauté à s'exprimer à travers la danse, le chant et les contenus créatifs sur les plateformes comme TikTok, Instagram et YouTube.</p>
      
      <h3>Un mouvement pour rassembler la jeunesse</h3>
      
      <p>Selon l'équipe de Mira Suka, ce projet est bien plus qu'un simple concours :</p>
      
      <blockquote>« C'est un mouvement pour rassembler la jeunesse autour de la musique congolaise moderne, tout en offrant une plateforme d'expression et de visibilité », confie son manager.</blockquote>
      
      <p>Les participants sont invités à reprendre le son officiel du challenge, à créer leur propre version ou performance, et à publier leur vidéo avec le hashtag <strong>#MiraSukaChallenge</strong> pour tenter de remporter des récompenses exclusives offertes par Fido DRC.</p>
      
      <h3>Une expérience artistique unique</h3>
      
      <p>Avec son énergie contagieuse et son style unique, Mira Suka promet une expérience artistique pleine de rythme, de fun et de surprises. Le public est déjà impatient de découvrir ce que cache cette nouvelle collaboration, qui s'annonce comme l'un des défis les plus attendus de la scène congolaise en cette fin d'année.</p>
      
      <p><strong>Rejoignez le mouvement #MiraSukaChallenge et montrez votre talent !</strong></p>
    `,
  },
  {
    id: "8",
    slug: "benah-annonce-bina-changa",
    title: 'Benah annonce "Bina Changa" - Une ode à la danse',
    date: "11 janvier 2025",
    excerpt:
      "L'artiste congolais Benah s'apprête à marquer un nouveau tournant dans sa carrière musicale avec la sortie imminente de sa chanson \"Bina Changa\", un titre qui s'annonce comme un véritable hymne à la fête, à la joie et à la culture africaine.",
    image: "/benah-bina-changa-cover.jpeg",
    category: "Annonce",
    author: "Azana Worldwide",
    content: `
      <p>L'artiste congolais Benah s'apprête à marquer un nouveau tournant dans sa carrière musicale avec la sortie imminente de sa chanson "Bina Changa", un titre qui s'annonce comme un véritable hymne à la fête, à la joie et à la culture africaine.</p>
      
      <p>Après plusieurs projets remarqués, Benah revient avec une énergie renouvelée et un son qui mêle rythmes afro, mélodies entraînantes et une touche moderne, fidèle à sa signature artistique. "Bina Changa", qui signifie littéralement <em>danse avec style</em> ou <em>danse avec grâce</em>, est une invitation à célébrer la vie à travers la musique et le mouvement.</p>
      
      <blockquote>« Cette chanson, c'est un appel à la positivité, à oublier les soucis et à se reconnecter à ce qu'on a de plus beau : notre énergie et notre culture », confie Benah.</blockquote>
      
      <h3>Un son vibrant taillé pour la danse</h3>
      <p>Produit avec soin en studio, le morceau promet des sonorités vibrantes et un refrain accrocheur taillé pour les pistes de danse et les playlists afro les plus populaires. Le clip officiel, actuellement en préparation, mettra en valeur la créativité et le style unique de Benah, tout en rendant hommage aux danses urbaines africaines.</p>
      
      <p>Avec "Bina Changa", Benah confirme son ambition de s'imposer comme l'une des figures montantes de la scène afro contemporaine, tout en restant fidèle à ses racines.</p>
      
      <p><strong>La date officielle de sortie sera bientôt annoncée. En attendant, les fans peuvent suivre Benah sur ses réseaux sociaux pour ne rien manquer de cette sortie très attendue.</strong></p>
    `,
  },
  {
    id: "7",
    slug: "lionel-ekongo-devoile-kindoki",
    title: 'Lionel Ekongo dévoile "KINDOKI"',
    date: "9 novembre 2025",
    excerpt:
      'Après le succès de son titre "Jackpot", l\'artiste congolais Lionel Ekongo revient sur le devant de la scène avec un nouveau single explosif intitulé "KINDOKI", dont la sortie officielle est prévue pour le 19 novembre 2025.',
    image: "/lionel-ekongo-kindoki.jpeg",
    category: "Sortie",
    author: "Azana Worldwide",
    youtubeUrls: ["https://youtu.be/n_9OFtwz5IM?si=6ZlLKWqm5LYkvx2K"],
    videoTitles: ["Lionel Ekongo - KINDOKI (Official Video)"],
    content: `
      <p>Après le succès de son titre "Jackpot", l'artiste congolais Lionel Ekongo revient sur le devant de la scène avec un nouveau single explosif intitulé "KINDOKI", dont la sortie officielle est prévue pour le 19 novembre 2025.</p>
      
      <p>Originaire d'une famille d'artistes chanteurs et lauréat du célèbre concours Vodacom Best of the Best, Lionel Ekongo s'impose aujourd'hui comme l'un des jeunes talents les plus prometteurs de la rumba congolaise moderne. Avec KINDOKI, il plonge ses auditeurs dans un univers où se mêlent mystère, émotion et énergie pure, en explorant les réalités sociales et spirituelles de la culture congolaise.</p>
      
      <h3>Une fusion musicale audacieuse</h3>
      <p>Musicalement, KINDOKI est une fusion audacieuse entre rumba traditionnelle, sonorités urbaines et influences afro modernes, une signature que Lionel maîtrise avec élégance. Sa voix, pleine de chaleur et de vérité, transporte l'auditeur dans une histoire forte — celle d'un peuple, de ses croyances, mais aussi de ses contradictions.</p>
      
      <blockquote>"KINDOKI parle de ce qu'on ne comprend pas toujours, de ce qu'on juge sans connaître… mais aussi de la force intérieure qu'on porte en soi," confie Lionel Ekongo.</blockquote>
      
      <h3>Un morceau phare de l\'EP "Sacrifice"</h3>
      <p>Le titre s\'annonce déjà comme l\'un des morceaux phares de son prochain EP "Sacrifice", attendu dans les mois à venir. Avec une production soignée et un message profond, KINDOKI marque une étape décisive dans la carrière de l\'artiste, prêt à représenter fièrement l\'énergie authentique de la musique congolaise sur la scène internationale.</p>
      
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
    videoTitles: ["BFM Monster & The Mingongo - Single 1", "BFM Monster & The Mingongo - Single 2"],
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
