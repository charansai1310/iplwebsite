import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[1],
  "& .MuiTableCell-head": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 600,
  },
  "& .MuiTableRow-root:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StatsTable = ({ type = "batting", data = [] }) => {
  const columns =
    type === "batting"
      ? ["Year", "MAT", "NO", "RUNS", "HS", "AVG", "SR", "100", "50"]
      : ["Year", "MAT", "BALLS", "RUNS", "WKTS", "AVG", "ECO", "4W", "5W"];

  return (
    <Box>
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                {Object.values(row).map((value, i) => (
                  <TableCell key={i}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Box>
  );
};

StatsTable.propTypes = {
  type: PropTypes.oneOf(["batting", "bowling"]),
  data: PropTypes.arrayOf(PropTypes.object),
};

export default StatsTable;
