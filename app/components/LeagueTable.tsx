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
  toggleAllRows: boolean;
}

export default function LeagueTable({
  leagueData,
  toggleAllRows,
}: LeagueTableProps) {
  const displayedTeams = toggleAllRows
    ? leagueData.teams
    : leagueData.teams.slice(0, 4);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 400, maxWidth: 450, backgroundColor: "#1e1e1e" }}
        size="small"
        aria-label="Standings"
      >
        <TableHead
          sx={{
            backgroundColor: "#2c2c2c",
          }}
        >
          <TableRow>
            <TableCell
              sx={{
                color: "#fff",
                borderColor: "#3c3c3c",
                width: "10%",
              }}
            >
              Pos
            </TableCell>
            <TableCell
              sx={{
                color: "#fff",
                borderColor: "#3c3c3c",
                width: "80%",
                textAlign: "center",
              }}
            >
              Team
            </TableCell>
            <TableCell
              sx={{
                color: "#fff",
                borderColor: "#3c3c3c",
                width: "10%",
              }}
            >
              Points
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedTeams.map((team) => (
            <TableRow key={`${leagueData.slug}-${team.position}`}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  color: "#fff",
                  borderColor: "#3c3c3c",
                  textAlign: "center",
                }}
              >
                {team.position}
              </TableCell>
              <TableCell
                sx={{
                  color: "#fff",
                  borderColor: "#3c3c3c",
                  textAlign: "center",
                }}
              >
                {team.name}
              </TableCell>
              <TableCell
                sx={{
                  color: "#fff",
                  borderColor: "#3c3c3c",
                  textAlign: "center",
                }}
              >
                {team.points}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
