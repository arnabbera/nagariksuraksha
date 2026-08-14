import {
  useEffect,
  useState,
} from "react";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaNewspaper,
  FaTag,
} from "react-icons/fa";

import {
  Link,
} from "react-router-dom";

import {
  getPublishedPosts,
} from "../../../services/postService";

const formatDate = (
  value,
) => {
  if (!value) {
    return "";
  }

  try {
    let date;

    if (
      typeof value?.toDate ===
      "function"
    ) {
      date =
        value.toDate();
    } else if (
      value?.seconds
    ) {
      date =
        new Date(
          value.seconds *
            1000,
        );
    } else {
      date =
        new Date(value);
    }

    if (
      Number.isNaN(
        date.getTime(),
      )
    ) {
      return "";
    }

    return new Intl.DateTimeFormat(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      },
    ).format(date);
  } catch {
    return "";
  }
};

const LatestPosts = () => {
  const [
    posts,
    setPosts,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  useEffect(() => {
    let active = true;

    const loadPosts =
      async () => {
        try {
          setLoading(
            true,
          );

          setError("");

          const data =
            await getPublishedPosts(
              {
                pageSize:
                  4,
              },
            );

          if (!active) {
            return;
          }

          setPosts(
            Array.isArray(
              data,
            )
              ? data.slice(
                  0,
                  4,
                )
              : [],
          );
        } catch (
          loadError
        ) {
          console.error(
            "Unable to load homepage posts:",
            loadError,
          );

          if (active) {
            setError(
              "Unable to load latest posts.",
            );
          }
        } finally {
          if (active) {
            setLoading(
              false,
            );
          }
        }
      };

    loadPosts();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="ns-latest-posts">
      <div className="ns-latest-posts-container">
        <div className="ns-latest-posts-heading">
          <div>
            <span className="ns-latest-posts-label">
              <FaNewspaper />
              Legal Articles &
              Updates
            </span>

            <h2>
              Latest Posts
            </h2>

            <p>
              Read the latest
              legal awareness
              articles, educational
              posts and important
              updates from
              NagarikSuraksha.
            </p>
          </div>

          <Link
            to="/posts"
            className="ns-posts-view-all"
          >
            View All Posts
            <FaArrowRight />
          </Link>
        </div>

        {loading && (
          <div className="ns-post-status">
            Loading latest
            posts...
          </div>
        )}

        {!loading &&
          error && (
            <div className="ns-post-status error">
              {error}
            </div>
          )}

        {!loading &&
          !error &&
          posts.length ===
            0 && (
            <div className="ns-post-status">
              No published posts
              are available yet.
            </div>
          )}

        {!loading &&
          !error &&
          posts.length >
            0 && (
            <div className="ns-post-grid">
              {posts.map(
                (post) => {
                  const imageUrl =
                    post
                      ?.media
                      ?.desktop
                      ?.url ||
                    post
                      ?.media
                      ?.mobile
                      ?.url ||
                    "";

                  const date =
                    formatDate(
                      post.publishedAt ||
                        post.createdAt,
                    );

                  return (
                    <article
                      key={
                        post.id
                      }
                      className="ns-post-card"
                    >
                      <Link
                        to={`/posts/${post.slug}`}
                        className="ns-post-image-link"
                      >
                        {imageUrl ? (
                          <img
                            src={
                              imageUrl
                            }
                            alt={
                              post.title ||
                              "NagarikSuraksha post"
                            }
                            loading="lazy"
                          />
                        ) : (
                          <div className="ns-post-placeholder">
                            <FaNewspaper />
                          </div>
                        )}
                      </Link>

                      <div className="ns-post-card-body">
                        <div className="ns-post-meta">
                          {post.category && (
                            <span>
                              <FaTag />

                              {
                                post.category
                              }
                            </span>
                          )}

                          {date && (
                            <span>
                              <FaCalendarAlt />

                              {
                                date
                              }
                            </span>
                          )}
                        </div>

                        <h3>
                          <Link
                            to={`/posts/${post.slug}`}
                          >
                            {
                              post.title
                            }
                          </Link>
                        </h3>

                        {post.excerpt && (
                          <p>
                            {
                              post.excerpt
                            }
                          </p>
                        )}

                        <Link
                          to={`/posts/${post.slug}`}
                          className="ns-post-read-more"
                        >
                          Read Full
                          Post

                          <FaArrowRight />
                        </Link>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          )}
      </div>

      <style>
        {`
          .ns-latest-posts,
          .ns-latest-posts * {
            box-sizing: border-box;
          }

          .ns-latest-posts {
            width: 100%;
            padding: 80px 20px;
            background: #ffffff;
          }

          .ns-latest-posts-container {
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
          }

          .ns-latest-posts-heading {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 25px;
            margin-bottom: 38px;
          }

          .ns-latest-posts-label {
            display: inline-flex;
            align-items: center;
            gap: 7px;

            margin-bottom: 10px;

            color: #2563eb;

            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: .05em;
          }

          .ns-latest-posts-heading h2 {
            margin: 0 0 10px;

            color: #0f172a;

            font-size: clamp(
              30px,
              4vw,
              42px
            );
          }

          .ns-latest-posts-heading p {
            max-width: 700px;

            margin: 0;

            color: #64748b;

            font-size: 16px;
            line-height: 1.7;
          }

          .ns-posts-view-all {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            gap: 8px;

            color: #2563eb;

            text-decoration: none;
            font-weight: 700;
          }

          .ns-post-grid {
            display: grid;
            grid-template-columns:
              repeat(
                4,
                minmax(0, 1fr)
              );

            gap: 24px;
          }

          .ns-post-card {
            display: flex;
            min-width: 0;
            overflow: hidden;
            flex-direction: column;

            border: 1px solid #e2e8f0;
            border-radius: 16px;

            background: #ffffff;

            box-shadow:
              0 8px 25px
              rgba(15,23,42,.07);

            transition:
              transform .2s ease,
              box-shadow .2s ease;
          }

          .ns-post-card:hover {
            transform: translateY(-4px);

            box-shadow:
              0 15px 35px
              rgba(15,23,42,.12);
          }

          .ns-post-image-link {
            display: block;
            width: 100%;
            height: 190px;
            overflow: hidden;

            background: #eff6ff;
          }

          .ns-post-image-link img {
            width: 100%;
            height: 100%;
            display: block;

            object-fit: cover;

            transition:
              transform .3s ease;
          }

          .ns-post-card:hover
          .ns-post-image-link img {
            transform: scale(1.04);
          }

          .ns-post-placeholder {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;

            background:
              linear-gradient(
                135deg,
                #0f172a,
                #1d4ed8
              );

            color: #ffffff;

            font-size: 50px;
          }

          .ns-post-card-body {
            display: flex;
            flex: 1;
            flex-direction: column;

            padding: 20px;
          }

          .ns-post-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 8px 13px;

            margin-bottom: 12px;
          }

          .ns-post-meta span {
            display: inline-flex;
            align-items: center;
            gap: 5px;

            color: #64748b;

            font-size: 11px;
            font-weight: 600;
          }

          .ns-post-meta svg {
            color: #2563eb;
          }

          .ns-post-card h3 {
            margin: 0 0 11px;

            font-size: 19px;
            line-height: 1.4;
          }

          .ns-post-card h3 a {
            color: #0f172a;

            text-decoration: none;
          }

          .ns-post-card h3 a:hover {
            color: #2563eb;
          }

          .ns-post-card p {
            display: -webkit-box;
            overflow: hidden;

            margin: 0 0 18px;

            color: #64748b;

            font-size: 13px;
            line-height: 1.65;

            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }

          .ns-post-read-more {
            display: inline-flex;
            width: fit-content;
            align-items: center;
            gap: 7px;

            margin-top: auto;

            color: #2563eb;

            text-decoration: none;

            font-size: 12px;
            font-weight: 800;
          }

          .ns-post-status {
            padding: 45px 20px;

            border: 1px solid #e2e8f0;
            border-radius: 14px;

            background: #f8fafc;
            color: #64748b;

            text-align: center;
          }

          .ns-post-status.error {
            border-color: #fecaca;
            background: #fef2f2;
            color: #b91c1c;
          }

          @media (max-width: 1050px) {
            .ns-post-grid {
              grid-template-columns:
                repeat(
                  2,
                  minmax(0,1fr)
                );
            }
          }

          @media (max-width: 700px) {
            .ns-latest-posts {
              padding: 55px 15px;
            }

            .ns-latest-posts-heading {
              align-items: flex-start;
              flex-direction: column;
            }

            .ns-post-grid {
              grid-template-columns:
                1fr;
            }

            .ns-post-image-link {
              height: 220px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default LatestPosts;