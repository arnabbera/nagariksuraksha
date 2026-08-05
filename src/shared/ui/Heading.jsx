export default function Heading({
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-4xl font-bold text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}