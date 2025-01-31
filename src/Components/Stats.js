import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./Stats.css";
import OrangeCapTable from "./OrangeCapTable";
import PurpleCapTable from "./PurpleCapTable";

const Stats = () => {
  const [selectedYear, setSelectedYear] = useState(2010);
  const year_options = ["Season 2010", "Season 2009", "Season 2008"];
  const handleSeasonSelection = (options) => {
    const year = options.split(" ")[1];
    setSelectedYear(year);
  };
  const [selectedCap, setSelectedCap] = useState("Orange Cap");
  const cap_options = ["Orange Cap", "Purple Cap"];
  const handleCapSelection = (options) => {
    const cap = options;
    setSelectedCap(cap);
  };
  return (
    <div>
      <div className="dropdown-season-div">
        <Dropdown
          options={year_options}
          onSelect={handleSeasonSelection}
          initialState={"Season 2024"}
        />
      </div>
      <div className="dropdown-cap-div">
        <Dropdown
          options={cap_options}
          onSelect={handleCapSelection}
          initialState={"Orange Cap"}
        />
      </div>
      <div>
        {selectedCap === "Orange Cap" ? <OrangeCapTable /> : <PurpleCapTable />}
      </div>
    </div>
  );
};

export default Stats;
