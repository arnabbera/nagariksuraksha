const Card = ({
  title,
  subtitle,
  actions = null,
  children,
  padding = "24px",
  style = {},
}) => {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "14px",
        boxShadow: "0 2px 10px rgba(15,23,42,.05)",
        overflow: "hidden",
        ...style,
      }}
    >
      {(title || subtitle || actions) && (
        <div
          style={{
            padding: "18px 24px",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            {title && (
              <h3
                style={{
                  margin: 0,
                  color: "#0f172a",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {title}
              </h3>
            )}

            {subtitle && (
              <p
                style={{
                  margin: "6px 0 0",
                  color: "#64748b",
                  fontSize: "14px",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {actions && <div>{actions}</div>}
        </div>
      )}

      <div
        style={{
          padding,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;