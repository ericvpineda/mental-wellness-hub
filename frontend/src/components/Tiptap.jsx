import { useEditor, EditorContent } from "@tiptap/react";
import Toolbar from "./Tootbar";
import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useState } from "react";
import InvisibleCharacters from "@tiptap-pro/extension-invisible-characters";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight, common } from "lowlight";
import { LiteralTab } from "./tiptap/LiteralTab";
import StarterKit from "@tiptap/starter-kit";
import { mergeAttributes } from "@tiptap/react";
import { print } from "lib/utils";
import { EditorState } from "@tiptap/pm/state";

export default function Tiptap({
  description,
  onChange,
  entryIndex,
  // updateEntry,
}) {
  const [index, setIndex] = useState(-1);
  const lowlight = createLowlight(common);
  const editor = useEditor({
    content: "",
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Heading.extend({
        levels: [1, 2],
        renderHTML({ node, HTMLAttributes }) {
          const level = this.options.levels.includes(node.attrs.level)
            ? node.attrs.level
            : this.options.levels[0];
          const classes = {
            1: "text-4xl",
            2: "text-3xl",
            3: "text-2xl",
          };
          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
              class: `${classes[level]}`,
            }),
            0,
          ];
        },
      }).configure({
        levels: [1, 2, 3],
      }),
      Placeholder.configure({
        placeholder:
          description &&
          description.length > 0 &&
          "Tell me more about your day...",
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
      // onChange(editor.getHTML());
      // Note: Updates stored html
      // updateEntry(editor.getHTML());
    },
  });

  function resetEditorContent(editor, newContent) {
    editor.commands.setContent(newContent);

    // The following code clears the history. Hopefully without side effects.
    const newEditorState = EditorState.create({
        doc: editor.state.doc,
        plugins: editor.state.plugins,
        schema: editor.state.schema
    });
    editor.view.updateState(newEditorState);
}

  useEffect(() => {
    if (!editor) return;
    let { from, to } = editor.state.selection;
    // Prevent history from being destroyed from multiple setContent() updates
    print("index, entryIndex", index, entryIndex);
    if (entryIndex !== index && description !== null) {
      // editor.commands.setContent(description, true, {
      //   preserveWhitespace: "full",
      // });
      resetEditorContent(editor, description)
      setIndex(entryIndex);
    }
    // Prevent cursor jumping to end after setContect()
    editor.commands.setTextSelection({ from, to });
  }, [description, editor, index]);

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      {/* <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
    </>
  );
}
