"use client";

import React, { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import EditorComponent from "@/components/editor/EditorComponent";
import { SelectMDX } from "@/services/mdxservices";
import { useEditorContext } from "@/contexts/EditorContext";
import EditorBottomToolbar from "./components/EditorBottomToolbar";
import EditorToolBarComponent from "../components/editor/components/editortoolbarcomponent";


const EditorPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <EditorPageComponent />
    </Suspense>
  )
}

const EditorPageComponent = () => {
  const { currentMDX, setCurrentMDX } = useEditorContext();
  const searchParams = useSearchParams();
  const id = searchParams.get("mdx");
  const { editor, setSaveState } = useEditorContext();

  useEffect(() => {
    const fetchData = async () => {
      if(!id) return;

      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      const { data } = (await SelectMDX(id)) as any;

      if (data[0]) {
        setCurrentMDX(data[0]);
        editor?.commands.setContent(data[0].content);
        setSaveState("saved");
      }

      return <div>Error</div>;
    };

    fetchData();
  }, [editor, setCurrentMDX, setSaveState, id]);

  if (!id) {
    return <div>Invalid MDX ID</div>;
  }

  return (
    <>
      <EditorToolBarComponent editor={editor} />
      <div className="flex flex-col lg:flex-row lg:gap-8 justify-center">
        <div className="mt-24 flex flex-col gap-6 w-full">
          <EditorComponent editor={editor} />
        </div>
      </div>
      <EditorBottomToolbar editor={editor} mdxData={currentMDX} />
    </>
  );
};

export default EditorPage;
