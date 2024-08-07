import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <nav className={`${darkMode && "dark"}`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4 lg:justify-between bg-gray-300 w-full h-24 p-10 shadow-md dark:bg-black dark:text-white">
          <div>
            <h1 className="font-bold text-2xl text-gray-900 dark:text-white">
              Where is the world!
            </h1>
          </div>
          <button
            className="w-14 h-14 bottom-14 right-14 rounded-full bg-neutral-500 dark:bg-black dark:text-white dark:rounded-full items-center cursor-pointer text-black"
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
