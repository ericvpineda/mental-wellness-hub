import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Toolbar from "./Tootbar";
import Heading from "@tiptap/extension-heading";
import InvisibleCharacters from "@tiptap-pro/extension-invisible-characters";
import { useEffect } from "react";

export default function Tiptap({ description, onChange, updateEntry }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
          levels: [2],
        },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: "focus-visible:outline-none border-none h-full px-3",
      },
    },
    parseOptions: {
      preserveWhitespace: true,
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      updateEntry(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;
    let { from, to } = editor.state.selection;
    editor.commands.setContent(description, false, {
      preserveWhitespace: "full",
    });
    // Prevent cursor jumping to end after setContect()
    editor.commands.setTextSelection({ from, to });
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
