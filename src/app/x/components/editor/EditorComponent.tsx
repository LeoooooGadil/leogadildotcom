"use client";
import React, { useEffect } from "react";
import { EditorContent, Editor } from "@tiptap/react";
import EditorToolbarComponent from "@/app/x/components/editor/components/editortoolbarcomponent";
import { ImSpinner2 } from "react-icons/im";
import { useEditorContext } from "@/app/contexts/EditorContext";

interface EditorComponentProps {
  editor: Editor | null;
}

const EditorComponent = ({ editor }: EditorComponentProps) => {
  const { saveState, setSaveState } = useEditorContext();

  useEffect(() => {
    if (editor === null) return;

    const handler = () => {
      setSaveState("normal");

      window.onbeforeunload = function () {
        return "You have unsaved changes. Are you sure you want to leave?";
      };
    };

    editor.on("update", handler);

    return () => {
      editor.off("update", handler);
      window.onbeforeunload = null;
    };
  }, [editor]);

  useEffect(() => {
    if (editor === null) return;

    if (saveState === "saved") window.onbeforeunload = null;
  }, [saveState]);

  return (
    <div className="relative mx-auto px-4 lg:px-0 max-w-[576px] w-full">
      {editor === null ? (
        <div className="h-[524px] max-w-[576px] w-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="mt-2">
          <EditorContent editor={editor} className="min-h-dvh" />

          {/* Border */}
          <div className="border-b-2 border-[--color-dark-accent]"></div>
          <div className="flex justify-between mb-80 text-sm mt-1">
            <h1 className="opacity-50">
              {editor === null
                ? "Loading..."
                : `${editor.storage.characterCount.characters()} characters`}
            </h1>
            <h1 className="opacity-50">
              {editor === null
                ? "Loading..."
                : `${editor.storage.characterCount.words()} words`}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

const Spinner = () => {
  return <ImSpinner2 className="animate-spin" size={24} />;
};

export default EditorComponent;
