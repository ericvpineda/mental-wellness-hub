import JournalSidebar from "../components/JournalSidebar";
import { useEffect, useState } from "react";
import { mockEntries } from "lib/mockData";
import JournalEditor from "components/JournalEditor";

export default function Journal() {
  const [entryIndex, setEntryIndex] = useState(0);
  const [entry, setentry] = useState({});
  const allEntries = mockEntries;

  const selectEntryIndexHandler = (index) => {
    setEntryIndex(index);
  };

  // TODO: Update entry title and description 
  const updateEntryHandler = (entry) => {
    allEntries[entryIndex].description = entry
  }

  useEffect(() => {
    setentry(allEntries[entryIndex]);
  }, [entryIndex, allEntries]);

  return (
    <div className="h-screen w-full flex">
      {/* Note: Sidebar  */}
      <JournalSidebar
        entries={allEntries}
        selectEntryIndex={selectEntryIndexHandler}
      />

      {/* Note: Journal Editor  */}
      <JournalEditor entry={entry} updateEntry={updateEntryHandler}/>
    </div>
  );
}
