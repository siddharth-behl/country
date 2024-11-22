import { useEffect, useState } from "react";

export default function useFilter(data, column) {
  const [filteredData, setFilteredData] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  useEffect(() => {
    setFilteredData(
      data?.filter((country) => {
        column.split(".").forEach((key) => {
          if (country)
            country = Array.isArray(country[key]) ? country[key][0] : country[key];
        });

        return country?.toString().toLowerCase().includes(filterQuery);
      })
    );
  }, [data,filterQuery]);
  return [filteredData, setFilterQuery];
}
