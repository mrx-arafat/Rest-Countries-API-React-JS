import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Country></Country>
    </div>
  );
}

function Country() {
  const [country, setCountry] = useState([]);

  return (
    <div>
      <h1>All Countries are Here</h1>
    </div>
  );
}

export default App;
