import {
  useEditor,
  EditorContent,
} from "@tiptap/react";
import Toolbar from "./Tootbar";
import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";
import InvisibleCharacters from "@tiptap-pro/extension-invisible-characters";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight, common } from "lowlight";
import { LiteralTab } from "./tiptap/LiteralTab";
import StarterKit from "@tiptap/starter-kit";

export default function Tiptap({ description, onChange, updateEntry }) {
  const lowlight = createLowlight(common);
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
          levels: [2],
        },
      }),
      Placeholder.configure({
        placeholder:
          description.length === 0 && "Tell me more about your day...",
      }),
      LiteralTab,
      InvisibleCharacters.configure({
        visible: false,
      }),
    ],
    editorProps: {
      attributes: {
        class: "focus-visible:outline-none border-none h-full px-3",
      },
    },
    parseOptions: {
      preserveWhitespace: "full",
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      updateEntry(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;
    // let { from, to } = editor.state.selection;
    // editor.commands.setContent(description, false, {
    //   preserveWhitespace: "full",
    // });
    // // Prevent cursor jumping to end after setContect()
    // editor.commands.setTextSelection({ from, to });
  }, [description, editor]);

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      {/* <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
    </>
  );
}
