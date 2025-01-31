"use client";

import React, {
  ReactNode,
  useState,
  useContext,
  createContext,
} from "react";
import { Editor } from "@tiptap/react";

import TipTapEditor from "@/components/editor/editor";

type SaveState = "saving" | "saved" | "normal";

type MDXData = {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  image: string;
  keywords: string[];
  content: string;
  create_date: Date;
  update_date: Date;
};

interface EditorContextType {
  editor: Editor | null;
  saveState: SaveState;
  setSaveState: React.Dispatch<React.SetStateAction<SaveState>>;
  currentMDX: MDXData | null;
  setCurrentMDX: React.Dispatch<React.SetStateAction<MDXData | null>>;
}

export const EditorContext = createContext<EditorContextType | undefined>(
  undefined
);

interface EditorContextProviderProps {
  children: ReactNode;
}

export default function EditorContextProvider({
  children,
}: EditorContextProviderProps) {
  const editor = TipTapEditor();
  const [currentMDX, setCurrentMDX] = useState<MDXData | null>(null);
  const [saveState, setSaveState] = useState<SaveState>("saving");

  return (
    <EditorContext.Provider value={{ editor, saveState, setSaveState, currentMDX, setCurrentMDX }}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditorContext() {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error(
      "useEditorContext must be used within an EditorContextProvider"
    );
  }
  return context;
}
