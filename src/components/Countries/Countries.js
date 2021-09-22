import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>Hello From All Countries </h1>
      <h3>Total Countries: {countries.length}</h3>

      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.capital} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
