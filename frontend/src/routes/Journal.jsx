import JournalSection from "../components/JournalSection";
import { Icons } from "../components/Icons";

export default function Journal() {
  const testArticle = {
    id: 1,
    name: "Studying at Capital One",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Non sed in distinctio harum provident? Inventore accusamus porro a
    placeat nesciunt. Cupiditate nostrum nesciunt reiciendis quis quae
    non dicta pariatur blanditiis!1
    `,
    date: "February 25, 2024",
  };

  const articles = [testArticle, testArticle];

  return (
    <div className="h-screen w-full flex">
      {/* Note: Sidebar  */}
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

      {/* Note: Journal Entry  */}
      <div className="h-full w-full bg-blue-500 px-14 pt-10">
        <div className="h-full bg-white">
          <h1 className="text-center font-bold">{articles[0].name}</h1>
          <p>{articles[0].body}</p>
        </div>
      </div>
    </div>
  );
}
