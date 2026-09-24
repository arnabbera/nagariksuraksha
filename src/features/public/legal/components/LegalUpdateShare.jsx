import { useEffect, useState } from "react";
import { FaFacebookF, FaHeart, FaTwitter, FaWhatsapp } from "react-icons/fa";

const SITE_URL = "https://www.sanhita360.com";

export default function LegalUpdateShare({ canonicalPath, message, shareVersion }) {
  const [likes, setLikes] = useState(null);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const shareUrl = `${SITE_URL}${canonicalPath}?share=${encodeURIComponent(shareVersion)}`;

  useEffect(() => {
    let active = true;
    fetch(`/api/legal-remedies/likes?post=${encodeURIComponent(canonicalPath)}`, { credentials: "same-origin" })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Unable to load likes.");
        return result;
      })
      .then((result) => {
        if (!active) return;
        setLikes(result.count);
        setLiked(result.liked);
      })
      .catch(() => { if (active) setError("Likes are temporarily unavailable."); });
    return () => { active = false; };
  }, [canonicalPath]);

  const likePost = async () => {
    if (loading || liked || likes === null) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/legal-remedies/likes", {
        method: "POST",
        credentials: "same-origin",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ post: canonicalPath }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to save your like.");
      setLikes(result.count);
      setLiked(result.liked);
    } catch (cause) {
      setError(cause.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="ns-legal-share" aria-label="Share this legal update">
      <div>
        <strong>Forward this legal update</strong>
        <span>Share this citizen-awareness guide or show your support.</span>
      </div>
      <div className="ns-legal-share-actions">
        <a className="is-facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook"><FaFacebookF /> Facebook</a>
        <a className="is-twitter" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" aria-label="Share on X or Twitter"><FaTwitter /> X / Twitter</a>
        <a className="is-whatsapp" href={`https://wa.me/?text=${encodeURIComponent(`${message}\n${shareUrl}`)}`} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp"><FaWhatsapp /> WhatsApp</a>
        <button type="button" className="is-like" onClick={likePost} disabled={likes === null || liked || loading} aria-label={liked ? `Liked, ${likes} likes` : `Like this post, ${likes ?? 0} likes`} aria-pressed={liked}><FaHeart /> {liked ? "Liked" : "Like"} · {likes ?? "…"}</button>
      </div>
      {error && <p className="ns-legal-share-error" role="status">{error}</p>}

      <style>{`
        .ns-legal-share { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 22px; margin: 0 0 40px; padding: 22px 24px; border: 1px solid #d9a243; border-radius: 16px; background: #fff; box-shadow: 0 10px 28px rgba(9,39,67,.09); }
        .ns-legal-share > div:first-child { display: grid; gap: 4px; }
        .ns-legal-share strong { color: #0b203a; font-size: 1.05rem; }
        .ns-legal-share span { color: #65758a; font-size: .9rem; }
        .ns-legal-share-actions { display: flex; flex-wrap: wrap; gap: 9px; }
        .ns-legal-share-actions a, .ns-legal-share-actions button { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 42px; padding: 10px 15px; border: 0; border-radius: 9px; color: #fff; font: inherit; font-size: .88rem; font-weight: 800; text-decoration: none; cursor: pointer; }
        .ns-legal-share-actions .is-facebook { background: #1877f2; }
        .ns-legal-share-actions .is-twitter { background: #17202b; }
        .ns-legal-share-actions .is-whatsapp { background: #168c45; }
        .ns-legal-share-actions .is-like { background: #a72646; }
        .ns-legal-share-actions .is-like[aria-pressed="true"] { background: #6f1d36; }
        .ns-legal-share-actions button:disabled { cursor: default; opacity: .8; }
        .ns-legal-share-error { flex-basis: 100%; color: #a52132; margin: -10px 0 0; font-size: .87rem; }
        .ns-legal-share-actions a:hover, .ns-legal-share-actions button:hover { filter: brightness(.93); transform: translateY(-1px); }
        @media (max-width: 820px) {
          .ns-legal-share { align-items: stretch; flex-direction: column; }
          .ns-legal-share-actions { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); }
        }
        @media (max-width: 430px) { .ns-legal-share-actions { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
