import Moon from "../assets/moon.svg";


const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4 lg:justify-between bg-gray-300 w-full h-24 p-10 shadow-md">
          <div>
            <h1 className="font-bold text-4xl text-gray-900">
              Where is the world!
            </h1>
          </div>
          <div className="flex items-center cursor-pointer text-gray-900">
            <img src={Moon} alt="" className="h-8 text-white" />

            <h2 className="font-bold tracking-wide text-xl">Dark Mode</h2>
          </div>
        </div>
        {/* Dark mode */}
      </nav>
    </>
  );
};
export default Navbar;
