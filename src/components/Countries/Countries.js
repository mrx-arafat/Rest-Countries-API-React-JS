import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>All Countries are Here</h1>
      <h3>Total Countries: {countries.length}</h3>

      {countries.map((country) => (
        <Country
          country={country}
          // name={country.name}
          // capital={country.capital}
        ></Country>
      ))}
    </div>
  );
};

export default Countries;
