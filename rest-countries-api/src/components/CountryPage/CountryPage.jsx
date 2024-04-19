import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/ApiContext";
import { useParams, useNavigate} from "react-router-dom";
import styles from "./CountryPage.module.css";

export default function CountryPage() {
  const { api } = useContext(ApiContext);
  const { countryId } = useParams();
  const [singleCountry, setSingleCountry] = useState(null);
  const nav = useNavigate()

  useEffect(() => {
    const foundCountry = api.find((country) => country.cca3 === countryId);
    setSingleCountry(foundCountry);
  }, [api, countryId]);

  let languageString = singleCountry
    ? CountryLanguages(singleCountry)
    : "Loading...";

  if (singleCountry === null || singleCountry === undefined) {
    return <span>Loading...</span>;
  }

  function CountryLanguages({ languages }) {
    const languageValues = Object.values(languages);
    const languageString = languageValues.join(", ");
    return <p>{languageString}</p>;
  }


  return (
    <>
      <button className={styles.backButton} onClick={()=>nav("/")}>Back</button>
      <section className={styles.countryDetails}>
        
        <img src={singleCountry ? singleCountry.flags.png : "Loading"} />
        <div className={styles.detailsTable}>
          <div>
            
            <p>
                
              <strong>Population:</strong>
              {singleCountry ? singleCountry.population : "Loading"}
            </p>
            <p>
              <strong>Region:</strong>
              {singleCountry ? singleCountry.region : "Loading"}
            </p>
            <p>
              <strong>Sub Region:</strong>
              {singleCountry ? singleCountry.subregion : "Loading"}
            </p>
            <p>
              <strong>Capital:</strong>
              {singleCountry ? singleCountry.capital : "Loading"}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain:</strong>
              {singleCountry ? singleCountry.population : "Loading"}
            </p>
            <p>
              <strong>Currencies:</strong>
              {singleCountry ? singleCountry.tld[0] : "Loading"}
            </p>
            <p>
              <strong>Languages:</strong>
              {singleCountry ? languageString : "Loading"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
