import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "rounded-lg px-6 py-3 font-semibold transition duration-200";

  const variants = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800",

    secondary:
      "bg-blue-700 text-white hover:bg-blue-600",

    outline:
      "border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
  };

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}