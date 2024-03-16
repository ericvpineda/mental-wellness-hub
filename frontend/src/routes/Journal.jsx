import JournalSidebar from "../components/JournalSidebar";
import { useEffect, useState } from "react";
import { mockEntries } from "lib/mockData";
import JournalEditor from "components/JournalEditor";


export default function Journal() {
  const [entryIndex, setEntryIndex] = useState(0);
  // TODO: Figure out how to preset data without showing placeholder
  const [entry, setentry] = useState({});
  const allEntries = mockEntries;

  const selectEntryIndexHandler = (index) => {
    setEntryIndex(index);
  };

  // TODO: Update entry description
  const updateEntryHandler = (entry) => {
    allEntries[entryIndex].description = entry;
  };

  const createNewEntryHandler = () => {
    const newEntry = {
      description: "",
      date: new Date().toDateString(),
    };
    allEntries.push(newEntry);
    setEntryIndex(allEntries.length - 1);
    setentry(newEntry);
  };

  useEffect(() => {
    setentry(allEntries[entryIndex]);
  }, [entryIndex, allEntries]);

  return (
    <div className="h-screen w-full flex">
      {/* Note: Sidebar  */}
      <JournalSidebar
        entries={allEntries}
        selectEntryIndex={selectEntryIndexHandler}
        createNewEntry={createNewEntryHandler}
      />

      {/* Note: Journal Editor  */}
      <JournalEditor
        entryIndex={entryIndex}
        entry={entry}
        updateEntry={updateEntryHandler}
      />
    </div>
  );
}
