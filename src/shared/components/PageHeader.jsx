const PageHeader = ({
  title,
  description = "",
  actions = null,
  breadcrumbs = [],
}) => {
  return (
    <div
      style={{
        marginBottom: "28px",
      }}
    >
      {breadcrumbs.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "12px",
            color: "#64748b",
            fontSize: "13px",
          }}
        >
          {breadcrumbs.map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              {index < breadcrumbs.length - 1 && (
                <span
                  style={{
                    marginLeft: "8px",
                    color: "#cbd5e1",
                  }}
                >
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              color: "#0f172a",
              fontSize: "32px",
              lineHeight: 1.2,
              fontWeight: 700,
            }}
          >
            {title}
          </h1>

          {description && (
            <p
              style={{
                margin: "10px 0 0",
                maxWidth: "760px",
                color: "#64748b",
                fontSize: "15px",
                lineHeight: 1.7,
              }}
            >
              {description}
            </p>
          )}
        </div>

        {actions && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;