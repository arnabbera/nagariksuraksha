const EmptyState = ({
  title = "No Data Found",
  description = "There is nothing to display at the moment.",
  icon = "📂",
  action = null,
}) => {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px dashed #cbd5e1",
        borderRadius: "16px",
        padding: "60px 40px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        {icon}
      </div>

      <h2
        style={{
          margin: 0,
          color: "#0f172a",
          fontSize: "24px",
          fontWeight: 700,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          maxWidth: "500px",
          margin: "16px auto 24px",
          color: "#64748b",
          fontSize: "15px",
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>

      {action && action}
    </div>
  );
};

export default EmptyState;