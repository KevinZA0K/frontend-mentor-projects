import React from "react";
import styles from "../CountriesList.module.css"
import {useNavigate} from "react-router-dom"
export default function Country({
  id,
  flag,
  countryName,
  population,
  region,
  capital,
}) {

    const nav = useNavigate()

  return (
    <li key={id} onClick={() => nav(`/${id}`)}>
      <img src={flag} />
      <div className={styles.countryText}>
        <h1>{countryName}</h1>
        <p>
          <strong>Population:</strong>
          {population}
        </p>
        <p>
          <strong>Region:</strong>
          {region}
        </p>
        <p>
          <strong>Capital:</strong>
          {capital}
        </p>
      </div>
    </li>
  );
}
