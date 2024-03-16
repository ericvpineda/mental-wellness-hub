import JournalSidebar from "../components/JournalSidebar";
import { useEffect, useState } from "react";
import { mockEntries } from "lib/mockData";
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
    description: ""
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

  // Fetch all entries set entry to entry at index 0 default 
  useEffect(() => {

    // TODO: GET request for backend
    // fetch('https://localhost:8000/entries', {
    //   method: 'GET',
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //   setAllEntries(data);
    // })

    // Mock for fetching enteries later
    setAllEntries(mockEntries)
    setentry(mockEntries[index])

  }, [index, allEntries]);

  return (
    <div className="h-screen w-full flex">
      {/* Sidebar of Journal entry headers */}
      <JournalSidebar
        entries={allEntries}
        selectEntryIndex={selectIndexHandler}
        createNewEntry={createNewEntryHandler}
      />

      {/* Main Journal editor  */}
      <JournalEditor
        entry={entry}
        updateEntry={updateEntryHandler}
      />
    </div>
  );
}
