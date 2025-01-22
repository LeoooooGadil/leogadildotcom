import React from "react";

import { Editor, FloatingMenu } from "@tiptap/react";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { FaBold, FaItalic, FaStrikethrough, FaUnderline } from "react-icons/fa";
import { IconType } from "react-icons";

interface EditorFloatingMenuComponentProps {
  editor: Editor | null;
}

const EditorFloatingMenuComponent = ({
  editor,
}: EditorFloatingMenuComponentProps) => {
  return (
    <>
      {editor && (
        <FloatingMenu editor={editor} tippyOptions={{ duration: 200 }}>
          <div className="flex flex-wrap gap-4 floating-menu bg-[--color-dark-accent] p-1.5 rounded-xl drop-shadow-lg">
            <div className="flex gap-1">
              <SmallButton
                name="H1"
                Icon={LuHeading1}
                active={editor.isActive("heading", { level: 1 })}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
              />
              <SmallButton
                name="H2"
                Icon={LuHeading2}
                active={editor.isActive("heading", { level: 2 })}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
              />
              <SmallButton
                name="H3"
                Icon={LuHeading3}
                active={editor.isActive("heading", { level: 3 })}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
              />
            </div>
            <div className="flex flex-wrap gap-1">
              <SmallButton
                name="Bold"
                Icon={FaBold}
                active={editor.isActive("bold")}
                onClick={() => editor.chain().focus().toggleBold().run()}
              />
              <SmallButton
                name="Italic"
                Icon={FaItalic}
                active={editor.isActive("italic")}
                onClick={() => editor.chain().focus().toggleItalic().run()}
              />
              <SmallButton
                name="Underline"
                Icon={FaUnderline}
                active={editor.isActive("underline")}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
              />
              <SmallButton
                name="Strike"
                Icon={FaStrikethrough}
                active={editor.isActive("strike")}
                onClick={() => editor.chain().focus().toggleStrike().run()}
              />
            </div>
          </div>
        </FloatingMenu>
      )}
    </>
  );
};

interface ButtonProps {
  name: string;
  Icon?: IconType;
  active: boolean;
  onClick: () => void;
}

const Button = ({ name, Icon, active, onClick }: ButtonProps) => {
  return (
    <button
      className={`${
        active ? "bg-[--color-primary]" : ""
      } hover:brightness-80 transition-all text-white h-8 px-3 w-max rounded-lg flex items-center justify-center`}
      onClick={onClick}
    >
      {/* if there's an icon show it, else show the name */}
      {Icon ? <Icon size={16} /> : name}
    </button>
  );
};

const SmallButton = ({ name, Icon, active, onClick }: ButtonProps) => {
  return (
    <button
      className={`${
        active ? "bg-[--color-primary]" : "bg-[--color-dark-accent]"
      } hover:brightness-80 transition-all text-white h-8 px-2 w-max rounded-lg flex items-center justify-center`}
      onClick={onClick}
    >
      {/* if theres an icon show it, else show the name */}
      {Icon ? <Icon size={16} /> : name}
    </button>
  );
};

export default EditorFloatingMenuComponent;
