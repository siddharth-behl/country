import { React, useContext, useEffect } from "react";

import CountryCard from "./CountryCard";
import { LoadingContext } from "../../contexts/LoadingBar.jsx";

import useSort from "../../hooks/useSort.jsx";
export default function CountryList({
  FilteredCountries,
  setCountries,
  none,
  setNone,
  setLoading,
}) {
  const setProgress = useContext(LoadingContext)[1];
  useEffect(() => {
    if (sessionStorage.getItem("allData")) {
      setCountries(JSON.parse(sessionStorage.getItem("allData")));
      setTimeout(() => {
        setProgress(100);
        setLoading(false);
      });
    } else {
      setLoading(true);
      setProgress(0);
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => {
          setProgress(30);
          return res.json();
        })
        .then((data) => {
          setProgress(70);
          setCountries(data);
          setLoading(false);
          sessionStorage.setItem("allData", JSON.stringify(data));
          setProgress(100);
        });
    }
    return () => {
      setLoading(true);
      setNone(false);
    };
  }, [none]);

  return (
    <div className="countries-container">
      {FilteredCountries.length > 0 ? (
        useSort(FilteredCountries)?.map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              countryName={country.name.common}
              flagpng={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
              data={country}
            />
          );
        })
      ) : (
        <h1>No data Found</h1>
      )}
    </div>
  );
}
