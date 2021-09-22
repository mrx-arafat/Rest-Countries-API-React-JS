import React from "react";

import "./country.css";
const Country = (props) => {
  console.log(props.country);
  // Countries er moddhe full country re pathay dichi tai.. arr dob kisu props.country tei ache
  return (
    <div className="country">
      <img src={props.country.flag} alt="" />
      <h3>Country name : {props.name}</h3>
      <h4>Capital : {props.capital}</h4>
      <h4>Population : {props.country.population}</h4>
      {/* population : Countries > Country tag e declar kora nei but kaj hoiteche cz country={country} eksathe sobay re call korche ..er moddhei sob ache */}
    </div>
  );
};

export default Country;
