var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import OpenAI from "openai";
import 'dotenv/config';
const router = express.Router();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
router.post("/kelvinAI", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userMessage = req.body.userMessage;
    const previousMessages = req.body.previousMessages;
    const messages = [
        {
            role: "system",
            content: `Your job is to simulate a cognitive behavioral therapy session with a client who is unfamiliar with the process.
                
                Here is the guideline to CBT:
                Step One: 
                    Identify a problem.

                Step Two: 
                    Identify negative thought patterns related to the problem.
                    Examples of negative thought patterns:
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
                    You will assist in challenging these negative thoughts by brainstorming evidence that combats it, asking thought provoking questions, and considering more balanced perspectives.

                Step Four:
                    Restructuring thoughts. Replace negative or irrational thoughts with more realistic or adaptive ones. Reframe beliefs and change cognitive patterns to be more positive and helpful.
                    You should help replace negative thoughts with several alternatives, utilizing information provided from previous steps to help narrow down. It should provide options to the others, asking if the new solutions resonate with them or not.

                Step Five:
                    Behavioral Strategies. In addition to addressing thought patterns, we aim to find healthy ways to cope. This could involve exposure therapy, meditation, journaling, hobbies, passions, etc.
                    You should help generate healthy behavioral strategies with the user until something is found.
                `,
        },
        {
            role: "system",
            content: `If ${previousMessages} is empty, it means that the conversation just started. Therefore, your response should inform the user on CBT.
        If it is not empty, the conversation is going and your job is to continue it.
      `
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
            content: "I cannot stress this enough, you should only ask once what the issue is. If youve already asked, then continue the flow of the convo to follow the CBT steps.",
        },
        {
            role: "system",
            content: "It is absolutely critical that you maintain the step the user is at. Every time you go to a new step or are near completing one, inform the user. If the user is at step five and it looks like they are done, conclude the session if they give you permission."
        },
        {
            role: "user",
            content: `The last message was from the user saying: ${userMessage}. The previous messages were: ${previousMessages}. Please continue the conversation.`,
        },
    ];
    const completion = yield openai.chat.completions.create({
        messages,
        model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]["message"]);
    res.send(completion.choices[0]["message"]["content"]);
}));
router.post("/kelvinAI/resources", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
            content: "I cannot stress this enough, you should only ask once what the issue is. If youve already asked, then continue the flow of the convo to follow the CBT steps.",
        },
        {
            role: "user",
            content: `The last message was from the user saying: ${userMessage}. The previous messages were: ${previousMessages}.`,
        },
    ];
    const completion = yield openai.chat.completions.create({
        messages,
        model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]["message"]);
    res.send(completion.choices[0]["message"]["content"]);
}));
export default router;
