import { React, useContext, useEffect, useState } from "react";

import CountryCard from "./CountryCard";
import { LoadingContext } from "../../contexts/LoadingBar.jsx";

import useSort from "../../hooks/useSort.jsx";
import ShimmerCard from "./ShimmerCard.jsx";

export default function CountryList({
  FilteredCountries,
  setCountries,
  none,
  setNone,
  setLoading,
}) {
  const setProgress = useContext(LoadingContext)[1];
  const [noData, setNoData] = useState(true);
  function allCountries() {
    let n = 1;
    return function recall() {
      if (n == 3) {
        setLoading(false);
        setProgress(100);
        return;
      }
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
        })
        .catch((err) => {
          n++;
          recall();
        });
    };
  }
  useEffect(() => {
    setTimeout(() => {
      setNoData(false);
    }, 100);
  }, [FilteredCountries]);

  useEffect(() => {
    if (localStorage.getItem("allDatea")) {
      setCountries(JSON.parse(localStorage.getItem("allData")));
      setTimeout(() => {
        setProgress(100);
        setLoading(false);
      });
    } else {
      setLoading(true);
      setProgress(0);
      allCountries()();
    }
    return () => {
      setLoading(true);
      setNone(false);
    };
  }, [none]);

  return (
    <>
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
        ) : noData ? (
          <ShimmerCard />
        ) : (
          <h1>No data Found</h1>
        )}
      </div>
    </>
  );
}
