"use client";

import { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

interface QuestionProps {
  title: string;
  response: string;
}

export function Question({ title, response }: QuestionProps) {
  const [open, setOpen] = useState(false);

  function handleOpenQuestion() {
    setOpen(!open);
  }

  return (
    <div className="w-full first:pt-0 last:pb-0 pt-6 pb-8">
      <button
        className="w-full flex items-center justify-between"
        onClick={handleOpenQuestion}
      >
        <h3 className="text-gray-900 text-lg/normal font-semibold">{title}</h3>
        {open ? (
          <FiMinusCircle
            size={20}
            className="text-[#6246ea] transition-transform duration-300 transform rotate-180"
          />
        ) : (
          <FiPlusCircle
            size={20}
            className="text-[#6246ea] transition-transform duration-300"
          />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-600 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-2 text-gray-600 leading-normal pr-12">{response}</p>
      </div>
    </div>
  );
}
