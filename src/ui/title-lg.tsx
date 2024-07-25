import { ReactNode } from "react";

export function LargeTitle({
  className,
  children
}: {
  className?: string;
  children: ReactNode
}) {
  return (
    <h3 className={`font-bold md:text-8xl ${className}`}>
      {children}
    </h3>
  );
}
