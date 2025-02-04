
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEditorContext } from "@/app/contexts/EditorContext";
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

// Types
interface IconDropdownProps {
  options: React.ElementType[];
  onSelect: (index: number) => void;
  isActive: (index: number) => boolean | undefined;
}

interface DropdownOptionProps {
  Icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
}

interface DropdownButtonProps {
  Icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
}

export interface DropdownOptionsDialogBoxProps {
  open: boolean;
  dropdownContentRef: React.RefObject<HTMLDivElement | null>;
  dropdownStyle: React.CSSProperties;
  options: React.ElementType[];
  isActive: (index: number) => boolean | undefined;
  onSelect: (icon: React.ElementType, index: number) => void;
}

// Components
const DropdownButton: React.FC<DropdownButtonProps> = ({ Icon, isActive, onClick }) => (
  <button
    className={`py-2.5 px-3 ${isActive ? "bg-[--color-primary] hover:bg-[--color-primary-hover]" : "hover:bg-[--color-dark-accent-1]"}`}
    onClick={onClick}
  >
    <Icon size={20} />
  </button>
);

const DropdownOption: React.FC<DropdownOptionProps> = ({ Icon, isActive, onClick }) => (
  <button
    className={`transition-colors px-4 py-2 flex items-center ${isActive ? "bg-[--color-primary]" : "hover:bg-[--color-dark-accent-1]"}`}
    onClick={onClick}
  >
    <Icon size={20} />
  </button>
);

export const IconDropdown: React.FC<IconDropdownProps> = ({ options, onSelect, isActive }) => {
  return null;
};

export const DropdownOptionsDialogBox: React.FC = () => {
  const { dropdownContext } = useEditorContext();

  if (!dropdownContext?.open) return null;

  return null
};
