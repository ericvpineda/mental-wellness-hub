import React, { useState, useEffect, useRef } from "react";

const CognitiveTherapy = () => {
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState([
    { role: "KelvinAI:", message: "Hi, I'm KelvinAI! I assist in simulating a cognitive behavioral therapy session. Here are some example prompts for you to begin our conversation: 1. What is CBT? 2. I have a problem I would like to solve with CBT. 3. How does CBT help people?"}
  ]);

  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;
    div.scrollTop = div.scrollHeight;
  }, [conversation]);

  const sendMessage = async () => {
    const response = await fetch("http://localhost:4000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userMessage: userInput,
        previousMessages: conversation,
      }),
    });
    const data = await response.text();
    setConversation([
      ...conversation,
      { role: "You:", message: userInput },
      { role: "KelvinAI:", message: data },
    ]);
    setUserInput("");
  };
  console.log("DEBUG: rendering...")

  return (
    <main>
      <section
        style={{ height: "25vh" }}
        className="w-full flex flex-col justify-center items-center bg-neutral-100"
      >
        <p className="text-6xl font-semibold p-16">Cognitive Behavioral Therapy</p>
      </section>

      <section className="w-full flex flex-col justify-center items-center px-2 py-8">
        <div
          style={{ minHeight: "120vh" }}
          className="w-3/4 flex flex-col items-start justify-around"
        >
          <div>
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

          <div className="mt-12 md:mt-0">
            <p className="text-xl font-semibold">How does it work?</p>
            <p>CBT utilizes a 5-step method. Let&apos;s take a look:</p>
            <ol>
              <li>
                <p>
                  <strong>1. Identify the problem.</strong>
                </p>
                <p className="text-gray-600">
                  Example: I have anxiety about an upcoming test at school.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    2. Identify negative thoughts related to the problem.
                  </strong>
                </p>
                <p className="text-gray-600">
                  Example: If I don&apos;t get an A, I&apos;m a failure.
                </p>
              </li>
              <li>
                <p>
                  <strong>3. Gather evidence to challenge this thought.</strong>
                </p>
                <p className="text-gray-600">
                  Example: I&apos;ve passed all my previous tests with good
                  grades, one test doesn&apos;t define my overall academic
                  ability.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    4. Restructure your negative thought to a more balanced
                    perspective.
                  </strong>
                </p>
                <p className="text-gray-600">
                  Example: Even if I don&apos;t get an A, it doesn&apos;t mean
                  I&apos;m a failure. It&apos;s just one test and I&apos;ve done
                  well in the past.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    5. Find healthy ways to cope such as journaling, meditation,
                    or healthy communication with a friend.
                  </strong>
                </p>
                <p className="text-gray-600">
                  Example: I can start a journal to write down my thoughts and
                  feelings, meditate for a few minutes every day to clear my
                  mind, or talk to a friend about my worries.
                </p>
              </li>
            </ol>
          </div>

          <div className="mt-12 md:mt-0">
            <p className="text-xl font-semibold mb-6">How can I use CBT?</p>
            <p>
              You can access CBT with a therapist through your health insurance
              or online resources.
            </p>
            <br></br>
            <p>
              Additionally, you can use KelvinAI: our AI designed to simulate
              CBT, free of charge. Take a look below!
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-6 w-3/4 flex flex-col border-2 border-gray-200 rounded-md dark:border-gray-800">
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
                className="p-1 flex-1 min-h-[40px] w-3/5 rounded-md outline-gray-100"
                placeholder="Type a message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                style={{ resize: "none" }}
              />
              <div className="flex justify-center items-center px-4">
                <button
                  onClick={sendMessage}
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
};

export default CognitiveTherapy;