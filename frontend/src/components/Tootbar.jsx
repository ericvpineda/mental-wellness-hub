"use client";
import { Heading2, Bold } from "lucide-react";
import { Toggle } from "./ui/toggle";
export default function Toolbar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className="h-4 w-4"/>
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() =>
          editor.chain().focus().toggleBold().run()
        }
      >
        <Bold className="h-4 w-4"/>
      </Toggle>

    </div>
  );
}
