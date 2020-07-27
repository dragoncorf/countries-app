import React from "react";

const SearchBar = ({
  search,
  onSearchChange,
  onSearch,
  code,
  onCodeChange,
}) => {
  return (
    <div className="searchBar">
      <select
        className="searchBar"
        value={code}
        onChange={(e) => onCodeChange(e.target.value)}
      >
        <option value="">All</option>
        <option value="AF">Africa</option>
        <option value="AN">Antartica</option>
        <option value="AS">Asia</option>
        <option value="NA">North America</option>
        <option value="OC">Oceania</option>
        <option value="SA">South America</option>
      </select>
      <input
        className="searchBar"
        type="text"
        name="Search"
        placeholder="Name of the country..."
        value={search}
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            onSearch();
          }
        }}
      />
      <button className="searchBar" id="myInput" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
