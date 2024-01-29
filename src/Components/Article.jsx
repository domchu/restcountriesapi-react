import React from "react";

const Article = ({ flags, name, population, region, subregion, capital }) => {
  return (
    <>
      <section>
        <img src={flags.svg} alt={flags.svg} />
        <h2>Country: {name.common}</h2>
        <h3>Capital:{capital}</h3>
        <ul>
          <li>Population:{population}</li>
          <li>Region:{region}</li>
          <li>Subregion:{subregion}</li>
        </ul>
      </section>
    </>
  );
};
export default Article;
