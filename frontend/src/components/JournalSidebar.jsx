import { useEffect, useRef, useState } from "react";
import { Icons } from "./Icons";
import JournalSection from "./JournalSection";
import { stripHtml } from "string-strip-html";

export default function JournalSidebar({
  entries,
  selectEntryIndex,
  createNewEntry,
}) {
  const [minWidth, maxWidth, defaultWidth] = [200, 500, 350];
  const [width, setWidth] = useState(defaultWidth);
  const isResized = useRef(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isResized.current) return;

      setWidth((prevWidth) => {
        const newWidth = prevWidth + e.movementX * 2;
        const isInRange = minWidth <= newWidth && newWidth <= maxWidth;
        return isInRange ? newWidth : prevWidth;
      });
    });
    window.addEventListener("mouseup", () => {
      isResized.current = false;
    });
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        style={{ width: `${width / 16}rem` }}
        className="h-screen bg-[#01161e] text-[#f1faee] flex flex-col justify-between shadow-lg"
      >
        <div className="flex flex-col">
          <div className="flex flex-col">
            {/* Create New Journal Button  */}

            {/* Search Bar for entries */}
            <div className="grid grid-cols-4 items-center py-4 px-2">
              <div className="relative col-span-3">
                <Icons.magnifyGlass />
                <input
                  type="text"
                  placeholder="Search entries"
                  className="relative h-10 rounded-full border pl-12 outline-none w-full cursor-text bg-gray-300 text-gray-700"
                />
              </div>
              <div
                onClick={() => createNewEntry()}
                className="flex justify-center items-center cursor-pointer"
              >
                <Icons.write className="hover:bg-[#2f3e46] p-2 mb-1 rounded-md" />
              </div>
            </div>
          </div>
          <div className="journal_section_header">
            <h1>This Week</h1>
          </div>
          {/* Entry Shortcuts  */}
          {entries.map((entry, idx) => {
            let sanitizedTitle = "Untitled Entry";
            if (entry.description.length > 0) {
              // Question: Better way to parse HTML for text?
              const dom = new DOMParser().parseFromString(
                entry.description,
                "text/html"
              );
              sanitizedTitle = stripHtml(
                dom.body.firstChild.textContent
              ).result;
              sanitizedTitle =
                sanitizedTitle.length > 20
                  ? sanitizedTitle.substring(0, 20) + "..."
                  : sanitizedTitle;
            }
            return (
              <JournalSection
                selectEntryIndex={selectEntryIndex}
                idx={idx}
                key={entry.id}
                name={sanitizedTitle}
                date={entry.date}
              />
            );
          })}
          <div className="journal_section_header">
            <h1>Last Week</h1>
          </div>
          <div className="journal_entry_empty">
            <h1>Nothing happened..</h1>
          </div>
        </div>
      </div>

      {/* Handle */}
      <div
        onMouseDown={() => {
          isResized.current = true;
        }}
        className="inline w-3 cursor-col-resize bg-[#343434]"
      />
    </div>
  );
}
