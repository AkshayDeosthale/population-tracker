import { configureStore } from "@reduxjs/toolkit";
import yearDataReducer from "../features/yearDataSclice";
import selectedyearReducer from "../features/selectedYearSlice";

export default configureStore({
  reducer: {
    yearData: yearDataReducer,
    selectedYear: selectedyearReducer,
  },
});
