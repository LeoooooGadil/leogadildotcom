"use client";

import { useEditor } from "@tiptap/react";

import { extensions } from "@/components/editor/components/editorextensions";

interface TipTapViewerProps {
  content: string;
}

const TipTapViewer = ({ content }: TipTapViewerProps) => {
  const viewer = useEditor({
    extensions: [...extensions],
    content: content,
    editable: false,
    editorProps: {
      attributes: {
        class: "viewer",
      },
    },
  });

  return viewer;
};


export default TipTapViewer;