import React, { useContext } from "react";
import Country from "./Country/Country";
import styles from "./CountriesList.module.css"
import { FilterContext } from "../../../context/FilterContext";
import { ApiContext } from "../../../context/ApiContext";

export default function CountriesList() {

  const {api} = useContext(ApiContext)

  const {filter} = useContext(FilterContext)


  function filterSearch(countries, filter){
    let filteredCountries = countries;

    // Filtrar por región si no es 'all'
    if(filter.region !== 'all'){
      filteredCountries = filteredCountries.filter(country => country.region === filter.region);
    }

    // Filtrar por texto ingresado
    if(filter.text){
      filteredCountries = filteredCountries.filter(country => country.name.common.toLowerCase().includes(filter.text.toLowerCase()));
    }

    return filteredCountries;
}

  console.log(filter)

  let filteredCountries = filterSearch(api,filter)

  return (
    <ul className={styles.countriesList}>
      {filteredCountries.map((country) => (
        <Country
          id={country.cca3}
          flag={country.flags.png}
          countryName={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </ul>
  );
}
