import { Icons } from './Icons'
import JournalSection from './JournalSection'

export default function JournalSidebar({articles}) {
  return (
    <div className="h-full bg-[#01161e] text-[#f1faee] min-w-[22%] flex flex-col justify-between shadow-lg">
        <div className="flex flex-col">
          <div className="journal_section_header">
            <h1>This Week</h1>
          </div>
          {/* Entry Shortcuts  */}
          {articles.map((article) => (
            <JournalSection name={article.name} date={article.date} />
          ))}

          <div className="journal_section_header">
            <h1>Last Week</h1>
          </div>

          <div className="journal_entry_empty">
            <h1>Nothing happened..</h1>
          </div>
        </div>

        <div className="flex flex-col">
          {/* Create New Journal Button  */}
          <div className="journal_section_header flex items-start justify-center gap-2 border-r-8 border-[#2f3e46] cursor-pointer hover:bg-[#2f3e46]">
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
  )
}
