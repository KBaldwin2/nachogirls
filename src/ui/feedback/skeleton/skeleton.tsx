import { cn } from "@/ui/utils/cn";

export type SkeletonProps = {
  className?: string;
  width?: number;
  height?: number;
  type?: "text" | "circle";
};

export const Skeleton = ({
  className,
  width,
  height,
  type = "text",
}: SkeletonProps) => {
  return (
    <span
      style={{ width: width, height: height }}
      className={cn(
        type === "text" ? "rounded-md" : "",
        type === "circle" ? "rounded-full" : "",
        `flex animate-pulse bg-neutral-200`,
        className,
      )}
    />
  );
};
