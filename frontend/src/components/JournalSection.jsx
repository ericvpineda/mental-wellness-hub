export default function JournalSection({ idx, name, date, selectEntryIndex }) {
  return (
    <div
      className="journal_section_entry"
      onClick={() => selectEntryIndex(idx)}
    >
      <h2 className="journal_entry_title">{name}</h2>
      <time className="journal_entry_date">{date}</time>
    </div>
  );
}
