import React from "react";

import { Editor, BubbleMenu } from "@tiptap/react";
import { FaBold, FaItalic, FaStrikethrough, FaUnderline } from "react-icons/fa";
import { IconType } from "react-icons";

interface EditorBubbleMenuComponentProps {
  editor: Editor | null;
}

const EditorBubbleMenuComponent = ({
  editor,
}: EditorBubbleMenuComponentProps) => {
  return (
    <>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}
          shouldShow={({ editor }) => editor.selection?.empty !== true}
        >
          <div className="bubble-menu flex flex-wrap gap-1 bg-[--color-dark-accent] p-1.5 rounded-xl drop-shadow-lg">
            <Button
              name="Bold"
              Icon={FaBold}
              active={editor.isActive("bold")}
              onClick={() => editor.chain().focus().toggleBold().run()}
            />
            <Button
              name="Italic"
              Icon={FaItalic}
              active={editor.isActive("italic")}
              onClick={() => editor.chain().focus().toggleItalic().run()}
            />
            <Button
              name="Underline"
              Icon={FaUnderline}
              active={editor.isActive("underline")}
              onClick={() => editor.chain().focus().toggleUnderline().run()}
            />
            <Button
              name="Strike"
              Icon={FaStrikethrough}
              active={editor.isActive("strike")}
              onClick={() => editor.chain().focus().toggleStrike().run()}
            />
          </div>
        </BubbleMenu>
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
        active ? "bg-[--color-primary] hover:bg-[--color-primary]" : ""
      } hover:brightness-80 transition-all text-white h-8 px-3 w-max rounded-lg flex items-center justify-center hover:bg-[--color-dark-accent-1]`}
      onClick={onClick}
    >
      {/* if theres an icon show it, else show the name */}
      {Icon ? <Icon size={16} /> : name}
    </button>
  );
};

export default EditorBubbleMenuComponent;
