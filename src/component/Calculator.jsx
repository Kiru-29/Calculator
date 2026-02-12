

import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";

const Calculator = () => {
  const [input, setInput] = useState("");
  const mode = useSelector((state) => state.theme.mode);

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
    } 
    else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } 
    else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } 
    else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center px-3
      ${mode === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"}`}
    >
      {/* ✅ Responsive container */}
      <div
        className={`w-[95%] max-w-[400px] rounded-xl p-4
        ${mode === "dark" ? "bg-slate-900" : "bg-sky-400 shadow-xl"}`}
      >
        <input
          className={`w-full text-2xl h-20 text-right rounded-lg px-4 mb-4
          ${mode === "dark"
            ? "bg-slate-800 text-white"
            : "bg-gray-100 text-black"}`}
          type="text"
          placeholder="0"
          value={input}
          readOnly
        />

        <Button handleClick={handleClick} mode={mode} />
      </div>
    </div>
  );
};

export default Calculator;
