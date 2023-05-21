import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./covid/covidSlice";

const store = configureStore({
  reducer: {
    covid: covidReducer,
  }
});

export default store;