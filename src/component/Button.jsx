

import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";
import Buttons from "./NewButton";

const calculatorButtons = [
  "THEME",
  "AC", "DEL", "%", "/",
  "7", "8", "9", "*",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
];

const Button = ({ handleClick, mode }) => {
  const dispatch = useDispatch();

  const handleButtonClick = (btn) => {
    if (btn === "THEME") {
      dispatch(toggleTheme());
    } else {
      handleClick(btn);
    }
  };

  return (
   
    <div
      className={`grid grid-cols-4 gap-3
      ${mode === "dark" ? "bg-slate-800 p-3 rounded-xl" : "bg-sky-300 p-3 rounded-xl"}`}
    >
      {calculatorButtons.map((btn) => (
        <Buttons
          key={btn}
          onClick={() => handleButtonClick(btn)}
          mode={mode}
          isTheme={btn === "THEME"}
        >
          {btn === "THEME"
            ? mode === "dark"
              ? <FaSun />
              : <FaMoon />
            : btn}
        </Buttons>
      ))}
    </div>
  );
};

export default Button;
