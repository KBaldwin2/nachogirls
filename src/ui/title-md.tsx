import { ReactNode } from "react";

export function MediumTitle({
  className,
  children
}: {
  className?: string;
  children: ReactNode
}) {
  return (
    <h3 className={`font-bold text-6xl ${className}`}>
      {children}
    </h3>
  );
}
