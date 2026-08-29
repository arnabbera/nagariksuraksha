export const POST_CATEGORIES = {
  FREEDOM_FIGHTER: "Indian Freedom Fighter",
  LEGAL_ARTICLE: "Legal Article",
};

const FREEDOM_FIGHTER_TERMS = [
  "freedom fighter",
  "freedom movement",
  "independence movement",
  "indian independence",
  "quit india",
  "civil disobedience",
  "khudiram bose",
  "matangini hazra",
  "gandhi buri",
  "martyr",
];

export const isFreedomFighterPost = (post = {}) => {
  const searchableText = [
    post.category,
    post.title,
    post.excerpt,
    ...(Array.isArray(post.tags) ? post.tags : []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return FREEDOM_FIGHTER_TERMS.some((term) =>
    searchableText.includes(term),
  );
};

export const getPostDisplayCategory = (post = {}) =>
  isFreedomFighterPost(post)
    ? POST_CATEGORIES.FREEDOM_FIGHTER
    : POST_CATEGORIES.LEGAL_ARTICLE;

