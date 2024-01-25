"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  globalData: null,
  categories: [],
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
  },
});

export const { setGlobalData, setCategories } = globalsSlice.actions;

export default globalsSlice.reducer;
