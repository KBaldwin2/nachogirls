export function MediumTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2 className={`text-xl md:text-2xl font-bold tracking-tight leading-tight ${className}`}>
    {title}
  </h2>
  );
}
