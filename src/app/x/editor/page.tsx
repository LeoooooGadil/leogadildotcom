"use client";

import React from "react";
import EditorComponent from "@/app/x/components/editor/EditorComponent";
import EditorInformationComponent from "./components/EditorInformation";

import TipTapEditor from "@/app/x/components/editor/editor";

const EditorPage = () => {

  const editor = TipTapEditor();

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
