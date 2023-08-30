let allCountries;
let allPromises;

const fetchCountries = () => {
  return fetch("https://restcountries.com/v3.1/all").then((response) =>
    response.json()
  );
};

const setUp = () => {
  return fetchCountries()
    .then((data) => {
      allCountries = data;
    })
    .then(() => {
      const countriesList = document.querySelector("#countriesList");
      allCountries.forEach((country) => {
        const countryLi = document.createElement("li");
        const countryName = document.createElement("p");
        const countryPopulation = document.createElement("p");
        const countryCapital = document.createElement("p");

        countryName.textContent = "Country: " + country.name.common;
        countryPopulation.textContent = "Population: " + country.population;
        countryCapital.textContent = "Capital: " + country.capital;

        countryLi.appendChild(countryName);
        countryLi.appendChild(countryPopulation);
        countryLi.appendChild(countryCapital);
        countriesList.appendChild(countryLi);
      });
    });
};

const form = document.querySelector("form");

const input = document.querySelector("#text-input");

const countries = document.querySelector("#countriesList");

const filterCountries = (filter) => {
  //   return setUp().then(() => {

  const country = allCountries.filter((country) => {
    if (country.name.common.toLowerCase() === filter.toLowerCase()) {
      console.log(country);
      return country;
    }
  });

  console.log(country);
  countries.innerHTML = "";
  const countryLi = document.createElement("li");
  const countryName = document.createElement("p");
  const countryPopulation = document.createElement("p");
  const countryCapital = document.createElement("p");

  countryName.textContent = "Country: " + country[0].name.common;
  countryPopulation.textContent = "Population: " + country[0].population;
  countryCapital.textContent = "Capital: " + country[0].capital;

  countryLi.appendChild(countryName);
  countryLi.appendChild(countryPopulation);
  countryLi.appendChild(countryCapital);
  countriesList.appendChild(countryLi);
};

const submit = document.querySelector("#submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  filterCountries(input.value);
  console.log(filterCountries(input.value));
});

setUp();
