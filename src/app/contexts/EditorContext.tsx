"use client"

import React, { ReactNode, useState, useContext, createContext } from "react";
import { Editor } from "@tiptap/react";
import useTipTapEditor from "@/components/editor/editor"; // ✅ Use the hook
import { DropdownOptionsDialogBoxProps } from "@/components/editor/components/IconDropdown";

type SaveState = "saving" | "saved" | "normal";

export type MDXData = {
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
  dropdownContext: DropdownOptionsDialogBoxProps | null;
  setDropdownContext: React.Dispatch<React.SetStateAction<DropdownOptionsDialogBoxProps | null>>
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
  const editor = useTipTapEditor(); // ✅ Now using a proper hook
  const [currentMDX, setCurrentMDX] = useState<MDXData | null>(null);
  const [saveState, setSaveState] = useState<SaveState>("saving");

  const [dropdownContext, setDropdownContext] = useState<DropdownOptionsDialogBoxProps | null>(null);

  return (
    <EditorContext.Provider value={{ editor, saveState, setSaveState, currentMDX, setCurrentMDX, dropdownContext, setDropdownContext }}>
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
