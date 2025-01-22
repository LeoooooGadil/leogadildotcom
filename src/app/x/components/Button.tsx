import React from "react";

import { ImSpinner2 } from "react-icons/im";

interface ButtonProps {
  text: string;
  onClick: () => void;
  onLoading?: boolean;
}

const Spinner = () => {
  return <ImSpinner2 className="animate-spin" size={24} />;
};

const Button = ({ text, onClick, onLoading }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={onLoading}
      className="bg-[--color-secondary] hover:brightness-80 transition-all text-white font-bold h-10 w-48 rounded-xl flex items-center justify-center disabled:cursor-not-allowed disabled:grayscale"
    >
      {onLoading ? <Spinner /> : text}
    </button>
  );
};

export default Button;
