import React from "react";
import EnterDropMotionDiv from "./motion/EnterDropMotionDiv";
import TipTapViewer from "@/components/viewer/viewer";
import { EditorContent } from "@tiptap/react";

interface ContentDisplayProps {
  content: string;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ content }) => {
  const viewer = TipTapViewer({ content: content });
  return (
    <EnterDropMotionDiv delay={0.3}>
      <div className="">
      <div className="min-h-[400px] w-11/12 md:w-full mx-auto">
        <EditorContent editor={viewer} />
      </div>
      <div className="border-b-2 border-[--color-dark-accent] "></div>
      </div>
    </EnterDropMotionDiv>
  );
};

export const ContentDisplaySkeletalComponent = () => {
  return (
    <div className="relative min-h-56 w-11/12 md:w-full mx-auto">
      <div className="absolute flex flex-col top-0 w-full mt-1 md:mt-2">
        <div className="h-40 bg-[--color-dark-accent] w-full rounded-xl animate-pulseColor delay-200" />
        <div className="mt-5 flex flex-col gap-2">
          <div className="h-4 bg-[--color-dark-accent] w-full rounded-xl animate-pulseColor delay-400" />
          <div className="h-4 bg-[--color-dark-accent] w-1/2 rounded-xl animate-pulseColor delay-600" />
        </div>
      </div>
    </div>
  );
};

export default ContentDisplay;
