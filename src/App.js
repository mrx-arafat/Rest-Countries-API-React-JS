import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries() {
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
        <Country name={country.name}></Country>
      ))}
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h2>
        name:
        {props.name}
      </h2>
      <h3>capital:</h3>
    </div>
  );
}

export default App;
