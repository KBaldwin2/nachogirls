import { cn } from "@/ui/utils/cn";

export type FormSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const FormRow = ({ children, className }: FormSectionProps) => {
  return (
    <div
      className={cn(
        `flex flex-col gap-7 sm:flex-row sm:items-start sm:gap-4`,
        className,
      )}
    >
      {children}
    </div>
  );
};
