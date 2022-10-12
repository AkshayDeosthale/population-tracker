import { createSlice } from "@reduxjs/toolkit";

export const yearDataSlice = createSlice({
  name: "yearData",
  initialState: [
    {
      year: "2020",
      population: {
        men: 120,
        women: 75,
        children: 35,
      },
    },
    {
      year: "2021",
      population: {
        men: 180,
        women: 85,
        children: 64,
      },
    },
    {
      year: "2022",
      population: {
        men: 220,
        women: 65,
        children: 25,
      },
    },
  ],

  reducers: {
    getPopulationOf2020: (state) => {
      console.log(state.value);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getPopulationOf2020 } = yearDataSlice.actions;

export default yearDataSlice.reducer;
