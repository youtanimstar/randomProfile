import React from "react";
import Style from "../css/search.module.css";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
      <div className={Style.searchWrapper}>
        <div className={Style.iconSection}>.Logo</div>
        <div className={Style.searchSection}>
          <button className={Style.searchButton}>New</button>
          <button className={Style.searchButton}>Search</button>

          <input type="text" placeholder="Search" />
        </div>
      </div>
    </>
  );
};

export default Search;
