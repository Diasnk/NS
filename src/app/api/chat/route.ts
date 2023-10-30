import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge"; //  Provide optimal infrastructure for our OpenAIroute (https://edge-runtime.vercel.app/)

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(request: Request) {
  const { messages } = await request.json();

  // messages [{user and he says "hello there"}]
  console.log(messages);

  // GPT-4 a system message
  // system messagetells GPT-4 how to act
  // it should always be at the front of your array

  // createChatComplition (get response from GPT-4)
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: "You need to explain the topic given by user in a simple way",
      },
      { role: "user", content: "Cell" },
      {
        role: "assistant",
        content:
          "A cell is the basic structural and functional unit of all living organisms. Think of a cell as a tiny building block that makes up every living thing, from humans to plants to animals. Inside a cell, there are various parts that perform specific jobs. The cell's nucleus acts like its brain, controlling the cell's activities and containing genetic information in the form of DNA. Other parts, like mitochondria, act as powerhouses, producing energy for the cell.Cells are surrounded by a membrane that acts like a protective barrier, controlling what goes in and out of the cell. This membrane helps the cell interact with its environment. In simple terms, cells are the fundamental units of life that work together to create tissues, organs, and ultimately entire living organisms. They perform different tasks to keep living things functioning and growing.",
      },
    ],
    max_tokens: 256,
  });
  // create a strem of data from OenAI (stream data to the frontend)
  const stream = await OpenAIStream(response);

  // send the strem as a response to our client / frontend
  return new StreamingTextResponse(stream);
}
