"use client";

import { useCompletion } from "ai/react";

export default function Features({path, text}: {path: string, text: string}) {
  // usechat -> handles messages for us, user input, handling user submits, etc.
  const { completion, input, handleInputChange, handleSubmit} = useCompletion({
    api: path
  });

  // console.log(input)
  return (
    <div className="max-w-4xl mx-auto">
        <h1 className="text-center mt-10 font-bold text-3xl">{text} your note!</h1>
      <form
        className="mt-10"
        onSubmit={handleSubmit}
      >
        {/* <p>Messages</p> */}
      {path == "api/simp" ? (
        <textarea
          className="mt-2 w-full p-2 border-2 rounded-md border-black resize-none overflow-y-scroll min-h-[200px]"
          placeholder={"Enter your note here"}
          value={input}
          onChange={handleInputChange}
        ></textarea>
      ) : (
        <input
        className="mt-2 w-full p-2 border-2 rounded-md border-black"
        placeholder={"Enter your topic here"}
        value={input}
        onChange={handleInputChange}
        />
      )
      }
        <button className="rounded-md bg-[#003566] text-white transition-all p-2 mt-2">
          {text}
        </button>
      </form>
        <div className="w-full mt-10 first-letter:text-5xl first-letter:text-[#003566] first-letter:font-semibold first-letter:mr-1 first-letter:float-left">
            {completion}
        </div>
    </div>
  );
}
