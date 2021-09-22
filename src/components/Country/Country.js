import React from "react";

import "./country.css";
const Country = (props) => {
  console.log(props.country);
  // Countries er moddhe full country re pathay dichi tai
  return (
    <div className="country">
      <h3>country name : {props.name}</h3>
      <h4>country capital : {props.capital}</h4>
    </div>
  );
};

export default Country;
