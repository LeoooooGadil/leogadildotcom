"use client";

import React from "react";
import EditorComponent from "@/admin/components/editor/editorcomponent";
import EditorInformationComponent from "./components/editorinformationcomponent";

import { extensions } from "@/admin/components/editor/components/editorextensions";
import content_showcase from "@/admin/components/editor/components/contentshowcase";
import DropHandler from "@/admin/components/editor/handler/handledrop";

import { useEditor } from "@tiptap/react";

const EditorPage = () => {

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
    <div className="flex flex-col lg:flex-row">
      <div className="relative">
        <EditorInformationComponent editor={editor} />
      </div>
      <div className="mt-14 flex flex-col gap-10 w-full px-4 lg:px-0">
        <EditorComponent editor={editor} />
      </div>
    </div>
  );
};

export default EditorPage;
