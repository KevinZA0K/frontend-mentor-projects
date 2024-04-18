import React, { useContext, useEffect, useState } from "react";
import Country from "./Country/Country";
import styles from "./CountriesList.module.css"
import { FilterContext } from "../../../context/FilterContext";

export default function CountriesList() {

  const [countries, setCountries] = useState([]);
  const {filter,setFilter} = useContext(FilterContext)


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((json) => setCountries(json));
    {
      console.log(countries);
    }
  }, []);

  // function filterSearch(countries,filter){
  //   if(filter.region === 'all' || filter.text === ""){
  //     console.log("all seleccionado")
  //     return countries
  //   }
    
  //   return countries.filter(country=>{
  //     return (country.region === filter.region || country.name.common === filter.text)
  //   }
  //   )
  // }

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

  let filteredCountries = filterSearch(countries,filter)

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
