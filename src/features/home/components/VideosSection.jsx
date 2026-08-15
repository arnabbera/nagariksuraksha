import {
  Link,
} from "react-router-dom";

import {
  FaArrowRight,
  FaPlayCircle,
  FaYoutube,
} from "react-icons/fa";

const videos = [
  {
    id: 1,
    title:
      "Introduction to Indian Constitution",
    duration:
      "18 Min",
    category:
      "Constitution",
  },
  {
    id: 2,
    title:
      "Consumer Protection Act Explained",
    duration:
      "24 Min",
    category:
      "Consumer Law",
  },
  {
    id: 3,
    title:
      "Property Registration Process",
    duration:
      "20 Min",
    category:
      "Property Law",
  },
];

const VideosSection = () => {
  return (
    <section
      id="latest-videos"
      style={{
        scrollMarginTop:
          "88px",
        padding:
          "90px 20px",
        background:
          "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth:
            "1280px",
          margin:
            "0 auto",
        }}
      >
        <div
          style={{
            display:
              "flex",
            justifyContent:
              "space-between",
            alignItems:
              "center",
            flexWrap:
              "wrap",
            gap:
              "20px",
            marginBottom:
              "50px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize:
                  "42px",
                color:
                  "#0f172a",
                marginBottom:
                  "10px",
              }}
            >
              Latest Video
              Lessons
            </h2>

            <p
              style={{
                color:
                  "#64748b",
                fontSize:
                  "18px",
                margin:
                  0,
              }}
            >
              Learn legal
              concepts through
              high-quality video
              lectures.
            </p>
          </div>

          <Link
            to="/videos"
            style={{
              display:
                "flex",
              alignItems:
                "center",
              gap:
                "8px",
              color:
                "#2563eb",
              textDecoration:
                "none",
              fontWeight:
                600,
            }}
          >
            View All Videos

            <FaArrowRight />
          </Link>
        </div>

        <div
          style={{
            display:
              "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap:
              "30px",
          }}
        >
          {videos.map(
            (video) => (
              <div
                key={
                  video.id
                }
                style={{
                  background:
                    "#ffffff",
                  borderRadius:
                    "18px",
                  overflow:
                    "hidden",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,.08)",
                }}
              >
                <div
                  style={{
                    height:
                      "220px",

                    background:
                      "linear-gradient(135deg,#0f172a,#1d4ed8,#2563eb)",

                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    color:
                      "#ffffff",
                  }}
                >
                  <FaPlayCircle
                    size={70}
                  />
                </div>

                <div
                  style={{
                    padding:
                      "25px",
                  }}
                >
                  <span
                    style={{
                      background:
                        "#fee2e2",

                      color:
                        "#dc2626",

                      padding:
                        "6px 14px",

                      borderRadius:
                        "30px",

                      fontSize:
                        "13px",

                      fontWeight:
                        600,
                    }}
                  >
                    {
                      video.category
                    }
                  </span>

                  <h3
                    style={{
                      marginTop:
                        "18px",

                      color:
                        "#0f172a",

                      lineHeight:
                        "1.5",
                    }}
                  >
                    {
                      video.title
                    }
                  </h3>

                  <p
                    style={{
                      color:
                        "#64748b",

                      marginBottom:
                        "25px",
                    }}
                  >
                    Duration :{" "}
                    {
                      video.duration
                    }
                  </p>

                  <Link
                    to="/videos"
                    style={{
                      background:
                        "#dc2626",

                      color:
                        "#ffffff",

                      textDecoration:
                        "none",

                      padding:
                        "12px 22px",

                      borderRadius:
                        "8px",

                      display:
                        "inline-flex",

                      alignItems:
                        "center",

                      gap:
                        "10px",

                      fontWeight:
                        600,
                    }}
                  >
                    <FaYoutube />

                    Watch Video
                  </Link>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;