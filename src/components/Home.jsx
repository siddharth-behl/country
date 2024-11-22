import SearchBar from "./SearchBar.jsx";
import SelectMenu from "./SelectMenu.jsx";
import CountryList from "./CountryList.jsx";
import { useState } from "react";
import ShimmerCard from "./ShimmerCard.jsx";
import useTheme from "../../hooks/useTheme";
import useFilter from "../../hooks/useFilter.jsx";
import { useOutletContext } from "react-router-dom";


export default function Home() {
  const [Countries, setCountries] = useState([]);
  const [none, setNone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilterQuery] = useFilter(Countries, "name.common");
  const [mode] = useTheme();
  
  
  
  return (
    <>
      <div>
        <main className={mode}>
          <div className="search-filter-container">
            <SearchBar setQuery={setFilterQuery} />
            <SelectMenu
              setCountries={setCountries}
              setNone={setNone}
              setLoading={setLoading}
            />
          </div>
          {loading && <ShimmerCard mode={mode} />}
          <CountryList
            Countries={Countries}
            setLoading={setLoading}
            FilteredCountries={filteredData}
            none={none}
            setNone={setNone}
            setCountries={setCountries}
            
         
            
          />
        </main>
      </div>
    </>
  );
}
