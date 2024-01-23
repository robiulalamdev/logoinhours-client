import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeData: null,
};

const homeSlice = createSlice({
  name: "Service slice",
  initialState,
  reducers: {
    setHomeData: (state, action) => {
      state.homeData = action.payload;
    },
  },
});

export const { setHomeData } = homeSlice.actions;

export default homeSlice.reducer;
