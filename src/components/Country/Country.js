import React from "react";

import "./country.css";
const Country = (props) => {
  // destructuring

  const { name, flag, capital, region, population, alpha2Code } = props.country;
  console.log(props.country);

  return (
    <div className="country">
      <img src={flag} alt="" />
      <h2 className="country-name">{name}</h2>
      <h3>Capital : {capital}</h3>
      <p>
        <small>Region:{region}</small>
      </p>
      <h4>Population : {population}</h4>
      <h4>Currency : </h4>
      <h4>Alpha Code : {alpha2Code}</h4>
      {/* population : Countries > Country tag e declar kora nei but kaj hoiteche cz country={country} eksathe sobay re call korche ..er moddhei sob ache */}
    </div>
  );
};

export default Country;
