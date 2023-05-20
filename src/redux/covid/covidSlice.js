import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  covidCases: 0,
  countries: [],
  countryDetals: [],
  isLoading: false,
  error: '',
}

export const fetchAllCases = createAsyncThunk('fetch/allCases', async () => {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/all');
    return response.data.updated;
  } catch(error) {
    return error
  }
})

export const fetchAllCountries = createAsyncThunk('fetch/allcountries', async () => {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/continents')
    return response.data;
  } catch(error) {
    return error;
  }
})

export const fetchCountryDetails = createAsyncThunk('fetch/countryDetails', async (country) => {
  try {
    const response = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
    const countryData = {
      name: response.data.country,
      cases: response.data.cases,
    }
    return countryData;
  } catch(error) {
    return error;
  }
})

const covidSlice = createSlice({
  name: 'health',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCases.fulfilled, (state, action) => {
      state.covidCases = action.payload;
    })
    builder.addCase(fetchAllCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
    })
    builder.addCase(fetchCountryDetails.fulfilled, (state, action) => {
      state.countryDetals = action.payload;
    })
  }
})

export default covidSlice.reducer;