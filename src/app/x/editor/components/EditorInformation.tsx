"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Editor } from "@tiptap/react";
import { UpdateMDX } from "@/services/mdxservices";
import Checkbox from "@/components/Checkbox";
import { GetHumanizedDifference } from "@/app/utils/helpers";
import { ImSpinner2 } from "react-icons/im";
import { useEditorContext } from "@/app/contexts/EditorContext";
import { useProjectsContext } from "@/app/contexts/ProjectsContext";
import { useMDXContext } from "@/app/contexts/MDXContext";

interface EditorComponentProps {
  editor: Editor | null;
  mdxData?: any;
}

type SaveState = "saving" | "saved" | "normal";

const EditorInformation = ({ editor, mdxData }: EditorComponentProps) => {
  const router = useRouter();
  const { saveState, setSaveState, setCurrentMDX } = useEditorContext();
  const { getProjectByMxd } = useProjectsContext();
  const { fetchData } = useMDXContext();
  const [ isViewing, setIsViewing ] = useState<boolean>(false); 

  const SaveChanges = async () => {
    if (editor === null) return;

    setSaveState("saving");

    const content = editor.getHTML();
    await UpdateMDX(mdxData.id, {
      content: content,
    })
      .then((data: any) => {
        console.log("UpdateMDX Success");
        setCurrentMDX(data.data[0]);
        fetchData(); // fetch the data again.
        setSaveState("saved");
      })
      .catch((error) => {
        console.error("UpdateMDX Error:", error);
        setSaveState("normal");
        alert("An error occurred while saving changes." + error);
      });
  };

  const ViewProject = async () => {
    if (editor === null) return;
    const slug = getProjectByMxd(mdxData.id)?.slug;
    router.push("/projects/" + slug);
    setIsViewing(true);
  }

  // listen for changes in the editor
  useEffect(() => {
    if (editor === null) return;

    const handler = () => {
      setSaveState("normal");
    };

    editor.on("update", handler);

    return () => {
      editor.off("update", handler);
    };
  }, [editor]);

  return (
    <div className="px-4 mt-8 lg:mt-14 w-full sticky top-20 mx-auto lg:px-0 max-w-[576px] lg:mx-0">
      <div className="relative text-sm overflow-hidden flex flex-col items-center px-4 lg:px-4 rounded-2xl drop-shadow-lg w-full lg:w-72 mx-auto">
        <h1 className="text-3xl font-bold text-center lg:text-left w-full">
          MDX Editor
        </h1>
        <div className="flex flex-col w-full mt-8">
          <div className="flex justify-between">
            <h1 className="opacity-80">Name:</h1>
            <span className="font-bold capitalize">
              {editor === null ? "Loading..." : mdxData?.title}
            </span>
          </div>
          <div className="flex justify-between">
            <h1 className="opacity-80">Created:</h1>
            <span className="ml-1">
              {editor === null
                ? "Loading..."
                : GetHumanizedDifference(mdxData?.create_date)}
            </span>
          </div>
          <div className="flex justify-between">
            <h1 className="opacity-80">Last Saved:</h1>
            <span className="ml-1">
              {editor === null
                ? "Loading..."
                : GetHumanizedDifference(mdxData?.update_date)}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between lg:justify-between gap-5 w-full mt-4 lg:mt-24">
          {/* add a checkbox that has a label named auto-save */}
          {/* <div className="flex items-center h-11">
            <Checkbox label="Auto-Save" onChange={() => {}} />
          </div> */}
          <button
            className="transition-all bg-[--color-secondary] hover:bg-[--color-secondary-hover] disabled:grayscale disabled:cursor-not-allowed text-white h-10 w-40 rounded-xl flex items-center justify-center drop-shadow-lg"
            disabled={mdxData === null || isViewing}
            onClick={ViewProject}
          >
            {mdxData === null || isViewing ? <Spinner /> : "View Project"}
          </button>
          <button
            className="transition-all bg-[--color-primary] hover:bg-[--color-primary-hover] disabled:grayscale disabled:cursor-not-allowed text-white h-10 w-40 rounded-xl flex items-center justify-center drop-shadow-lg"
            disabled={saveState === "saved" || mdxData === null}
            onClick={SaveChanges}
          >
            {saveState === "saving"
              ? <Spinner />
              : saveState === "saved"
                ? "Saved!"
                : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Spinner = () => {
  return <ImSpinner2 className="animate-spin" size={24} />;
};

export default EditorInformation;
