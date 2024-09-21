"use client";

import { useState } from "react";

const words = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Kiwi",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
  "Plum",
  "Raspberry",
  "Strawberry",
  "Watermelon",
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Kiwi",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
  "Plum",
  "Raspberry",
  "Strawberry",
  "Watermelon",
];

const SelectWords = () => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  const toggleSelection = (word: string) => {
    setSelectedWords((prev) =>
      prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]
    );
  };

  return (
    <div className="flex h-screen">
      {/* Left Scrollable Section */}
      <div className="w-1/4 border-r overflow-y-auto">
        <h2 className="text-lg font-bold p-4">Select Words</h2>
        <ul className="p-4">
          {words.map((word) => (
            <li
              key={word}
              onClick={() => toggleSelection(word)}
              className={`cursor-pointer p-2 hover:bg-gray-200 ${
                selectedWords.includes(word) ? "bg-gray-300" : ""
              }`}
            >
              {word}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Scrollable Section */}
      <div className="w-3/4 p-4 overflow-y-auto">
        <h2 className="text-lg font-bold">Selected Words</h2>
        <ul className="p-4">
          {selectedWords.length > 0 ? (
            selectedWords.map((word) => (
              <li key={word} className="p-2 border-b">
                {word}
              </li>
            ))
          ) : (
            <p>No words selected.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SelectWords;
