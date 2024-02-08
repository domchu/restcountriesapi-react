import { useState, useEffect } from "react";
const RESTCOUNTRIESAPI = "https://restcountries.com/v3.1/all";
import Article from "./Article";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState([]);

  const regions = [
    {
      name: "Europe",
    },
    {
      name: "Africa",
    },
    {
      name: "Asia",
    },
    {
      name: "Americas",
    },
    {
      name: "Oceania",
    },
    {
      name: "antarctic",
    },
  ];

  // SEARCH INPUT FOR THE COUNTRIES
  const searchCountry = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
    } catch {
      console.error(error);
    }
  };

  const handleSearchCountry = (e) => {
    e.preventDefault();
    searchCountry();
  };

  // FILTER BY REGION
  const filterByRegion = async (region) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountries(data);
    } catch {
      console.error(error);
    }
  };

  const handleFilterByRegion = (e) => {
    e.preventDefault();
    filterByRegion();
  };

  // GETTING ALL THE COUNTRIES AND MAP TO THE DOM
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch(RESTCOUNTRIESAPI);
        const data = await res.json();
        setCountries(data);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
  }, []);

  return (
    <>
      {/* {countries.length} */}
      {!countries ? (
        <h1 className="flex justify-center items-center text-center h-screen text-gray-800 text-3xl tracking-wide font-bold dark:text-white">
          Loading...
        </h1>
      ) : (
        <section className="container mx-auto p-8">
          {/* FORM AT THE TOPNAV*/}
          {/*  */}
          <h1>Where is the world!</h1>
          <div>
            <h2>Dark Mode</h2>
          </div>
          {/* Dark mode */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8 lg:justify-between">
            <form
              onSubmit={handleSearchCountry}
              autocomplete="off"
              className="max-w-4xl md:flex-1"
            >
              <input
                type="text"
                name="search"
                id="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search for a country by its name"
                required
                className="py-3 px-4 text-gray-600 placeholder-gray-600 w-full shadow rounded outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700 transition-all durstion-200"
              />
            </form>
            {/* FILTER SECTION */}
            <form onSubmit={handleFilterByRegion}>
              <select
                name="filter-by-region"
                id="filter-by-region"
                className="w-52 py-3 outline-none shadow rounded text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700"
                value={regions.name}
                onChange={(e) => filterByRegion(e.target.value)}
              >
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          {/* COUNTRIES IN DOM */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {countries.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Countries;

// if (!res.ok) {
//   throw new Error("Failed to fetch country data");
// }

// console.error("Error fetching country data:", error.message);
