import React, { useState, useEffect, useRef } from "react";
import { Editor } from "@tiptap/react";
import { GoBold, GoItalic, GoStrikethrough } from "react-icons/go";

import { LuHeading1, LuHeading2, LuHeading3, LuHeading4, LuHeading5, LuHeading6 } from "react-icons/lu";
import { LuAlignLeft, LuAlignCenter, LuAlignRight, LuAlignJustify } from "react-icons/lu";
import { Level } from "@tiptap/extension-heading";

import { MdFormatBold, } from "react-icons/md";
import { PiTextItalicBold } from "react-icons/pi";
import { TbUnderline } from "react-icons/tb";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { PiTextAlignLeftBold, PiTextAlignRightBold, PiTextAlignCenterBold, PiTextAlignJustifyBold } from "react-icons/pi";
import { MdOutlineInsertLink, MdOutlineInsertPhoto } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuUndo2, LuRedo2 } from "react-icons/lu";

interface EditorToolBarProps {
  editor: Editor | null;
}

const EditorToolBarComponent = ({ editor }: EditorToolBarProps) => {
  return (
    <div className="sticky border border-[--color-dark-accent-1] p-1 rounded-lg flex flex-wrap gap-1 w-full justify-center mx-auto max-w-[576px] lg:mx-0">
      <Button name="Bold" Icon={MdFormatBold} active={editor?.isActive("bold")} onClick={() => editor?.chain().focus().toggleBold().run()} isDisabled={editor === null} />
      <Button name="Italic" Icon={PiTextItalicBold} active={editor?.isActive("italic")} onClick={() => editor?.chain().focus().toggleItalic().run()} isDisabled={editor === null} />
      <Button name="Underline" Icon={TbUnderline} active={editor?.isActive("underline")} onClick={() => editor?.chain().focus().toggleUnderline().run()} isDisabled={editor === null} />
      <Button name="Strike" Icon={AiOutlineStrikethrough} active={editor?.isActive("strike")} onClick={() => editor?.chain().focus().toggleStrike().run()} isDisabled={editor === null} />
      <IconDropdown options={[MdOutlineInsertLink, MdOutlineInsertPhoto]} onSelect={(icon, index) => {return}} isActive={(index) => {return false}} />

      <IconDropdown options={[LuHeading1, LuHeading2, LuHeading3, LuHeading4, LuHeading5, LuHeading6]} onSelect={(icon, index) => editor?.chain().focus().toggleHeading({ level: index + 1 as Level }).run()} isActive={(index) => editor?.isActive("heading", { level: index + 1 })} />

      <IconDropdown options={[PiTextAlignLeftBold, PiTextAlignCenterBold, PiTextAlignRightBold, PiTextAlignJustifyBold]} onSelect={(icon, index) => editor?.chain().focus().setTextAlign(["left", "center", "right", "justify"][index]).run()} isActive={(index) => editor?.isActive("textAlign", { textAlign: ["left", "center", "right", "justify"][index] })} />

      <Button name="Undo" Icon={LuUndo2} active={false} onClick={() => editor?.chain().focus().undo().run()} isDisabled={editor === null} />
      <Button name="Redo" Icon={LuRedo2} active={false} onClick={() => editor?.chain().focus().redo().run()} isDisabled={editor === null} />
    </div>
  );
};

interface ButtonProps {
  isDisabled?: boolean;
  name: string;
  Icon?: React.ElementType;
  active: boolean | undefined;
  onClick: () => void;
}

const Button = ({ name, Icon, active, onClick, isDisabled }: ButtonProps) => {
  return (
    <button className={`${active ? "bg-[--color-primary]" : "bg-[--color-dark-accent] hover:bg-[--color-dark-accent-1]"} transition-colors text-white px-4 py-2 rounded-lg`} disabled={isDisabled} onClick={onClick}>
      {Icon ? <Icon size={20} /> : name}
    </button>
  );
};

interface IconDropdownProps {
  options: React.ElementType[];
  onSelect: (option: React.ElementType, index: number) => void;
  isActive: (index: number) => boolean | undefined;
}

const IconDropdown = ({ options, onSelect, isActive }: IconDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<{ Icon: React.ElementType; index: number }>({ Icon: options[0], index: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const _onSelect = (icon: React.ElementType, index: number) => {
    setSelectedIndex({ Icon: icon, index });
    onSelect(icon, index);
    setOpen(false);
  };

  // Detects active option and updates selectedIndex accordingly
  useEffect(() => {
    const activeIndex = options.findIndex((_, index) => isActive(index));

    if (activeIndex !== -1) {
      setSelectedIndex({ Icon: options[activeIndex], index: activeIndex });
    }
  }, [options, isActive]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className={`transition-colors flex text-white rounded-lg items-center overflow-hidden ${isActive(selectedIndex.index) ? "bg-[--color-primary]" : "bg-[--color-dark-accent]"}`}>
        <button
          className={`py-2.5 px-3 ${isActive(selectedIndex.index) ? "bg-[--color-primary] hover:bg-[--color-primary-hover]" : "hover:bg-[--color-dark-accent-1]"}`}
          onClick={() => onSelect(selectedIndex.Icon, selectedIndex.index)}
        >
          <selectedIndex.Icon size={20} />
        </button>
        <button
          className={`transition-colors py-3.5 px-1 ${isActive(selectedIndex.index) ? "bg-[--color-primary] hover:bg-[--color-primary-hover]" : "hover:bg-[--color-dark-accent-1]"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <IoIosArrowUp size={10} /> : <IoIosArrowDown size={10} />}
        </button>
      </div>
      {open && (
        <div className="border border-[--color-dark-accent-1] bg-[--color-dark] p-1 absolute left-1/2 -translate-x-1/2 text-white mt-2 rounded-xl drop-shadow-xl z-10">
          <div className="bg-[--color-dark-accent] flex overflow-hidden rounded-lg">
            {options.map((Icon, index) => (
              <button
                key={index}
                className={`transition-colors px-4 py-2 flex items-center ${isActive(index) ? "bg-[--color-primary]" : "hover:bg-[--color-dark-accent-1]"}`}
                onClick={() => _onSelect(Icon, index)}
              >
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default EditorToolBarComponent;
