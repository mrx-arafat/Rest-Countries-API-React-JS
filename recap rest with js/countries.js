const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
//displayCountry->countries parameter e sob data pathai dilam

const displayCountries = (countries) => {
  //for test
  console.log(countries[0]);

  //countries er upore map kortechi jate prottekta element ke alada kore dhorte pari
  // countryHTML kintu ekta array return korbe
  const countryHTML = countries.map((country) => getCountryHTML(country));
  //innerHTML  e data set kortechi
  const containerDiv = document.getElementById("container");
  // ekta dekhabar jonno simple but sobgula dekhate gele array element gula join kora lagbe
  console.log(countryHTML[0]);
  console.log(countryHTML.join(" "));
  //containerDiv.innerHTML = countryHTML[0];
  containerDiv.innerHTML = countryHTML.join(" ");
};

//country array destructure kore pathano hobe
const getCountryHTML = (country) => {
  return `
  <div> 
  
  <h2>hello ${country.name.common} </h2>
  <h2>capital ${country.capital} </h2>
  </div>
  `;
};

loadCountries();
