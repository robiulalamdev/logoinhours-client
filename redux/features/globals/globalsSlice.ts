"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  globalData: null,
  categories: [],
  reviews: [],
};

const globalsSlice = createSlice({
  name: "Service slice",
  initialState,
  reducers: {
    setGlobalData: (state, action) => {
      state.globalData = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const { setGlobalData, setCategories, setReviews } =
  globalsSlice.actions;

export default globalsSlice.reducer;
