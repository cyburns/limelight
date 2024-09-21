import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "destructive";
}

const Button = ({ children, variant = "primary" }: ButtonProps) => {
  const baseStyles = "px-7 py-2 rounded-xl transition duration-300 text-xl";

  if (variant === "primary") {
    return (
      <button
        className={`${baseStyles} text-black bg-primary-white hover:bg-white`}
      >
        {children}
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        className={`${baseStyles} text-medium-white bg-transparent hover:bg-light-gray`}
      >
        {children}
      </button>
    );
  }

  if (variant === "destructive") {
    return (
      <button className={`${baseStyles} text-red-500 bg-transparent hover:bg-red-100 border-none`}>
        {children}
      </button>
    );
  }
};

export default Button;
