import React from "react";
// not only present in this file because all css gets bundled into one file when served
import "./search-box.styles.css";

const SearchBox = ({ setSearchfield, placeholder, className }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={(event) => {
        const searchField = event.target.value.toLocaleLowerCase();

        setSearchfield(searchField);
      }}
    />
  );
};

export default SearchBox;
