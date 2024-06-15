import { ReactNode } from "react";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'noBackground';
};

export function Button({ onClick, className, children, variant="primary" }: ButtonProps) {
    const variantClasses: Record<string, string> = {
        primary: 'bg-primary text-black hover:bg-secondary p-4 px-6',
        secondary: 'bg-gray-300 text-black hover:bg-gray-700 p-4 px-6',
        noBackground: 'text-green font-bold hover:underline'
    };
  return (
    <button className={`${className} ${variantClasses[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}
