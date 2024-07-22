"use client"
import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
} from "react-aria-components";
import { LoadingSpinner } from "./loading-spinner/loading-spinner";

interface ButtonProps extends RACButtonProps {
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "noBackground";
}

export function Button({
  children,
  isLoading,
  variant = "primary",
  ...props
}: ButtonProps) {
  const variantClasses: Record<string, string> = {
    primary: "bg-primary text-white hover:bg-secondary p-4 px-6",
    secondary: "bg-black text-primary hover:bg-gray-700 p-4 px-6",
    noBackground: "text-green font-bold hover:underline",
  };
  return (
    <RACButton
      {...props}
      isDisabled={isLoading ?? props.isDisabled}
      className={`${props.className} ${variantClasses[variant]}`}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </RACButton>
  );
}
