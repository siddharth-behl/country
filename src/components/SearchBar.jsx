import React from "react";

export default function SearchBar({ setQuery }) {
  function handleChange(e) {
    setQuery(e.target.value.toLowerCase());
  }
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search for a country..."
      />
    </div>
  );
}
