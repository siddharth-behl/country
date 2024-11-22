import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../../css/country.css";
import ShimmerData from "./ShimmerData.jsx";
import BackButton from "./BackButton.jsx";

import { LoadingContext } from "../../contexts/LoadingBar.jsx";
import useTheme from "../../hooks/useTheme";
export default function CountryDetail() {
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const countryName = useParams().country;
  const [mode] = useTheme();
  const countryDataFromHomePage = useLocation().state;
  const setProgress = useContext(LoadingContext)[1];
  useEffect(() => {
    if (countryDataFromHomePage) {
      if (!countryDataFromHomePage.borders) {
        countryDataFromHomePage.borders = [];
      }
      setCountryData(countryDataFromHomePage);
      setProgress(10);

      let arr = countryDataFromHomePage.borders?.map((borders) =>
        fetch(`https://restcountries.com/v3.1/alpha/${borders}`)
          .then((res) => {
            if (!res.ok) {
              return Promise.reject("Invalid");
            }
            return res.json();
          })
          .then(([mydata]) => mydata.name?.common)
          .catch(() => null)
      );

      Promise.all(arr)
        .then((data) => {
          setProgress(73);
          setCountryData((prevState) => ({
            ...prevState,
            borders: data.filter((elem) => elem !== null),
          }));
          setLoadingData(false);
          setProgress(100);
        })
        .catch((err) => {
          console.log(err);
          setProgress(100)
          setNotFound(true);
        });
    } else {
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then((res) => {
          
          setProgress(10);
          if (!res.ok) {
            throw new Error("Country not found");
          }
          return res.json();
        })
        .then(([data]) => {
          if(!data.borders){
            data.borders=[]
          }
          setCountryData(data);
          setProgress(30);
          let arr = data.borders?.map((borders) =>
            fetch(`https://restcountries.com/v3.1/alpha/${borders}`)
              .then((res) => {
                if (!res.ok) {
                  return Promise.reject("Invalid");
                }
                return res.json();
              })
              .then(([mydata]) => mydata.name?.common)
              .catch(() => null)
          );

          Promise.all(arr).then((data) => {
            setProgress(75);
            setCountryData((prevState) => ({
              ...prevState,
              borders: data.filter((elem) => elem !== null),
            }));
            setProgress(100);
            setLoadingData(false);
          });
        })
        .catch((err) => {
          console.log(err);
          setNotFound(true);
          setProgress(100)
        });
    }

    return () => {
      setLoadingData(true);
    };
  }, [countryDataFromHomePage, countryName]);

  if (notFound) {
    return <div>This Country Doesn't Exist</div>;
  }

  return (
    <>
      {loadingData ? (
        <ShimmerData mode={mode} />
      ) : (
        <main className={mode}>
          <div className="country-details-container">
            <BackButton />
            <div className="country-details">
              <img src={countryData.flags?.svg} alt="" style={{borderRadius:"20px"}}/>
              <div className="details-text-container">
                <h1>{!countryData.name?"Name Not Found":countryData.name.common}</h1>
                <div className="details-text">
                  <p>
                    <b>Native Name: </b>
                    <span className="native-name">
                      {!countryData.name?"Official Name Not Found":countryData.name.official}
                    </span>
                  </p>
                  <p>
                    <b>Population: </b>
                    <span className="population">
                      {!countryData.population?"Population Not Found":countryData.population.toLocaleString("en-IN")}
                    </span>
                  </p>
                  <p>
                    <b>Region: </b>
                    <span className="region">{countryData?countryData.region:"Region Not Found"}</span>
                  </p>
                  <p>
                    <b>Maps: </b>
                    <Link
                      target="_blank"
                      style={{ color: "blue" }}
                      to={countryData?.maps?.googleMaps}
                    >
                      Click here to open Map
                    </Link>
                  </p>
                  <p>
                    <b>Capital: </b>
                    <span className="capital">
                      {!countryData.capital?"Capital Not Found":countryData.capital.join(" , ")}
                    </span>
                  </p>
                  <p>
                    <b>Top Level Domain: </b>
                    <span className="top-level-domain">
                      {countryData.tld?.[0]}
                    </span>
                  </p>
                  <p>
                    <b>Currencies: </b>
                    <span className="currencies">
                      {countryData?.currencies
                        ? Object.values(countryData.currencies)[0].name +
                          " (  " +
                          Object.values(countryData.currencies)[0].symbol +
                          "   )"
                        : "No Currencies Found"}
                    </span>
                  </p>
                  <p>
                    <b>Languages: </b>
                    <span className="languages">
                      {countryData?.languages
                        ? Object.values(countryData.languages)[0]
                        : "No Languages Found"}
                    </span>
                  </p>
                  {countryData.borders?.length !== 0 ? (
                    <div className="border-countries">
                      <b>Border Countries: </b>&nbsp;
                      {countryData.borders?.map((elem, index) => (
                        <Link key={index} to={`/${elem}`}>
                          {elem}
                        </Link>
                      ))}
                    </div>
                  ):<><p><b>Border Countries: </b>No Country Borders Available</p></>}
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
