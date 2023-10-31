// app/api/completion/route.ts
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
export const runtime = 'edge';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();
 
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    // a precise prompt is important for the AI to reply with the correct tokens
    messages: [
      {
        role: 'user',
        content: `Analyze given note and detect the mistakes made by me and what I need to learn. Also provide 3 useful links to learn the concepts. 
Respond with a next format. Use only the following format. Do not change the styling and tags:  
<h1 style="font-weight: 700; margin-bottom: 6px; margin-top: 6px; color: #003566; font-size: 28px;">Mistakes</h1>
<p>mistakes</p>
<h1 style="font-weight: 700; margin-bottom: 6px; margin-top: 6px; color: #003566; font-size: 28px;">Further learning</h1>
<p>topics to learn/p>
<h1 style="font-weight: 700; margin-bottom: 6px; margin-top: 6px; color: #003566; font-size: 28px;">Resources</h1>
<a href="link source">link</a>
<a href="link source">link</a>
<a href="link source">link</a>.
Post content:
${prompt}
        
Output:\n`,
      },
    ],
    max_tokens: 1000,
    temperature: 1, 
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });
 
  const stream = OpenAIStream(response);
 
  return new StreamingTextResponse(stream);
}
