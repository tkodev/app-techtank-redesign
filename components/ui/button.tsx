import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const variants = {
  primary:
    "bg-teal text-white hover:bg-teal/90 focus-visible:ring-teal",
  secondary:
    "bg-dark text-white hover:bg-dark/90 focus-visible:ring-dark",
  outline:
    "border-2 border-dark text-dark hover:bg-dark hover:text-white focus-visible:ring-dark",
  ghost:
    "text-foreground hover:bg-foreground/5 focus-visible:ring-foreground",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "primary", size = "md", asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={`inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
