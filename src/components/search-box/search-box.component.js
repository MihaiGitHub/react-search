import React from "react";

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
