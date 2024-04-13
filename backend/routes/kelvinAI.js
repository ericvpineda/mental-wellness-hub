import express from 'express';
import OpenAI from "openai";
import 'dotenv/config'

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/*
const resources = {
  anxiety: [
    {
      linkOne:
        "https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961",
    },
    { linkTwo: "https://psychcentral.com/anxiety/what-anxiety-feels-like" },
    { linkThree: "https://www.nimh.nih.gov/health/topics/anxiety-disorders" },
    { linkFour: "https://www.healthline.com/health/anxiety" },
    { linkFive: "https://www.medicalnewstoday.com/articles/323454" },
  ],
  improvingDay: [
    {
      linkOne: "https://www.webmd.com/balance/features/improve-your-day",
    },
    {
      linkTwo: "https://www.betterup.com/blog/how-to-better-yourself",
    },
    {
      linkThree: "https://psychcentral.com/health/how-to-improve-your-life",
    },
    {
      linkFour:
        "https://www.theguardian.com/lifeandstyle/2022/jan/01/marginal-gains-100-ways-to-improve-your-life-without-really-trying",
    },
    {
      linkFive: "https://blog.calm.com/blog/daily-routine",
    },
  ],
};
*/

router.post("/kelvinAI", async (req, res) => {
  const userMessage = req.body.userMessage;
  const previousMessages = req.body.previousMessages;

  const messages = [
    {
      role: "system",
      content: `Your job is to simulate a cognitive behavioral therapy session with a client who is unfamiliar with the process.
                Your job is to continue the CBT session. 
                Here is the guideline to CBT:
                Step One: 
                    Identify a problem.
                    AI asks for user problem through a textarea. It encourages the user to be as descriptive as possible about the problem and how it affects their thoughts, emotions, and behaviors.

                Step Two: 
                    Identify negative thought patterns related to the problem.
                    AI will ask user for any negative or distorted thought patterns. These can include
                        mind reading
                        fortune telling
                        emotional reasoning, believing feelings are facts.
                        should statements, create guilt, frustration, or resentment.
                        black-and-white thinking, binary thinking, all-or-nothing thinking
                        catastrophizing
                        overgeneralization. 
                        personalization. Attributing external events to themselves, typically in a negative way. Example: “They cancelled because they dont like me”
                        comparisons

                Step Three: Challenge these negative thoughts.
                    The AI will assist in challenging these negative thoughts by brainstorming evidence that combats it, asking thought provoking questions, and considering more balanced perspectives.

                Step Four:
                    Restructuring thoughts. Replace negative or irrational thoughts with more realistic or adaptive ones. Reframe beliefs and change cognitive patterns to be more positive and helpful.
                    AI should replace negative thoughts with several alternatives, utilizing information provided from previous steps to help narrow down. It should provide options to the others, asking if the new solutions resonate with them or not.

                Step Five:
                    Behavioral Strategies. In addition to addressing thought patterns, we aim to find healthy ways to cope. This could involve exposure therapy, meditation, journaling, hobbies, passions, etc.
                    AI should help generate healthy behavioral strategies with the user until something is found.

                If the user has identified a negative thought, then identify the type of negative thought it is, then challenge it.
                If the user has gathered evidence to refute the negative thought, then restruct the thought.
                If the user has restructured the thought, then develope coping strategies.

                If the array is empty, then it is the start of the conversation. That means you should ask them if they are familiar with CBT.
                If the array is not empty, then you should respond to the last message. Respond as if you were already in the middle of the conversation.
                `,
    },
    {
      role: "system",
      content: `Here is a sample CBT session you should base your prompting around: CBT utilizes a 5-step method. Let's take a look:
          1. Identify the problem.
            Example: "I have anxiety about an upcoming test at school."
          2. Identify negative thoughts related to the problem.
            Example: "If I don't get an A, I'm a failure."
          3. Gather evidence to challenge this thought.
            Example: "I've passed all my previous tests with good grades, one test doesn't define my overall academic ability."
          4. Restructure your negative thought to a more balanced perspective.
            Example: "Even if I don't get an A, it doesn't mean I'm a failure. It's just one test and I've done well in the past."
          5. Find healthy ways to cope such as journaling, meditation, or healthy communication with a friend.
            Example: "I can start a journal to write down my thoughts and feelings, meditate for a few minutes every day to clear my mind, or talk to a friend about my worries.`,
    },
    {
      role: "system",
      content:
        "I cannot stress this enough, you should only ask once what the issue is. If youve already asked, then continue the flow of the convo to follow the CBT steps.",
    },
    {
      role: "user",
      content: `The last message was from the user saying: ${userMessage}. The previous messages were: ${previousMessages}.`,
    },
  ];

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]["message"]);
  res.send(completion.choices[0]["message"]["content"]);
});

router.post("/kelvinAI/resources", async (req, res) => {
  const userMessage = req.body.userMessage;
  const previousMessages = req.body.previousMessages;

  const messages = [
    {
      role: "system",
      content: `Your job is to create resources. `,
    },
    {
      role: "system",
      content: `Here is a sample CBT session you should base your prompting around: CBT utilizes a 5-step method. Let's take a look:
          1. Identify the problem.
            Example: "I have anxiety about an upcoming test at school."
          2. Identify negative thoughts related to the problem.
            Example: "If I don't get an A, I'm a failure."
          3. Gather evidence to challenge this thought.
            Example: "I've passed all my previous tests with good grades, one test doesn't define my overall academic ability."
          4. Restructure your negative thought to a more balanced perspective.
            Example: "Even if I don't get an A, it doesn't mean I'm a failure. It's just one test and I've done well in the past."
          5. Find healthy ways to cope such as journaling, meditation, or healthy communication with a friend.
            Example: "I can start a journal to write down my thoughts and feelings, meditate for a few minutes every day to clear my mind, or talk to a friend about my worries.`,
    },
    {
      role: "system",
      content:
        "I cannot stress this enough, you should only ask once what the issue is. If youve already asked, then continue the flow of the convo to follow the CBT steps.",
    },
    {
      role: "user",
      content: `The last message was from the user saying: ${userMessage}. The previous messages were: ${previousMessages}.`,
    },
  ];

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]["message"]);
  res.send(completion.choices[0]["message"]["content"]);  
})

export default router;