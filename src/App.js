import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Search from "./components/Search";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchCountries = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchCountries(url);
  }, []);

  const countryRemove = (name) => {
    const removedCountries = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(removedCountries);
  };

  const handleSearch = (searchVal) => {
    const lowerVal = searchVal.toLowerCase();
    const newCountryName = countries.filter((country) => {
      const name = country.name.common.toLowerCase();

      return name.startsWith(lowerVal);
    });
    setFilteredCountries(newCountryName);
  };

  return (
    <div className="App">
      <h1>
        Country details
        <Search onSearch={handleSearch} />
      </h1>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {countries && (
        <Countries
          onCountryRemove={countryRemove}
          countries={filteredCountries}
        />
      )}
    </div>
  );
}

export default App;
