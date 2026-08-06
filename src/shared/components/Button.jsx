const variantStyles = {
  primary: {
    background: "#2563eb",
    color: "#ffffff",
    border: "1px solid #2563eb",
  },
  secondary: {
    background: "#0f172a",
    color: "#ffffff",
    border: "1px solid #0f172a",
  },
  outline: {
    background: "#ffffff",
    color: "#2563eb",
    border: "1px solid #2563eb",
  },
  danger: {
    background: "#dc2626",
    color: "#ffffff",
    border: "1px solid #dc2626",
  },
  ghost: {
    background: "transparent",
    color: "#334155",
    border: "1px solid transparent",
  },
};

const sizeStyles = {
  small: {
    padding: "8px 14px",
    fontSize: "13px",
  },
  medium: {
    padding: "11px 18px",
    fontSize: "14px",
  },
  large: {
    padding: "14px 22px",
    fontSize: "16px",
  },
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  onClick,
  style = {},
  ...rest
}) => {
  const selectedVariant =
    variantStyles[variant] || variantStyles.primary;

  const selectedSize =
    sizeStyles[size] || sizeStyles.medium;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        ...selectedVariant,
        ...selectedSize,
        width: fullWidth ? "100%" : "auto",
        borderRadius: "10px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        fontWeight: 600,
        cursor:
          disabled || loading
            ? "not-allowed"
            : "pointer",
        opacity: disabled || loading ? 0.65 : 1,
        transition: "all 0.2s ease",
        ...style,
      }}
      {...rest}
    >
      {leftIcon}

      <span>
        {loading ? "Please wait..." : children}
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;