

const Buttons = ({ children, onClick, mode, isTheme }) => {
  return (
    <button
      onClick={onClick}
      className={`aspect-square w-full rounded-full flex items-center justify-center text-xl  transition duration-200
        ${
          isTheme
            ? mode === "dark"
              ? "bg-yellow-500 text-black"
              : "bg-indigo-600 text-white"
            : mode === "dark"
            ? "bg-gray-700 text-white hover:bg-gray-500"
            : "bg-sky-200 text-black hover:bg-sky-100"
        }`}
    >
      {children}
    </button>
  );
};

export default Buttons;
