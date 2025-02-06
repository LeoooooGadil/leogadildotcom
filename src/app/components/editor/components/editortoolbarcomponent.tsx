import React from "react";
import { Editor } from "@tiptap/react";
import Tools, { ToolsType } from "@/components/editor/tools";
import { IconDropdown } from "./IconDropdown";
import { Button } from "./Button";

interface EditorToolBarProps {
  editor: Editor | null;
}

const EditorToolBarComponent = ({ editor }: EditorToolBarProps) => {
  return (
    <div className="fixed top-0 left-0 z-10 w-full">
      <div className="bg-[--color-dark] border-b border-[--color-dark-accent-1] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        <div className="flex space-x-2 justify-center items-center h-14 w-min mx-auto">
          {Object.entries(Tools(editor))
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map(([_key, tool]: [string, ToolsType]) => {
              switch (tool.type) {
                case "toggle":
                  return (
                    <Button
                      key={"toggle-" + tool.name}
                      name={tool.name}
                      Icon={tool.Icon}
                      active={tool.active}
                      onClick={tool.onClick}
                      isDisabled={tool.disable}
                    />
                  );
                case "toggleDropdown":
                  return (
                    <IconDropdown
                      key={"dropdown-" + tool.name}
                      options={tool.options}
                      onSelect={tool.onClick}
                      isActive={tool.active}
                    />
                  );
                default:
                  return null;
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default EditorToolBarComponent;
