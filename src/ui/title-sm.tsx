import { ReactNode } from "react";

export function SmallTitle({
  children,
  className,
}: {
  children: ReactNode
  className?: string;
}) {
  return (
    <h3 className={`font-bold tracking-tight leading-tight ${className}`}>
      {children}
    </h3>
  );
}
