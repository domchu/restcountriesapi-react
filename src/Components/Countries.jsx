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

  // SEARCH COUNTRIES
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
        setCountries(data.slice(0, 10));
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
          <div>
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
                className="py-2 px-4 text-gray-800 placeholder-gray-800"
              />
            </form>
            {/* FILTER SECTION */}
            <form onSubmit={handleFilterByRegion}>
              <select
                name="filter-by-region"
                id="filter-by-region"
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
