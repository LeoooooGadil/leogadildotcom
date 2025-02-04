import React from "react";

interface ButtonProps {
  isDisabled?: boolean;
  name: string;
  Icon?: React.ElementType;
  active: boolean | undefined;
  onClick: () => void;
}
export const Button = ({ name, Icon, active, onClick, isDisabled }: ButtonProps) => {
  return (
    <button
      className={`${active
          ? "bg-[--color-primary] border border-[--color-primary-hover]"
          : "bg-[--color-dark-accent] hover:bg-[--color-dark-accent-1] border border-[--color-dark-accent-1]"} transition-colors text-white px-4 py-2 rounded-lg h-10`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {Icon ? <Icon size={20} /> : name}
    </button>
  );
};
