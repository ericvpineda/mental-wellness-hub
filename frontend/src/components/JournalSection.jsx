export default function JournalSection({name, date}) {
  return (
    <div className="journal_section_entry">
        <h2 className="journal_entry_title">{name}</h2>
        <time className="journal_entry_date">{date}</time>
    </div>
  )
}
