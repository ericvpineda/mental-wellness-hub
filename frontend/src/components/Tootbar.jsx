"use client";
import {
  Heading1,
  Heading2,
  Heading3,
  Bold,
  Quote,
  List,
  Italic,
  Code,
  Pilcrow,
  Undo,
  Redo,
  Highlighter,
  ImagePlus,
  Link,
  Tally5,
  Strikethrough
} from "lucide-react";
import { Toggle, ToggleNoPressed } from "./ui/toggle";
import { useCallback } from "react";

export default function Toolbar({ editor, setIsShowingCharCount }) {
  if (!editor) {
    return null;
  }

  const addImage = useCallback(() => {
    const url = window.prompt("Enter image url:");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null || url === undefined) {
      return;
    } else if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    } else {
      // update link
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .toggleLink({ href: url })
        .run();
    }
  }, [editor]);

  return (
    <div>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 1 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Heading1 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 2 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 3 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }
      >
        <Heading3 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("blockquote")}
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <Quote className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("codeBlock")}
        onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <Code className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("invisibleCharacters")}
        onPressedChange={() =>
          editor.chain().focus().toggleInvisibleCharacters().run()
        }
      >
        <Pilcrow className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("highlight")}
        onPressedChange={() => editor.chain().focus().toggleHighlight().run()}
      >
        <Highlighter className="h-4 w-4" />
      </Toggle>

      <ToggleNoPressed size="sm" onClick={() => addImage()}>
        <ImagePlus className="h-4 w-4" />
      </ToggleNoPressed>

      <ToggleNoPressed
        size="sm"
        pressed={editor.isActive("link")}
        onClick={setLink}
      >
        <Link className="h-4 w-4" />
      </ToggleNoPressed>

      <Toggle
        size="sm"
        onPressedChange={() => setIsShowingCharCount(prev => !prev)}
      >
        <Tally5 className="h-4 w-4" />
      </Toggle>
     
      <Toggle
        size="sm"
        pressed={editor.isActive('strike')}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>

      {/* Redo and Undo Buttons */}

      <ToggleNoPressed
        size="sm"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
      >
        <Undo className="h-4 w-4" />
      </ToggleNoPressed>

      <ToggleNoPressed
        size="sm"
        disabled={!editor.can().redo()}
        onClick={() => editor.chain().focus().redo().run()}
      >
        <Redo className="h-4 w-4" />
      </ToggleNoPressed>
    </div>
  );
}
