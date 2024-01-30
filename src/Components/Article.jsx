import React from "react";
import { Link } from "react-router-dom";

const Article = ({ flags, name, population, region, subregion, capital }) => {
  return (
    <>
      <Link to={`/${name.common}`}>
        <section className="bg-white rounded-lg shadow overflow-hidden dark:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200">
          <img
            src={flags.svg}
            alt={flags.svg}
            className="h-72 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="font-bond text-lg text-gray-900 mb-2">
              Country: {name.common}
            </h2>
            <h3 className="font-bond text-lg text-gray-900 mb-2">
              Capital: {capital}
            </h3>
            <ul className="flex flex-col items-start justify-start gap-2">
              <li>Population: {population.toLocaleString()}</li>
              <li>Region: {region}</li>
              <li>Subregion: {subregion}</li>
            </ul>
          </div>
        </section>
      </Link>
    </>
  );
};
export default Article;
