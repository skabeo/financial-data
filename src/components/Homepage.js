import React, { useEffect, useState } from 'react'
import { fetchAllCases, fetchAllCountries, fetchCountryDetails } from '../redux/covid/covidSlice'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const Homepage = () => {
  const dispatch = useDispatch();
  const { covidCases, countries } = useSelector(state => state.covid);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  
  useEffect(() => {
    dispatch(fetchAllCases());
    dispatch(fetchAllCountries());
  }, [])

  useEffect(() => {
    setDisplayedCountries(countries);
  }, [countries]);


  const formattedTotalCases = covidCases.toLocaleString();

  const searchHandler = (e) => {
    const value = e.target.value.toLowerCase();
    const list = countries.filter((country) => country.continent.toLowerCase().includes(value));
    setDisplayedCountries(list);
  };

  return (
    <div>
      Total cases = {formattedTotalCases}
      <input 
        type='text'
        placeholder='Search by continent'
        onChange={searchHandler}
      />
      {displayedCountries.length === 0 && <p>No search result</p>}
      <ul>
        {displayedCountries.map((country) => (
          <li 
            key={country.continent}
          >
            <NavLink
              to={`${country.continent}`}
            >
              {country.continent} {country.cases.toLocaleString()}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Homepage