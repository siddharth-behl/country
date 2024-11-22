import { useContext } from "react";
import { LoadingContext } from "../../contexts/LoadingBar.jsx";

export default function SelectMenu({ setCountries, setNone, setLoading }) {
  const setProgress = useContext(LoadingContext)[1];
  const handleChange = (e) => {
    setLoading(true);
    if (e.target.value == "filter") {
      setProgress(100);
      setNone(true);
    } else {
      fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
        .then((res) => {
          setProgress(30);
          return res.json();
        })
        .then((data) => {
          setCountries(data);
          setProgress(100);
          setLoading(false);
        });
    }
  };
  return (
    <select className="filter-by-region" onChange={handleChange}>
      <option hidden>Filter by Region</option>
      <option value="filter">All</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
