import React from "react";
import "./search.css";

function Search(props) {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Поиск по каталогу..."
        />
        <button type="submit" className="searchButton">
          Найти
        </button>
      </div>
    </div>
  );
}

export default Search;
