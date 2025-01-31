import React, { useState } from "react";
import Dropdown from "./Dropdown";
import PointsTableDiv from "./PointsTableDiv";
const PointsTable = () => {
  const [selectedYear, setSelectedYear] = useState(2010);
  const options = ["Season 2010", "Season 2009", "Season 2008"];
  const handleSeasonSelection = (options) => {
    const year = options.split(" ")[1];
    setSelectedYear(year);
  };
  return (
    <div>
      <div className="dropdown-pointstable-div">
        <Dropdown
          options={options}
          onSelect={handleSeasonSelection}
          initialState={"Season 2024"}
        />
      </div>
      <PointsTableDiv />
    </div>
  );
};

export default PointsTable;
