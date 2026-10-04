import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import Header from "../../../home/components/Header";
import Footer from "../../../home/components/Footer";
import SEO from "../../../../shared/seo/SEO";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const documentUrl = "/documents/ericsson-heroes-redefining-humanity-2013.pdf";

export default function RecognitionPage() {
  const viewerRef = useRef(null);
  const [viewerWidth, setViewerWidth] = useState(760);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const element = viewerRef.current;
    if (!element) return undefined;

    const observer = new ResizeObserver(([entry]) => {
      setViewerWidth(Math.max(240, Math.floor(entry.contentRect.width) - 32));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Recognition | Ericsson Heroes"
        description="Read the original seven-page 2013 Ericsson Heroes feature about Arnab Bera and Tanmoy Mondal helping an injured colleague in Kolkata."
        canonical="/recognition"
        keywords={["Arnab Bera recognition", "Ericsson Heroes", "Sanhita360 founder"]}
      />
      <Header />

      <main className="ns-recognition-page">
        <section className="ns-recognition-hero">
          <p className="ns-recognition-eyebrow">Recognition</p>
          <h1>Ericsson Heroes: Redefining Humanity</h1>
          <p>
            A 2013 Ericsson feature tells the story of Arnab Bera and Tanmoy
            Mondal helping an injured colleague in Kolkata. Read the original
            seven-page document below, page by page.
          </p>
          <a href={documentUrl} target="_blank" rel="noopener noreferrer">
            Open the original PDF
          </a>
        </section>

        <section className="ns-recognition-reader" aria-label="Ericsson Heroes original PDF">
          <div className="ns-recognition-reader-heading">
            <h2>Original article and responses</h2>
            <span>{pageCount ? `${pageCount} pages` : "Loading document"}</span>
          </div>
          <div className="ns-recognition-document" ref={viewerRef}>
            <Document
              file={documentUrl}
              loading={<p role="status">Loading the original PDF…</p>}
              error={
                <p role="alert">
                  The document could not be displayed here.{" "}
                  <a href={documentUrl}>Open the PDF directly</a>.
                </p>
              }
              onLoadSuccess={({ numPages }) => setPageCount(numPages)}
            >
              {Array.from({ length: pageCount }, (_, index) => (
                <section
                  className="ns-recognition-sheet"
                  aria-label={`Page ${index + 1} of ${pageCount}`}
                  key={index + 1}
                >
                  <div className="ns-recognition-page-number">
                    Page {index + 1} of {pageCount}
                  </div>
                  <Page
                    pageNumber={index + 1}
                    width={Math.min(viewerWidth, 760)}
                    renderAnnotationLayer
                    renderTextLayer
                    loading={<p>Loading page {index + 1}…</p>}
                  />
                </section>
              ))}
            </Document>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .ns-recognition-page {
          min-height: 70vh;
          background: #f5f7fb;
          color: #172640;
        }
        .ns-recognition-hero {
          padding: clamp(42px, 6vw, 72px) 24px;
          text-align: center;
          background: linear-gradient(135deg, #071d40, #163b79);
          color: white;
        }
        .ns-recognition-eyebrow {
          margin: 0 0 12px;
          color: #e9bb5b;
          font-weight: 700;
          letter-spacing: .16em;
          text-transform: uppercase;
        }
        .ns-recognition-hero h1 {
          margin: 0 auto 18px;
          max-width: 880px;
          font-size: clamp(32px, 4vw, 54px);
          line-height: 1.12;
        }
        .ns-recognition-hero p:not(.ns-recognition-eyebrow) {
          max-width: 720px;
          margin: 0 auto 26px;
          line-height: 1.7;
          color: #e4ecfa;
        }
        .ns-recognition-hero a {
          display: inline-block;
          padding: 12px 20px;
          border-radius: 8px;
          background: #e9bb5b;
          color: #102448;
          font-weight: 700;
          text-decoration: none;
        }
        .ns-recognition-hero a:hover, .ns-recognition-hero a:focus-visible {
          background: #f9d782;
        }
        .ns-recognition-reader {
          max-width: 900px;
          margin: 0 auto;
          padding: 38px 18px 72px;
        }
        .ns-recognition-reader-heading {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 20px;
        }
        .ns-recognition-reader-heading h2 { margin: 0; font-size: 23px; }
        .ns-recognition-reader-heading span { color: #53647d; white-space: nowrap; }
        .ns-recognition-document { width: 100%; }
        .ns-recognition-sheet {
          width: fit-content;
          max-width: 100%;
          margin: 0 auto 30px;
          padding: 16px;
          border: 1px solid #dce3ee;
          border-radius: 8px;
          background: #fff;
          box-shadow: 0 12px 32px rgba(10, 33, 75, .08);
        }
        .ns-recognition-page-number {
          margin: 0 0 12px;
          color: #53647d;
          font-size: 13px;
          font-weight: 700;
        }
        .ns-recognition-sheet .react-pdf__Page { max-width: 100%; }
        .ns-recognition-sheet .react-pdf__Page canvas {
          display: block;
          max-width: 100%;
          height: auto !important;
        }
        @media (max-width: 600px) {
          .ns-recognition-reader-heading { align-items: flex-start; }
          .ns-recognition-reader-heading h2 { font-size: 19px; }
          .ns-recognition-sheet { padding: 10px; margin-bottom: 18px; }
        }
      `}</style>
    </>
  );
}
