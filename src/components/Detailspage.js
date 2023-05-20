import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountryDetails } from '../redux/covid/covidSlice'
import { useParams } from 'react-router-dom'

const Detailspage = () => {
  const dispatch = useDispatch()
  const param = useParams();
  const countries = useSelector(state => state.covid.countries.filter((country) => country.continent === param.country_name));
  const countryData = useSelector(state => state.covid.countryDetails);

  return (
    <div>
      <ul>
        {countries.map(country => (
          <li key={param.country_name}>{country.continent} {country.cases.toLocaleString()}</li>
        ))}
      </ul>
    </div>
  )
}

export default Detailspage