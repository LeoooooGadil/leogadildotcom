import { useEditor } from "@tiptap/react";

import { extensions } from "@/app/x/components/editor/components/editorextensions";
import content_showcase from "@/app/x/components/editor/components/contentshowcase";
import DropHandler from "@/app/x/components/editor/handler/handledrop";

// this is the editor instance this returns the editor instance

const TipTapEditor = () => {

  const tiptap = useEditor({
    extensions: [...extensions],
    content: content_showcase,
    editorProps: {
      handleDrop: DropHandler,
      attributes: {
        class: "editor",
      },
    },
  });

  return tiptap;
};


export default TipTapEditor;