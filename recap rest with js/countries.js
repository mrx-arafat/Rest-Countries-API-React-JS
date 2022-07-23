const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  console.log(countries[0]);

  const countryHTML = countries.map((country) => getCountryHTML(country));

  console.log(countryHTML[0]);
};

const getCountryHTML = (country) => {
  return `
  <div> 
  
  <h2>hello ${country.name.common} </h2>
  <h2>hello ${country.capital} </h2>
  </div>
  `;
};

loadCountries();
