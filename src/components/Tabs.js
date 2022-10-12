import React from "react";
import { useSelector } from "react-redux";
import Tab from "./Tab";

const Tabs = () => {
  const count = useSelector((state) => state.yearData);
  return (
    <div className="TabsContainer">
      {count.map((year, key) => (
        <Tab year={year.year} key={key} population={year} />
      ))}
    </div>
  );
};

export default Tabs;
