import { useState } from "react";
import { FaFacebookF, FaLink, FaTwitter, FaWhatsapp } from "react-icons/fa";

const SITE_URL = "https://www.nagariksuraksha.com";

export default function LegalUpdateShare({ canonicalPath, message, shareVersion }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${SITE_URL}${canonicalPath}?share=${encodeURIComponent(shareVersion)}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      console.error("Unable to copy legal-update link:", error);
    }
  };

  return (
    <section className="ns-legal-share" aria-label="Share this legal update">
      <div>
        <strong>Forward this legal update</strong>
        <span>Share this citizen-awareness guide with its article thumbnail.</span>
      </div>
      <div className="ns-legal-share-actions">
        <a className="is-facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook"><FaFacebookF /> Facebook</a>
        <a className="is-twitter" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" aria-label="Share on X or Twitter"><FaTwitter /> X / Twitter</a>
        <a className="is-whatsapp" href={`https://wa.me/?text=${encodeURIComponent(`${message}\n${shareUrl}`)}`} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp"><FaWhatsapp /> WhatsApp</a>
        <button type="button" onClick={copyLink} aria-label="Copy share link"><FaLink /> {copied ? "Link Copied" : "Copy Link"}</button>
      </div>

      <style>{`
        .ns-legal-share { display: flex; justify-content: space-between; align-items: center; gap: 22px; margin: 0 0 40px; padding: 22px 24px; border: 1px solid #d9a243; border-radius: 16px; background: #fff; box-shadow: 0 10px 28px rgba(9,39,67,.09); }
        .ns-legal-share > div:first-child { display: grid; gap: 4px; }
        .ns-legal-share strong { color: #0b203a; font-size: 1.05rem; }
        .ns-legal-share span { color: #65758a; font-size: .9rem; }
        .ns-legal-share-actions { display: flex; flex-wrap: wrap; gap: 9px; }
        .ns-legal-share-actions a, .ns-legal-share-actions button { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 42px; padding: 10px 15px; border: 0; border-radius: 9px; color: #fff; font: inherit; font-size: .88rem; font-weight: 800; text-decoration: none; cursor: pointer; }
        .ns-legal-share-actions .is-facebook { background: #1877f2; }
        .ns-legal-share-actions .is-twitter { background: #17202b; }
        .ns-legal-share-actions .is-whatsapp { background: #168c45; }
        .ns-legal-share-actions button { background: #b87819; }
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
