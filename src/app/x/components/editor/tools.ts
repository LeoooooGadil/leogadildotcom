import { Editor } from "@tiptap/react";

import {
	LuHeading1,
	LuHeading2,
	LuHeading3,
	LuHeading4,
	LuHeading5,
	LuHeading6,
} from "react-icons/lu";
import { Level } from "@tiptap/extension-heading";

import { MdFormatBold } from "react-icons/md";
import { PiTextItalicBold } from "react-icons/pi";
import { TbUnderline } from "react-icons/tb";
import { AiOutlineStrikethrough } from "react-icons/ai";
import {
	PiTextAlignLeftBold,
	PiTextAlignRightBold,
	PiTextAlignCenterBold,
	PiTextAlignJustifyBold,
} from "react-icons/pi";
import { LuUndo2, LuRedo2 } from "react-icons/lu";
import { IconType } from "react-icons";

type ToolType = "toggle" | "toggleDropdown"

type BaseTool = {
	name: string,
	type: ToolType,
	Icon: IconType,
	disable: boolean
}

export interface Toggle extends BaseTool {
	type: "toggle",
	onClick: () => void,
	active: boolean | undefined,
}

export interface ToggleDropdown extends BaseTool {
	type: "toggleDropdown",
	options: IconType[],
	onClick: (index: number) => void,
	active: (index: number) => boolean | undefined
}

export type ToolsType = Toggle | ToggleDropdown;

const Tools = (editor: Editor | null): Record<string, ToolsType> => {
	return {
		bold: {
			name: "Bold",
			type: "toggle",
			Icon: MdFormatBold,
			active: editor?.isActive("bold"),
			onClick: () => editor?.chain().focus().toggleBold().run(),
			disable: editor == null
		},
		italic: {
			name: "Italic",
			type: "toggle",
			Icon: PiTextItalicBold,
			active: editor?.isActive("italic"),
			onClick: () => editor?.chain().focus().toggleItalic().run(),
			disable: editor == null
		},
		underline: {
			name: "Underline",
			type: "toggle",
			Icon: TbUnderline,
			active: editor?.isActive("underline"),
			onClick: () => editor?.chain().focus().toggleUnderline().run(),
			disable: editor == null
		},
		strike: {
			name: "Strike",
			type: "toggle",
			Icon: AiOutlineStrikethrough,
			active: editor?.isActive("strike"),
			onClick: () => editor?.chain().focus().toggleStrike().run(),
			disable: editor == null
		},
		headings: {
			name: "Headings",
			type: "toggleDropdown",
			Icon: LuHeading1,
			onClick: (index: number) => editor?.chain().focus().toggleHeading({ level: (index + 1) as Level }),
			active: (index: number) => editor?.isActive("heading", { level: index + 1 }),
			options: [LuHeading1, LuHeading2, LuHeading3, LuHeading4, LuHeading5, LuHeading6],
			disable: editor == null
		},
		textalign: {
			name: "TextAlign",
			type: "toggleDropdown",
			Icon: PiTextAlignLeftBold,
			onClick: (index: number) => editor?.chain().focus().setTextAlign(["left", "center", "right", "justify"][index]).run(),
			active: (index: number) => editor?.isActive("textAlign", {
				textAlign: ["left", "center", "right", "justify"][index]
			}),
			options: [
				PiTextAlignLeftBold,
				PiTextAlignCenterBold,
				PiTextAlignRightBold,
				PiTextAlignJustifyBold,
			],
			disable: editor == null
		},
		undo: {
			name: "Undo",
			type: "toggle",
			Icon: LuUndo2,
			active: false,
			onClick: () => editor?.chain().focus().undo().run(),
			disable: editor == null
		},
		redo: {
			name: "Redo",
			type: "toggle",
			Icon: LuRedo2,
			active: false,
			onClick: () => editor?.chain().focus().undo().run(),
			disable: editor == null
		},
	}
}

export default Tools;