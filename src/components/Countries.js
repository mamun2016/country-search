import React from "react";
import { v4 as uuid } from "uuid";
import Country from "./Country";

const Countries = ({ countries, onCountryRemove }) => {
  return (
    <div className="countries">
      {countries.map((country) => {
        const newCountry = { country, id: uuid() };
        return (
          <Country
            onCountryRemove={onCountryRemove}
            {...newCountry}
            key={newCountry.id}
          />
        );
      })}
    </div>
  );
};

export default Countries;
