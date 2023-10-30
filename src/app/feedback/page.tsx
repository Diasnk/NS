"use client";
import { useCompletion } from "ai/react";
import { CgSpinner } from "react-icons/cg";

export default function Home() {
  // usechat -> handles messages for us, user input, handling user submits, etc.
  const { completion, handleSubmit, input, handleInputChange, isLoading } =
    useCompletion({
      api: "/api/completion",
    });

  return (
    <div className="max-w-4xl px-4 mx-auto">
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
    {isLoading ? (
        <button className="flex items-center gap-1 rounded-md bg-[#003566] text-white transition-all px-4 py-2 mt-2 disabled:opacity-70" disabled>
            <CgSpinner className="animate-spin h-5 w-5 mr-3" /> Processing...
        </button>
          ) : (
			<button className="rounded-md bg-[#003566] text-white transition-all px-4 py-2 mt-2">
            Analyze
        </button>
          )}
      </form>
      <div dangerouslySetInnerHTML={{ __html: completion }}></div>

    </div>
  );
}
