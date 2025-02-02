import { useEditorContext } from "@/app/contexts/EditorContext";
import React, { useState, useRef, useEffect, Ref } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface IconDropdownProps {
  options: React.ElementType[];
  onSelect: (index: number) => void;
  isActive: (index: number) => boolean | undefined;
}
interface IconDropdownProps {
  options: React.ElementType[]; // Array of icon components
  onSelect: (index: number) => void;
  isActive: (index: number) => boolean | undefined;
}
export const IconDropdown: React.FC<IconDropdownProps> = ({
  options, onSelect, isActive,
}) => {

  const { setDropdownContext } = useEditorContext();

  const [open, setOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<{
    Icon: React.ElementType;
    index: number;
  }>({
    Icon: options[0],
    index: 0,
  });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownContentRef = useRef<HTMLDivElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({
    left: "50%",
    transform: "translateX(-50%)",
  });

  const _onSelect = (icon: React.ElementType, index: number) => {
    setSelectedIndex({ Icon: icon, index });
    onSelect(index);
    setOpen(false);
  };

  // Detect active option and update selectedIndex
  useEffect(() => {
    const activeIndex = options.findIndex((_, index) => isActive(index));
    if (activeIndex !== -1) {
      setSelectedIndex({ Icon: options[activeIndex], index: activeIndex });
    }
  }, [options, isActive]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Ensure dropdown stays within screen bounds
  useEffect(() => {
    if (open && dropdownRef.current && dropdownContentRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const contentRect = dropdownContentRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      let newStyle: React.CSSProperties = {
        left: "50%",
        transform: "translateX(-50%)",
      };

      if (dropdownRect.left + contentRect.width / 2 > screenWidth) {
        newStyle = { right: "0", left: "auto", transform: "none" };
      } else if (dropdownRect.left - contentRect.width / 2 < 0) {
        newStyle = { left: "0", right: "auto", transform: "none" };
      }

      setDropdownStyle(newStyle);
    }

    setDropdownContext({
      open: open,
      dropdownContentRef: dropdownContentRef,
      dropdownStyle: dropdownStyle,
      options: options,
      isActive: isActive,
      onSelect: _onSelect
    })
  }, [open]);

  useEffect(() => {
    setDropdownContext({
      open: open,
      dropdownContentRef: dropdownContentRef,
      dropdownStyle: dropdownStyle,
      options: options,
      isActive: isActive,
      onSelect: _onSelect
    })
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`transition-colors flex text-white overflow-hidden rounded-lg items-center h-10 ${isActive(selectedIndex.index)
          ? "bg-[--color-primary]"
          : "bg-[--color-dark-accent]"}`}
      >
        <button
          className={`py-2.5 px-3 ${isActive(selectedIndex.index)
            ? "bg-[--color-primary] hover:bg-[--color-primary-hover]"
            : "hover:bg-[--color-dark-accent-1]"}`}
          onClick={() => onSelect(selectedIndex.index)}
        >
          <selectedIndex.Icon size={20} />
        </button>
        <button
          className={`transition-colors py-3.5 px-1 ${isActive(selectedIndex.index)
            ? "bg-[--color-primary] hover:bg-[--color-primary-hover]"
            : "hover:bg-[--color-dark-accent-1]"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <IoIosArrowUp size={10} /> : <IoIosArrowDown size={10} />}
        </button>
      </div>
    </div>
  );
};

export interface DropdownOptionsDialogBoxProps {
  open: boolean,
  dropdownContentRef: React.RefObject<HTMLDivElement | null>,
  dropdownStyle: React.CSSProperties,
  options: React.ElementType[]
  isActive: (index: number) => boolean | undefined
  onSelect: (icon: React.ElementType, index: number) => void
}

export const DropdownOptionsDialogBox = () => {

  const { dropdownContext } = useEditorContext();

  return (
  <>
    {dropdownContext?.open && (
      <div
        ref={dropdownContext?.dropdownContentRef}
        className="border border-[--color-dark-accent-1] bg-[--color-dark] p-1 fixed mt-14 rounded-b-xl drop-shadow-xl z-10 max-w-[90vw]"
        style={dropdownContext?.dropdownStyle}
      >
        <div className="bg-[--color-dark-accent] flex overflow-hidden rounded-lg">
          {dropdownContext?.options.map((Icon, index) => (
            <button
              key={index}
              className={`transition-colors px-4 py-2 flex items-center ${dropdownContext?.isActive(index)
                ? "bg-[--color-primary]"
                : "hover:bg-[--color-dark-accent-1]"}`}
              onClick={() => dropdownContext?.onSelect(Icon, index)}
            >
              <Icon size={20} />
            </button>
          ))}
        </div>
      </div>
    )}</>
  )
}
