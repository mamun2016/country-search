import React from "react";

const Country = (props) => {
  const { name, capital, flags, population, area } = props.country;

  const handleRemove = (name) => {
    props.onCountryRemove(name);
  };

  return (
    <div className="country">
      <h2>Name: {name.common}</h2>
      <h3>Capital: {capital}</h3>
      <p>Population: {population}</p>
      <p>Area: {area} sqkm</p>
      <p className="flag">
        <img src={flags.png} alt={name.common} />
      </p>
      <button onClick={() => handleRemove(name.common)} className="button">
        Remove
      </button>
    </div>
  );
};

export default Country;
