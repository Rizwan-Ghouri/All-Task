import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // ⚠️ eval is fine for basic use
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded-xl shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Calculator</h2>
      <input
        type="text"
        value={input}
        readOnly
        className="w-full p-2 mb-4 border rounded text-xl text-right"
      />
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() =>
              btn === "=" ? handleCalculate() : handleClick(btn)
            }
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded text-xl"
          >
            {btn}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="col-span-4 bg-red-400 hover:bg-red-500 text-white p-3 rounded text-xl mt-2"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
