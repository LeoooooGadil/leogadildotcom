import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";
import Dropcursor from "@tiptap/extension-dropcursor";
import Youtube from "@tiptap/extension-youtube";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Code from "@tiptap/extension-code";
import Link from "@tiptap/extension-link";
import Bold from "@tiptap/extension-bold";
import Highlight from "@tiptap/extension-highlight";
import Italic from "@tiptap/extension-italic";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import History from "@tiptap/extension-history";
import Image from '@tiptap/extension-image';
import AutoJoiner from 'tiptap-extension-auto-joiner';
import CharacterCount from '@tiptap/extension-character-count';
import TextAlign from '@tiptap/extension-text-align'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { common, createLowlight } from 'lowlight'

export const extensions = [
  Document,
  Paragraph,
  Text,
  BulletList,
  OrderedList,
  ListItem,
  Blockquote,
  Youtube.configure({
    inline: false,
    modestBranding: false,
  }),
  Dropcursor,
  Underline,
  Strike,
  Code,
  Link,
  Bold,
  Highlight,
  Italic,
  Subscript,
  Superscript,
  Placeholder.configure({
    placeholder: "Start typing here...",
  }),
  Heading,
  History.configure({
    depth: 10,
  }),
  AutoJoiner,
  Image,
  CharacterCount,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  CodeBlockLowlight.configure({
    lowlight: createLowlight(common),
  }),
];
