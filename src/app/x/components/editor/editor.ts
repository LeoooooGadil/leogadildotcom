"use client";

import { useEditor } from "@tiptap/react";

import { extensions } from "@/components/editor/components/editorextensions";
import DropHandler from "@/components/editor/handler/handledrop";

const useTipTapEditor = () => {
  const tiptap = useEditor({
    extensions: [...extensions],
    content: "",
    immediatelyRender: false,
    editorProps: {
      handleDrop: DropHandler,
      attributes: {
        class: "editor",
      },
    },
  });

  return tiptap;
};


export default useTipTapEditor;