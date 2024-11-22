import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({
  countryName,
  population,
  region,
  capital,
  flagpng,
  data,
}) {
  return (
    <>
     
        <Link className="country-card" to={`/${countryName}`} state={data}>
          <img
            src={flagpng}
            alt={` ${countryName} flag`}
            style={{ position: "sticky", top: "0%" }}
          />
          <div className="card-text">
            <h2 className="card-title" style={{textAlign:"center", transform:"translateX(-9px)"}}><b>{countryName}</b></h2>
            <p>
              <b>Population: </b>
              {population.toLocaleString("en-IN")}
            </p>
            <p>
              <b>Region: </b>
              {region}
            </p>
            <p>
              <b>Capital: </b>
              {!capital ? "captial Not Found" : capital}
            </p>
          </div>
        </Link>
      
    </>
  );
}
