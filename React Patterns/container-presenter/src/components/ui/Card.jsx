import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`p-4 border bg-neutral-800 flex flex-col gap-2 rounded-xl border-neutral-700 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
