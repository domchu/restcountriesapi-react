import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Article from "./Article";
import { Link } from "react-router-dom";

const SingleCountry = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleCountry();
  }, [name]);
  return (
    <>
      <section className="p-8 md:py-0">
        {country.map((item) => {
          return (
            <article
              key={item.population}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center h-screen"
            >
              <img src={item.flags.svg} alt={item.name.common} />
              <article>
                <h2 className="font-bold text-gray-900 tex-3xl lg:text-5xl">
                  {item.name.official}
                </h2>
                <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400">
                  <li>Capital: {item.capital}</li>
                  <li>Population: {item.population.toLocaleString()}</li>
                  <li>Region: {item.region} </li>
                  <li>Subregion: {item.subregion} </li>
                </ul>
                {/* BORDERS TO A COUNTRY */}
                {item.borders && (
                  <>
                    <h2 className="text-gray-900 font-bold text-lg mb-2 dark:text-white">
                      BORDERS
                    </h2>
                    <ul className="flex flex-wrap items-start justify-start gap-2">
                      {item.borders.map((border, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-white p-2 rounded text-xs tracking-wide shadow dark:bg-gray-800 dark:text-gray-400 text-gray-700"
                          >
                            {border}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
                <Link
                  to="/"
                  className="font-bold tracking-wide inline-block mt-8 bg-white py-2 px-6 rounded shadow-xs text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  &larr;Back
                </Link>
              </article>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default SingleCountry;
