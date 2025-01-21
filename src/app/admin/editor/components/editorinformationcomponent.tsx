import React from "react";

import { Editor } from "@tiptap/react";

interface EditorComponentProps {
  editor: Editor | null;
}

const EditorInformationComponent = ({ editor }: EditorComponentProps) => {
  return (
    <div className="px-4 lg:px-14 mt-8 lg:mt-14 w-full lg:w-max sticky top-20">
      <div className="relative text-sm overflow-hidden flex flex-col items-center px-4 lg:px-4 rounded-2xl drop-shadow-lg w-full lg:w-72 mx-auto">
        <h1 className="text-3xl font-bold text-center lg:text-left w-full">
          Editor
        </h1>
        <div className="flex flex-col w-full mt-8">
          <div className="flex justify-between">
            <h1 className="opacity-80">
              Name: {editor === null ? "Loading..." : "Title of the document"}
            </h1>
          </div>
          <div className="flex justify-between">
            <h1 className="opacity-80">
              {editor === null ? "Loading..." : "Ready"}
            </h1>
            <h1 className="opacity-80">
              {editor === null ? "Loading..." : "a few seconds ago"}
            </h1>
          </div>
          <div className="flex justify-between">
            <h1 className="opacity-80">
              {editor === null
                ? "Loading..."
                : editor?.storage.characterCount.characters() + " characters"}
            </h1>
            <h1 className="opacity-80">
              {editor === null
                ? "Loading..."
                : editor?.storage.characterCount.words() + " words"}
            </h1>
          </div>
        </div>
        <div className="flex justify-end lg:justify-between gap-2 w-full mt-4 lg:mt-24">
          <button className="bg-[--color-dark-accent] hover:bg-[--color-dark-accent-1] transition-colors text-white h-10 px-4 w-max rounded-xl flex items-center justify-center drop-shadow-lg mt-4">
            Cancel
          </button>
          <button className="bg-[--color-primary] hover:bg-[--color-primary-hover] transition-colors text-white h-10 px-4 w-max rounded-xl flex items-center justify-center drop-shadow-lg mt-4">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorInformationComponent;
