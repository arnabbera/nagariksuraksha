const LoadingSpinner = ({
  size = 36,
  text = "Loading...",
  fullPage = false,
}) => {
  return (
    <div
      style={{
        minHeight: fullPage ? "60vh" : "160px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
      }}
    >
      <div
        aria-label={text}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: "4px solid #dbeafe",
          borderTopColor: "#2563eb",
          borderRadius: "50%",
          animation: "ns-spin 0.8s linear infinite",
        }}
      />

      {text && (
        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {text}
        </p>
      )}

      <style>
        {`
          @keyframes ns-spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;