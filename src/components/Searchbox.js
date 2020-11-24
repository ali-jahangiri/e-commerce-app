import React, { useState } from "react";

const SearchBox = () => {
  const [value, setValue] = useState("");
  return (
    <div className="searchbox">
      <div className="searchbox__container">
        <input
          style={{ borderColor: value && "#c4c4c4" }}
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          placeholder="Search for item ..."
        />
        <i className="fas fa-search"></i>
        <i
          className={`fas fa-long-arrow-alt-right ${
            value ? "arrow--active" : ""
          }`}
        ></i>
      </div>
    </div>
  );
};

export default SearchBox;
