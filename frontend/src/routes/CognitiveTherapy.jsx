import React, { useState, useEffect, useRef } from "react";
import { useUser } from "@clerk/clerk-react";

export default function CognitiveTherapy() {
  // States
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState([
    {
      role: "KelvinAI:",
      message:
        "Hi, I'm KelvinAI! I assist in simulating a cognitive behavioral therapy session. Here are some example prompts for you to begin our conversation: 1. What is CBT? 2. I have a problem I would like to solve with CBT. 3. How does CBT help people?",
    },
  ]);
  const { user } = useUser();
  
  // when convo starts, notify database that the user has started a CBT session
  if (conversation.length == 3) {
    fetch("https://mental-wellness-hub-lnts.vercel.app/api/users/cbt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        user_firstName: user.firstName
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Work with the data received from the API
        console.log(data);
      })
      .catch((error) => {
        // Handle errors that might occur during the fetch
        console.error("There was a problem with the fetch operation:", error);
      });
  } 

  // Refs
  const textareaRef = useRef(null);
  const divRef = useRef(null);

  // Scrolls to bottom of the conversation
  useEffect(() => {
    const div = divRef.current;
    div.scrollTop = div.scrollHeight;
  }, [conversation]);

  // Sends message to database and updates the conversation state
  const sendMessage = async () => {
    const userInputValue = textareaRef.current.value; // Get the value from the textarea
    const response = await fetch(
      "https://mental-wellness-hub-lnts.vercel.app/api/chat/kelvinAI",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userMessage: userInputValue, // Send the user's message to the backend
          previousMessages: conversation,
        }),
      }
    );
    const data = await response.text();

    // Update the conversation state with the user's message and the AI's response
    setConversation([
      ...conversation,
      { role: "You:", message: userInputValue },
      { role: "KelvinAI:", message: data },
    ]);

    setUserInput("");
    textareaRef.current.value = "";
  };

  return (
    <main>
      <section
        style={{ height: "25vh" }}
        className="w-full flex flex-col justify-center items-center bg-gray-100"
      >
        <p className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">Cognitive Behavioral Therapy</p>
      </section>

      <section className="w-full flex flex-col justify-center items-center px-2 py-8">
        <div
          className="w-3/4 flex flex-col items-start gap-16"
        >
          <div className="">
            <p className="text-xl font-semibold mb-6">What is it?</p>
            <p>
              Cognitive Behavioral Therapy (CBT) is a widely practiced form of
              psychotherapy aimed at helping individuals identify and change
              negative thought patterns and behaviors. It is based on the
              premise that our thoughts, feelings, and behaviors are
              interconnected, and that by changing our thoughts, we can change
              how we feel and behave.
            </p>
            <br></br>
            <p>
              With CBT, you work with a therapist to understand and challenge
              negative thoughts, learn new coping skills, and gradually face
              fears. It&apos;s used for lots of issues like depression, anxiety,
              and stress, and it&apos;s all about helping you feel happier and
              more in control.
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold mb-6">How can I use CBT?</p>
            <p>We recommend reaching out to a CBT professional. An alternative is to use our bot: KelvinAI. Simply provide the step you are on and it will guide you through CBT. <br></br><br></br>Example: Step One: I have a final coming up soon and it is making me anxious.</p>
          </div>
        </div>

        <div className="mt-6 w-3/4 flex flex-col border-2 border-gray-200 rounded-md dark:border-gray-800">
          <div className="flex items-center justify-between p-4 border-b gap-4">
            <div className="flex flex-col justify-center items-start ml-2">
              <p className="text-2xl font-bold">KelvinAI</p>
              <p className="text-md text-gray-700 font-light">
                Your CBT simulator
              </p>
            </div>
          </div>

          <div
            ref={divRef}
            style={{ height: "50vh" }}
            className="flex flex-col gap-4 p-4 overflow-scroll"
          >
            {conversation.map((message, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-4"
                style={{ display: "inline-flex" }}
              >
                <p className="p-1" key={index}>
                  <strong>{message.role}</strong> {message.message}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="rounded-lg flex flex-shrink-0 flex-grow-0">
              <textarea
                ref={textareaRef}
                className="p-1 flex-1 min-h-[40px] w-3/5 rounded-md outline-gray-100"
                placeholder="Type a message..."
                defaultValue={userInput}
                style={{ resize: "none" }}
              />

              <div className="flex justify-center items-center px-4">
                <button
                  onClick={sendMessage}
                  onTouchEnd={sendMessage}
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}