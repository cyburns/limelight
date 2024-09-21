import React from "react";

interface ButtonProps {
  children: string;
  variant?: "primary" | "secondary" | "destructive";
}

const Button = ({ children, variant = "primary" }: ButtonProps) => {
  const baseStyles = "px-7 py-2 rounded-xl border transition duration-200";
  const variantStyles = {
    primary: "text-black bg-white hover:bg-gray-100 transition duration-200",
    secondary: "border-gray-600 text-gray-600 bg-transparent hover:bg-gray-100",
    destructive: "text-red-600 bg-transparent hover:bg-red-100 border-none",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]}`;

  return (
    <button className={buttonStyles}>
      <span className="text-xl">{children}</span>
    </button>
  );
};

export default Button;
