"use client";

import { useEditor } from "@tiptap/react";

import { extensions } from "@/components/editor/components/editorextensions";
import DropHandler from "@/components/editor/handler/handledrop";

const TipTapEditor = () => {
  const tiptap = useEditor({
    extensions: [...extensions],
    content: "",
    editorProps: {
      handleDrop: DropHandler,
      attributes: {
        class: "editor",
      },
    },
  });

  return tiptap;
};


export default TipTapEditor;