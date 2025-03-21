"use client";

import { useState } from "react";
import { LeageTableData } from "../lib/types";
import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface LeagueTableProps {
  leagueData: LeageTableData;
}

export default function LeagueTable({ leagueData }: LeagueTableProps) {
  const [toggleAllRows, setToggleAllRows] = useState(false);

  const displayedTeams = toggleAllRows
    ? leagueData.teams
    : leagueData.teams.slice(0, 4);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="Standing">
        <TableHead>
          <TableRow>
            <TableCell>Pos</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody onClick={() => setToggleAllRows((prev) => !prev)}>
          {displayedTeams.map((team) => (
            <TableRow
              key={`${leagueData.slug}-${team.position}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {team.position}
              </TableCell>
              <TableCell>{team.name}</TableCell>
              <TableCell>{team.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
