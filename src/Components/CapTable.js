import React from "react";
import PropTypes from "prop-types";
import "../styles/CapTables.css";

const CapTable = ({ type, data = [] }) => {
  const columns = type === 'orange' 
    ? [
        { key: 'pos', label: 'POS' },
        { key: 'name', label: 'Player', className: 'player-column' },
        { key: 'team', label: 'Team', className: 'hide-sm' },
        { key: 'matches', label: 'Matches', className: 'hide-md' },
        { key: 'runs', label: 'Runs' },
        { key: 'hs', label: 'HS', className: 'hide-sm' },
        { key: 'avg', label: 'Avg', className: 'hide-lg' },
        { key: 'sr', label: 'SR', className: 'hide-lg' },
        { key: 'fours', label: '4s', className: 'hide-md' },
        { key: 'sixes', label: '6s', className: 'hide-md' }
      ]
    : [
        { key: 'pos', label: 'POS' },
        { key: 'name', label: 'Player', className: 'player-column' },
        { key: 'team', label: 'Team', className: 'hide-sm' },
        { key: 'matches', label: 'Matches', className: 'hide-md' },
        { key: 'wickets', label: 'Wickets' },
        { key: 'overs', label: 'Overs', className: 'hide-sm' },
        { key: 'avg', label: 'Avg', className: 'hide-lg' },
        { key: 'econ', label: 'Econ', className: 'hide-lg' },
        { key: 'sr', label: 'SR', className: 'hide-md' },
        { key: 'bbi', label: 'BBI', className: 'hide-md' }
      ];

  return (
    <div className={`cap-table-container ${type}`}>
      <div className="table-wrapper">
        <table className="cap-table">
          <thead>
            <tr>
              {columns.map(({ key, label, className }) => (
                <th key={key} className={className}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((player, index) => (
              <tr key={index}>
                {columns.map(({ key, className }) => (
                  <td key={key} className={className}>
                    {key === 'pos' ? index + 1 : player[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

CapTable.propTypes = {
  type: PropTypes.oneOf(['orange', 'purple']).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CapTable; 