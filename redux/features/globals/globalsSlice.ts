"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  globalData: null,
};

const globalsSlice = createSlice({
  name: "Service slice",
  initialState,
  reducers: {
    setGlobalData: (state, action) => {
      state.globalData = action.payload;
    },
  },
});

export const { setGlobalData } = globalsSlice.actions;

export default globalsSlice.reducer;
