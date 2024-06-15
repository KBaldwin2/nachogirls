export function SmallTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h3 className={`font-bold tracking-tight leading-tight ${className}`}>
      {title}
    </h3>
  );
}
