import React, { useEffect, useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    onSearch(search);
  }, [search]);

  return (
    <div>
      <input
        type="search"
        className="imput-field"
        placeholder="Search countries"
        onChange={handleChange}
        value={search}
      />
    </div>
  );
};

export default Search;
