"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import EditorComponent from "@/components/editor/EditorComponent";
import EditorInformationComponent from "./components/EditorInformation";
import { SelectMDX, UpdateMDX } from "@/services/mdxservices";
import { useEditorContext } from "@/contexts/EditorContext";

const EditorPage = () => {
  const { currentMDX, setCurrentMDX } = useEditorContext();
  const searchParams = useSearchParams();
  const id = searchParams.get("mdx");
  const { editor, setSaveState } = useEditorContext();

  if (!id) {
    return <div>Invalid MDX ID</div>;
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = (await SelectMDX(id)) as any;

      if (data[0]) {
        setCurrentMDX(data[0]);
        editor?.commands.setContent(data[0].content);
        setSaveState("saved");
      }

      return <div>Error</div>;
    };

    fetchData();
  }, [editor]);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-8 justify-center">
        <div className="relative">
          <EditorInformationComponent editor={editor} mdxData={currentMDX} />
        </div>
        <div className="mt-8 flex flex-col gap-6">
          <EditorComponent editor={editor} />
        </div>
      </div>
    </>
  );
};

export default EditorPage;
