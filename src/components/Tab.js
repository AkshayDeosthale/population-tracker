import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedyear } from "../features/selectedYearSlice";

const Tab = ({ year, population }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.selectedyear);

  return (
    <button
      style={{
        marginRight: "20px",
        padding: "20px",
        width: "170px",
      }}
      onClick={() => dispatch(setSelectedyear(population))}
    >
      {year}
    </button>
  );
};

export default Tab;
