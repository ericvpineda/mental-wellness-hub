import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import * as d3 from "d3";

export default function UserDashboard() {
  const { isSignedIn, user, isLoading } = useUser();
  const [cbtCount, setCbtCount] = useState(0);
  const [meditationCount, setMeditationCount] = useState(0);

  useEffect(() => {
    if (user && !isLoading) {
      fetch(`http://localhost:4000/api/users/cbt/${user.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setCbtCount(data[0].session_count);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });

      fetch(`http://localhost:4000/api/users/meditations/${user.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("DATA:", data);
          setMeditationCount(data[0].meditation_count);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  }, [user]);

  const data = [
    { label: "CBT Count", count: cbtCount, color: "#1E90FF" }, // DodgerBlue
    { label: "Meditation Count", count: meditationCount, color: "#32CD32" }, // LimeGreen
    { label: "Journal Count", count: 6, color: "#FF6347" }, // Tomato
    { label: "Mood Tracker", count: 3, color: "#FFD700" }, // Gold
  ];

  useEffect(() => {
    // Check if the element exists before trying to select it
    if (document.querySelector("#cbt-graph")) {
      // Clear the previous graph if it exists
      d3.select("#cbt-graph").selectAll("*").remove();

      // Declare the chart dimensions and margins.
      const width = 228;
      const height = Math.min(width, 400);

      // Create the pie layout function.
      const pie = d3
        .pie()
        .sort(null)
        .value((d) => d.count);

      // Create the arc function.
      const arc = d3
        .arc()
        .innerRadius(0)
        .outerRadius(Math.min(width, height) / 2 - 1);

      const arcs = pie(data);

      // Create the SVG container.
      const svg = d3
        .select("#cbt-graph")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

      svg
        .append("g")
        .attr("stroke", "white")
        .selectAll()
        .data(arcs)
        .join("path")
        .attr("fill", (d) => d.data.color)
        .attr("d", arc)
        .append("title");
    }
  }, [cbtCount, meditationCount]);

  if (isSignedIn) {
    return (
      <React.Fragment>
        <main className="text-center flex flex-col items-center gap-6 h-screen">
          <section className="flex flex-col gap-4 justify-center items-center w-full h-1/4 bg-gray-50">
            <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
              Hi, {user.firstName}! 👋🏼
            </h1>
            <h1 className="text-base md:text-lg lg:text-xl xl:text-xl font-light">
              We hope you're having a great day! View your dashboard for
              insights.
            </h1>
          </section>

          <section className="w-5/6 p-4 flex flex-row justify-around items-center">
            <div className="flex flex-col items-center gap-6 bg-neutral-50 p-6 rounded-md border-2 border-gray-200 w-5/6 lg:w-1/3 xl:w-1/3">
              <p className="font-semibold text-xl">Your Activity</p>
              <div>
                {data
                  .sort((a, b) => b.count - a.count)
                  .map((item) => (
                    <div className="flex items-center">
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          backgroundColor: item.color,
                        }}
                      ></div>
                      <p className="ml-2 font-light">{item.label}</p>
                      <p className="ml-1 font-light">({item.count})</p>
                    </div>
                  ))}
              </div>
              <div id="cbt-graph"></div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="grid gap-2 items-start sm:items-center rounded-lg border p-6 bg-neutral-50 w-full">
                <h2 className="text-base font-medium">How was your day?</h2>
                <div className="grid gap-2.5">
                  <button size="sm">
                    <icon className="h-4 w-4 -translate-y-0.5 mr-2" />
                    Great :)
                  </button>
                  <button size="sm">
                    <icon className="h-4 w-4 -translate-y-0.5 mr-2" />
                    Not so good :(
                  </button>
                </div>
              </div>
              <div className="p-6 bg-neutral-50 border rounded-lg">
                <h1>Resources Recommended</h1>
                <h1>1. Placeholder</h1>
                <h1>2. Placeholder</h1>
                <h1>3. Placeholder</h1>
                <h1>4. Placeholder</h1>
              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>To use dashboard, you must first login. :)</h1>
      </React.Fragment>
    );
  }
}
