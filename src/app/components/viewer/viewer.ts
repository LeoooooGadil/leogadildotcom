"use client";

import { useEditor } from "@tiptap/react";

import { extensions } from "@/components/editor/components/editorextensions";

interface TipTapViewerProps {
  content: string;
}

const useTipTapViewer = ({ content }: TipTapViewerProps) => {
  const viewer = useEditor({
    extensions: [...extensions],
    content: content,
    editable: false,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "viewer",
      },
    },
  });

  return viewer;
};


export default useTipTapViewer;