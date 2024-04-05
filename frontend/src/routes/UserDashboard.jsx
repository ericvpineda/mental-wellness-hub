import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import { SignInButton, useUser } from "@clerk/clerk-react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function UserDashboard() {
  const { isSignedIn, user, isLoading } = useUser();
  const [cbtCount, setCbtCount] = useState(0);
  const [meditationCount, setMeditationCount] = useState(0);
  const [mood, setMood] = useState("");

  useEffect(() => {
    if (user && !isLoading) {
      fetch(`https://mental-wellness-hub-lnts.vercel.app/api/users/cbt/${user.id}`)
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

      fetch(
        `https://mental-wellness-hub-lnts.vercel.app/api/users/meditations/${user.id}`
      )
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
    { label: "Journal Count", count: 0, color: "#FF6347" }, // Tomato
    { label: "Mood Tracker", count: 0, color: "#FFD700" }, // Gold
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
        <SpeedInsights />
        <main className="text-center flex flex-col items-center gap-6 h-screen">
          <section className="flex flex-col gap-4 justify-center items-center w-full h-1/4 bg-gray-50">
            <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
              Hi, {user.firstName}! 👋🏼
            </h1>
            <h1 className="text-base md:text-lg lg:text-xl xl:text-xl font-light">
              We hope you are having a great day! View your dashboard for
              insights.
            </h1>
          </section>

          <section className="w-5/6 p-4 flex flex-row justify-around items-center">
            <div className="flex flex-col items-center gap-6 bg-neutral-50 p-6 rounded-md border-2 border-gray-200 w-5/6 lg:w-1/3 xl:w-1/3">
              <p className="font-semibold text-xl">Your Activity</p>
              <div>
                {data
                  .sort((a, b) => b.count - a.count)
                  .map((item, index) => (
                    <div key={index} className="flex items-center">
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
                <div className="flex items-center justify-around">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setMood("happy")}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setMood("sad")}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                    />
                  </svg>
                </div>
                {mood ? (
                  <p className="text-sm font-light">
                    Thanks for your feedback!
                  </p>
                ) : null}
              </div>
              <div className="hidden p-6 bg-neutral-50 border rounded-lg">
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
        <div className="h-screen">
          <div className="flex flex-col justify-center items-center gap-6 pt-6 pb-6">
            <h1 className="text-xl">To use the dashboard, you must first login. :)</h1>
            <SignInButton className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
