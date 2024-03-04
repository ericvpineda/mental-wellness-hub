import { Icons } from "./Icons";
import JournalSection from "./JournalSection";
import { stripHtml } from "string-strip-html";

export default function JournalSidebar({
  entries,
  selectEntryIndex,
  createNewEntry,
}) {
  return (
    <div className="h-full bg-[#01161e] text-[#f1faee] min-w-[22%] flex flex-col justify-between shadow-lg">
      <div className="flex flex-col">
        <div className="journal_section_header">
          <h1>This Week</h1>
        </div>
        {/* Entry Shortcuts  */}
        {entries.map((entry, idx) => {
          // Question: Better way to parse HTML for text? 
          const dom = new DOMParser().parseFromString(
            entry.description,
            "text/html"
          );
          let sanitizedTitle = stripHtml(
            dom.body.firstChild.textContent
          ).result;
          sanitizedTitle = sanitizedTitle.length > 20 ? sanitizedTitle.substring(0, 20) + "..." : sanitizedTitle
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

      <div className="flex flex-col">
        {/* Create New Journal Button  */}
        <div
          onClick={() => createNewEntry()}
          className="journal_section_header flex items-start justify-center gap-2 border-r-8 border-[#2f3e46] cursor-pointer hover:bg-[#2f3e46]"
        >
          <Icons.write />
          <h2>New Journal</h2>
        </div>

        {/* Search Bar for entries */}
        <div className="flex justify-start items-center relative mx-auto px-4 py-4">
          <Icons.magnifyGlass />
          <input
            type="text"
            placeholder="Search entries"
            className="relative h-10 rounded-full border pl-12 outline-none w-full cursor-text bg-gray-300 text-gray-700"
          />
        </div>
      </div>
    </div>
  );
}
