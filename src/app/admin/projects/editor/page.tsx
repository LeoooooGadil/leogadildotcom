import React from "react";
import EditorComponent from "../../components/editor/components/editorcomponent";
import EditorInformationComponent from "./components/editorinformationcomponent";

const EditorPage = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative">
        <EditorInformationComponent />
      </div>
      <div className="mt-14 flex flex-col gap-10 w-full px-4 lg:px-0">
        <EditorComponent />
      </div>
    </div>
  );
};

export default EditorPage;
