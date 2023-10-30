"use client";
import { useCompletion } from "ai/react";

export default function Home() {
  // usechat -> handles messages for us, user input, handling user submits, etc.
  const { completion, handleSubmit, input, handleInputChange } =
    useCompletion({
      api: "/api/completion",
    });



  // const text = useCompletion({})

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center mt-10 font-bold text-3xl">
        Analyze your note!
      </h1>
      <form className="mt-10" onSubmit={handleSubmit}>
        <textarea
          className="mt-2 w-full p-2 border-2 rounded-md border-black resize-none overflow-y-scroll min-h-[200px]"
          placeholder={"Enter your note here"}
          value={input}
          onChange={handleInputChange}
        ></textarea>
        <button className="rounded-md bg-[#003566] text-white transition-all p-2 mt-2">
          Analyze
        </button>
      </form>
      <p>{completion}</p>
      {/* <h1>text?.links</h1> */}
    </div>
  );
}
