import React from "react";

import { Editor } from "@tiptap/react";
import { GoBold, GoItalic, GoStrikethrough } from "react-icons/go";
import { AiOutlineUnderline } from "react-icons/ai";
import { MdOutlineUndo, MdOutlineRedo } from "react-icons/md";
import {
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
} from "react-icons/md";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { TbCode } from "react-icons/tb";
import { PiCodeBlock } from "react-icons/pi";
import { IconType } from "react-icons";

interface EditorToolBarProps {
  editor: Editor | null;
}

const EditorToolBarComponent = ({ editor }: EditorToolBarProps) => {
  return (
    <div className="flex flex-wrap gap-2 w-full justify-center lg:justify-start">
      <div className={`flex justify-between gap-1 bg-[--color-dark-accent] items-center h-11 px-2 rounded-xl drop-shadow-lg ${editor === null ? "opacity-25" : ""}`}>
        <SmallButton
          name="Bold"
          Icon={GoBold}
          active={editor?.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
          isDisabled={editor === null}
        />
        <SmallButton
          name="Italic"
          Icon={GoItalic}
          active={editor?.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isDisabled={editor === null}
        />
        <SmallButton
          name="Underline"
          Icon={AiOutlineUnderline}
          active={editor?.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isDisabled={editor === null}
        />
        <SmallButton
          name="Strike"
          Icon={GoStrikethrough}
          active={editor?.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isDisabled={editor === null}
        />
      </div>
      <div className="flex gap-2 h-11">
        <Button
          name="Code"
          Icon={TbCode}
          active={editor?.isActive("code")}
          onClick={() => editor.chain().focus().toggleCode().run()}
          isDisabled={editor === null}
        />
        <Button
          name="Code Block"
          Icon={PiCodeBlock}
          active={editor?.isActive("codeBlock")}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isDisabled={editor === null}
        />
        <Button
          name="Blockquote"
          Icon={MdFormatQuote}
          active={editor?.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isDisabled={editor === null}
        />
      </div>
      <div className="flex gap-2 h-11">
        <Button
          name="Bullet List"
          Icon={MdFormatListBulleted}
          active={editor?.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isDisabled={editor === null}
        />
        <Button
          name="Order List"
          Icon={MdFormatListNumbered}
          active={editor?.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isDisabled={editor === null}
        />
      </div>
      <div className={`flex gap-1 bg-[--color-dark-accent] items-center h-11 px-2 rounded-xl drop-shadow-lg ${editor === null ? "opacity-25" : ""}`}>
        <SmallButton
          name="H1"
          Icon={LuHeading1}
          active={editor?.isActive("heading", { level: 1 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          isDisabled={editor === null}
        />
        <SmallButton
          name="H2"
          Icon={LuHeading2}
          active={editor?.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          isDisabled={editor === null}
        />
        <SmallButton
          name="H3"
          Icon={LuHeading3}
          active={editor?.isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          isDisabled={editor === null}
        />
      </div>
      <div className={`flex gap-1 bg-[--color-dark-accent] items-center h-11 px-2 rounded-xl drop-shadow-lg ${editor === null ? "opacity-25" : ""}`}>
        <SmallButton
          name="Undo"
          Icon={MdOutlineUndo}
          active={false}
          onClick={() => editor?.chain().focus().undo().run()}
          isDisabled={editor === null}
        />
        <SmallButton
          name="Redo"
          Icon={MdOutlineRedo}
          active={false}
          onClick={() => editor?.chain().focus().redo().run()}
          isDisabled={editor === null}
        />
      </div>
    </div>
  );
};

interface ButtonProps {
  isDisabled?: boolean;
  name: string;
  Icon?: IconType;
  active: boolean;
  onClick: () => void;
}

const Button = ({ name, Icon, active, onClick, isDisabled }: ButtonProps) => {
  return (
    <button
      className={`${
        active
          ? "bg-[--color-primary]"
          : "bg-[--color-dark-accent] hover:bg-[--color-dark-accent-1]"
      } hover:brightness-80 transition-all text-white h-11 px-4 w-max rounded-xl flex items-center justify-center drop-shadow-lg disabled:opacity-25 disabled:cursor-not-allowed`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {/* if theres an icon show it, else show the name */}
      {Icon ? <Icon size={20} /> : name}
    </button>
  );
};

const SmallButton = ({ name, Icon, active, onClick, isDisabled }: ButtonProps) => {
  return (
    <button
      className={`${
        active
          ? "bg-[--color-primary]"
          : "bg-[--color-dark-accent] hover:bg-[--color-dark-accent-1]"
      } hover:brightness-80 transition-all text-white h-8 px-2 w-max rounded-lg flex items-center justify-center`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {/* if theres an icon show it, else show the name */}
      {Icon ? <Icon size={20} /> : name}
    </button>
  );
};

export default EditorToolBarComponent;
