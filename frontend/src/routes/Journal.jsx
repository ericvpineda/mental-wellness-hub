import JournalSidebar from "../components/JournalSidebar";
import { useEffect, useState } from "react";
import JournalEditor from "components/JournalEditor";

// Component that implements Journal sidebar and main editor functionality
export default function Journal() {
  // Current index for list of entries
  const [index, setIndex] = useState(0);

  // Contains all fetched journal entries
  let [allEntries, setAllEntries] = useState([]);

  // QUESTION: Is this needed?
  const selectIndexHandler = (index) => {
    setIndex(index);
  };

  // TODO: Update entry description
  const updateEntryHandler = (entry) => {
    allEntries[index].description = entry;
  };

  // TODO: Figure out how to preset data without showing placeholder
  const [entry, setentry] = useState({
    id: 0,
    description: null,
    date: new Date().toDateString(),
  });

  // Creates new entry on button 'New Journal' button click
  const createNewEntryHandler = () => {
    const newEntry = {
      description: "",
      date: new Date().toDateString(),
    };
    allEntries.push(newEntry);
    setIndex(allEntries.length - 1);
    setentry(newEntry);
  };

  const fetchEntries = async () => {
    try {
      const response = await fetch("http://localhost:8000/journals", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        setAllEntries(data);
        setentry(data[index]);
        return data;
      }
    } catch (error) {
      // TODO: Toast notification?
      console.log(error);
    }
    return null;
  };

  // Fetch all entries set entry to entry at index 0 default
  useEffect(() => {
    // TODO: GET request for backend

    fetchEntries();
  }, [index, allEntries]);

  return (
    <div
      className="h-screen w-full grid grid-cols-[max-content_auto]
    "
    >
      {/* Sidebar of Journal entry headers */}
      <JournalSidebar
        entries={allEntries}
        selectEntryIndex={selectIndexHandler}
        createNewEntry={createNewEntryHandler}
      />

      {/* Main Journal editor  */}
      <JournalEditor
        entry={entry}
        entryIndex={index}
        updateEntry={updateEntryHandler}
      />
    </div>
  );
}
