import { createSlice } from "@reduxjs/toolkit";

export const selectedyearSlice = createSlice({
  name: "selectedYear",
  initialState: {},

  reducers: {
    setSelectedyear: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedyear } = selectedyearSlice.actions;

export default selectedyearSlice.reducer;
