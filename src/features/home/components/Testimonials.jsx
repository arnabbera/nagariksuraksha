import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "LL.B Student",
    review:
      "NagarikSuraksha made legal learning simple and practical. The structured notes and video lectures helped me understand complex legal concepts with ease.",
  },
  {
    id: 2,
    name: "Sneha Das",
    role: "Law Aspirant",
    review:
      "The learning platform is well organized. The combination of study materials, quizzes and certification makes it an excellent place to learn law.",
  },
  {
    id: 3,
    name: "Amit Roy",
    role: "Legal Consultant",
    review:
      "A unique initiative that combines legal consultancy with legal education. This platform has tremendous potential for students and citizens alike.",
  },
];

const Testimonials = () => {
  return (
    <section
      style={{
        padding: "90px 20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              color: "#0f172a",
              marginBottom: "15px",
            }}
          >
            What Our Students Say
          </h2>

          <p
            style={{
              color: "#64748b",
              maxWidth: "700px",
              margin: "auto",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Hear from students and legal professionals who have benefited from
            NagarikSuraksha.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: "30px",
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#f8fafc",
                borderRadius: "18px",
                padding: "35px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 25px rgba(0,0,0,.05)",
              }}
            >
              <FaQuoteLeft
                size={36}
                color="#2563eb"
              />

              <p
                style={{
                  marginTop: "25px",
                  color: "#475569",
                  lineHeight: "1.9",
                  minHeight: "130px",
                }}
              >
                {item.review}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  color: "#facc15",
                  marginBottom: "18px",
                }}
              >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <h3
                style={{
                  marginBottom: "5px",
                  color: "#0f172a",
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                }}
              >
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;