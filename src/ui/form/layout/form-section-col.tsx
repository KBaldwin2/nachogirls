import { cn } from "@/ui/utils/cn";

export type FormSectionProps = {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6;
};

const colSpanClasses = {
  1: "sm:col-span-1",
  2: "sm:col-span-2",
  3: "sm:col-span-3",
  4: "sm:col-span-4",
  5: "sm:col-span-5",
  6: "sm:col-span-6",
};

export const FormSectionCol = ({
  children,
  className,
  colSpan = 6,
}: FormSectionProps) => {
  return (
    <div className={cn(colSpanClasses[colSpan], className)}>{children}</div>
  );
};
