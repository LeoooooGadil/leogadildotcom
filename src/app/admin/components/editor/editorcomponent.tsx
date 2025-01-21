"use client";

import { EditorContent, Editor } from "@tiptap/react";

import EditorToolbarComponent from "@/admin/components/editor/components/editortoolbarcomponent";
// import EditorBubbleMenuComponent from "./editorbubblemenucomponent";
import EditorFloatingMenuComponent from "@/admin/components/editor/components/editorfloatingmenucomponent";
import { ImSpinner2 } from "react-icons/im";

interface EditorComponentProps {
  editor: Editor | null;
}

const EditorComponent = ({ editor }: EditorComponentProps) => {
  
  return (
    <div className="relative lg:px-0">
      <EditorToolbarComponent editor={editor} />
      {/* <EditorBubbleMenuComponent editor={editor} /> */}
      <EditorFloatingMenuComponent editor={editor} />

      {editor === null ? <div className="h-[524px] flex justify-center items-center">
        <Spinner />
      </div> : (
        <div className="px-2 lg:px-0">
          <EditorContent editor={editor} />
        </div>
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
