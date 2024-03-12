// test - cheers
import React from 'react';

export default function Journal() {
  return (
    <div className="h-screen w-full flex">
      <div className="h-full bg-green-500 min-w-[25%] flex-col">
        <h1>Journal Entries</h1>

        {/* <div className=""></div> */}

        <input type="text" placeholder="Search entries"/>
      </div>
      <div className="h-full w-full bg-blue-500">
        <h1>Journal Entry</h1>
      </div>
    </div>
  );
}
