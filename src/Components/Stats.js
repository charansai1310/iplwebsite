import React from "react";
import Dropdown from "./Dropdown";
import "../styles/Stats.css";
import CapTable from "./CapTable";

const Stats = () => {
  // const [selectedSeason, setSelectedSeason] = useState("2024");
  // const [selectedType, setSelectedType] = useState("Orange Cap");

  const seasonOptions = ["Season 2024", "Season 2023", "Season 2022"];
  const typeOptions = ["Orange Cap", "Purple Cap"];

  // const handleSeasonSelection = (option) => {
  //   const year = option.split(" ")[1];
  //   setSelectedSeason(year);
  // };

  // const handleTypeSelection = (option) => {
  //   setSelectedType(option);
  // };

  return (
    <div className="stats-container">
      <div className="dropdowns-wrapper">
        <div className="dropdown-row">
          <div className="dropdown-item">
            <Dropdown
              options={seasonOptions}
              // onSelect={handleSeasonSelection}
              initialState={"Season 2024"}
            />
          </div>
          <div className="dropdown-item">
            <Dropdown
              options={typeOptions}
              // onSelect={handleTypeSelection}
              initialState={"Orange Cap"}
            />
          </div>
        </div>
      </div>

      <div className="table-section">
        <CapTable
          // type={selectedType === "Orange Cap" ? "orange" : "purple"}
          data={[]}
        />
      </div>
    </div>
  );
};

export default Stats;
