"use client";
import React from "react";

const EMOJIS = ["❤️", "😍", "✨", "💓", "🥰", "💌"];

const Card = ({ line, index }: { line: string; index: number }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(line);
  };

  return (
    <div className="flex mt-3 md:mt-5 gap-2 flex-col mx-auto rounded-md px-3 py-2 shadow shadow-gray-400 bg-white">
      <div>
        <span>{EMOJIS[index % EMOJIS.length]}</span>
        <span className="text-pink-600 font-medium">
          Pickup Line #{index + 1}
        </span>
      </div>
      <hr />
      <p className="m-0">{line}</p>
      <button className="self-end mb-1" onClick={copyToClipboard}>
        <div className="flex rounded-sm text-xs gap-1 text-white bg-violet-800 px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-copy"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
            />
          </svg>
          Copy
        </div>
      </button>
    </div>
  );
};

export default Card;
