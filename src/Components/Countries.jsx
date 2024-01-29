import { useState, useEffect } from "react";
// const RESTCOUNTRIESAPI = "https://restcountries.com/v3.1/all";
import Article from "./Article";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
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
          {/* form */}
          {/* COUNTRIE */}
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
