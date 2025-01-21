"use client";

import { useEditor, EditorContent } from "@tiptap/react";

import { extensions } from "./editorextensions";
import content_showcase from "./contentshowcase"
import EditorToolbarComponent from "./editortoolbarcomponent";
import EditorBubbleMenuComponent from "./editorbubblemenucomponent";
import EditorFloatingMenuComponent from "./editorfloatingmenucomponent";
import { ImSpinner2 } from "react-icons/im";
import DropHandler from "../handler/handledrop";

const EditorComponent = () => {
  const editor = useEditor({
    extensions: [...extensions],
    content: content_showcase,
    editorProps: {
      handleDrop: DropHandler,       
      attributes: {
        class: "editor",
      },
    },
  });

  return (
    <div className="relative">
      <EditorToolbarComponent editor={editor} />
      {/* <EditorBubbleMenuComponent editor={editor} /> */}
      <EditorFloatingMenuComponent editor={editor} />

      {editor === null ? <div className="h-[524px] flex justify-center items-center">
        <Spinner />
      </div> : (
        <EditorContent editor={editor} />
      )}
      
      {/* border */}
      <div className="border-b-2 border-[--color-dark-accent] mb-80"></div>
    </div>
  );
};

const Spinner = () => {
  return (
      <ImSpinner2 className="animate-spin" size={24} />
  );
}

export default EditorComponent;
