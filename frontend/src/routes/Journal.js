export default function Journal() {

  const testArticle = {
    id: 1,
    name: "Studying at Capital One",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Non sed in distinctio harum provident? Inventore accusamus porro a
    placeat nesciunt. Cupiditate nostrum nesciunt reiciendis quis quae
    non dicta pariatur blanditiis!
    `,
    date: "February 25, 2024"
  }

  const articles = [testArticle]

  return (
    <div className="h-screen w-full flex">
      <div className="h-full bg-green-500 min-w-[22%] flex flex-col justify-between">
        {/* Note: Sidebar  */}
        <div className="flex flex-col gap-3">
          <h1 className="text-center">Journal Entries</h1>

          {/* Entry Shortcuts  */}
          {articles.map(article => (
            <div className="bg-gray-500">
              <h2>{article.name}</h2>
              <time>{article.date}</time>
            </div>            
          ))}

          
        </div>

        {/* Create Button and Search Bar   */}
        <div className="flex flex-col">
          <button className="">Create Entry</button>
          <input type="text" placeholder="Search entries" />
        </div>
      </div>

      {/* Note: Journal Entry  */}
      <div className="h-full w-full bg-blue-500 px-14 pt-10">
        <div className="h-full bg-white">
          <h1 className="text-center font-bold">
            {articles[0].name}
          </h1>
          <p>
            {articles[0].body}
          </p>
        </div>
      </div>
    </div>
  );
}
