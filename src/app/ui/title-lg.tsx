import { ReactNode } from "react";

export function LargeTitle({
  className,
  children
}: {
  className?: string;
  children: ReactNode
}) {
  return (
    <h3 className={`font-bold text-9xl ${className}`}>
      {children}
    </h3>
  );
}
