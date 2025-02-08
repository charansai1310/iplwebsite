import React, { useState } from "react";
import { 
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, Box 
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Dropdown from "./Dropdown";
import TeamLogo from "./TeamLogo";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[2],
  '& .MuiTable-root': {
    minWidth: 650,
  },
}));

const PointsTable = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const options = ["Season 2024", "Season 2023", "Season 2022"];

  const handleSeasonSelection = (option) => {
    const year = option.split(" ")[1];
    setSelectedYear(year);
  };

  const tableData = [
    {
      team: "Chennai Super Kings",
      matches: 14,
      won: 10,
      lost: 4,
      nrr: "+0.652",
      points: 20,
      logo: "https://scores.iplt20.com/ipl/teamlogos/CSK.png?v=2",
      lastFive: ["W", "W", "L", "W", "W"]
    },
    // ... more teams
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mb: 3 }}>
        <Dropdown
          options={options}
          onSelect={handleSeasonSelection}
          initialState={"Season 2024"}
        />
      </Box>
      
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pos</TableCell>
              <TableCell>Team</TableCell>
              <TableCell align="center">P</TableCell>
              <TableCell align="center">W</TableCell>
              <TableCell align="center">L</TableCell>
              <TableCell align="center">NRR</TableCell>
              <TableCell align="center">Pts</TableCell>
              <TableCell align="center">Last 5</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TeamLogo imageLink={row.logo} variant="circular" />
                    {row.team}
                  </Box>
                </TableCell>
                <TableCell align="center">{row.matches}</TableCell>
                <TableCell align="center">{row.won}</TableCell>
                <TableCell align="center">{row.lost}</TableCell>
                <TableCell align="center">{row.nrr}</TableCell>
                <TableCell align="center">{row.points}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'center' }}>
                    {row.lastFive.map((result, i) => (
                      <Box
                        key={i}
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: result === 'W' ? 'success.main' : 'error.main',
                          color: 'white',
                          fontSize: '0.75rem'
                        }}
                      >
                        {result}
                      </Box>
                    ))}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Box>
  );
};

export default PointsTable;
