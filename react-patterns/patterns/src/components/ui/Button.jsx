import React from "react";

const variantClass = {
  cta: "bg-orange-400 text-neutral-50 hover:bg-orange-500",
  base: "bg-neutral-600 text-neutral-100  hover:bg-neutral-500",
  underline: "bg-none  underline",
};

const Button = ({ label, variant, onAction }) => {
  return (
    <button
      className={`${variantClass[variant]} py-2 px-4 rounded-md w-fit cursor-pointer`}
      onClick={onAction}
    >
      {label}
    </button>
  );
};

export default Button;
