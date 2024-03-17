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
import { EditorState } from "@tiptap/pm/state";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import FileHandler from "@tiptap-pro/extension-file-handler";
import CharacterCount from "@tiptap/extension-character-count";
import Strike from "@tiptap/extension-strike";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

export default function Tiptap({
  description,
  onChange,
  entryIndex,
  updateEntry,
}) {
  // Initial index for entries
  const [index, setIndex] = useState(-1);
  const [isShowingCharCount, setIsShowingCharCount] = useState(false);
  // Used for codeblock styling
  const lowlight = createLowlight(common);
  lowlight.register({ html });
  lowlight.register({ ts });

  // All tiptap imported extensions
  const extensions = [
    StarterKit, // includes extensions: https://tiptap.dev/docs/editor/api/extensions/starter-kit
    CodeBlockLowlight.configure({ lowlight }),
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
    Highlight,
    Image,
    Link.configure({
      openOnClick: true,
      autolink: true,
    }),
    FileHandler.configure({
      allowedMimeTypes: ["image/png", "image/jpeg", "image/gif", "image/webp"],
      onDrop: (currentEditor, files, pos) => {
        files.forEach((file) => {
          const fileReader = new FileReader();

          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            currentEditor
              .chain()
              .insertContentAt(pos, {
                type: "image",
                attrs: {
                  src: fileReader.result,
                },
              })
              .focus()
              .run();
          };
        });
      },
      onPaste: (currentEditor, files, htmlContent) => {
        files.forEach((file) => {
          if (htmlContent) {
            // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
            // you could extract the pasted file from this url string and upload it to a server for example
            // console.log(htmlContent) // eslint-disable-line no-console
            return false;
          }

          const fileReader = new FileReader();

          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            currentEditor
              .chain()
              .insertContentAt(currentEditor.state.selection.anchor, {
                type: "image",
                attrs: {
                  src: fileReader.result,
                },
              })
              .focus()
              .run();
          };
        });
      },
    }),
    CharacterCount,
    Strike,
    TaskList,
    TaskItem.configure({
      nested: true,
    }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
  ];
  // Tiptap editor
  const editor = useEditor({
    content: "",
    extensions,
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
      // Note: Updates stored html
      updateEntry(editor.getHTML());
    },
  });

  function resetEditorContent(editor, newContent) {
    editor.commands.setContent(newContent);

    // The following code clears the history. Hopefully without side effects.
    const newEditorState = EditorState.create({
      doc: editor.state.doc,
      plugins: editor.state.plugins,
      schema: editor.state.schema,
    });
    editor.view.updateState(newEditorState);
  }

  useEffect(() => {
    if (!editor) return;
    let { from, to } = editor.state.selection;
    // Prevent history from being destroyed from multiple setContent() updates
    if (entryIndex !== index && description !== null) {
      // editor.commands.setContent(description, true, {
      //   preserveWhitespace: "full",
      // });
      resetEditorContent(editor, description);
      setIndex(entryIndex);
    }
    // Prevent cursor jumping to end after setContect()
    editor.commands.setTextSelection({ from, to });
  }, [description, editor, index]);

  return (
    <>
      <Toolbar editor={editor} setIsShowingCharCount={setIsShowingCharCount} />
      <EditorContent editor={editor} />
      {isShowingCharCount && editor && (
        <div className="text-[#adb5bd] ml-3">
          {editor.storage.characterCount.characters() + " characters."}
          <br />
          {editor.storage.characterCount.words() + " words."}
        </div>
      )}
    </>
  );
}
