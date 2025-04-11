"use client";

import { LeageTableData } from "../lib/types";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import LeagueTable from "./LeagueTable";
import { useState } from "react";
import Results from "./Results";

interface LeagueCardProps {
  league: LeageTableData;
}
export default function LeagueCard({ league }: LeagueCardProps) {
  const [toggleAllRows, setToggleAllRows] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 450,
        backgroundColor: "grey.900",
        color: "white",
      }}
      key={`${league.slug}-card`}
    >
      <CardHeader
        sx={{ paddingBottom: 0 }}
        title={
          <Box display="flex" alignItems="center" justifyContent="center">
            <Avatar
              src={league.logo}
              alt={`Logo ${league.logo}`}
              sx={{ mr: 1 }}
            />
            <Typography variant="h6" align="center">
              {league.name}
            </Typography>
          </Box>
        }
      />
      <CardContent>
        <Results
          resultsData={league.results}
          slug={league.slug}
          key={`${league.slug}-results`}
        />

        <Divider sx={{ my: 1 }} />

        <LeagueTable
          key={`${league.slug}-standings`}
          leagueData={league}
          toggleAllRows={toggleAllRows}
        />
      </CardContent>
      <CardActions>
        <Button
          key={`${league.slug}-toggle`}
          size="small"
          onClick={() => setToggleAllRows((prev) => !prev)}
        >
          {toggleAllRows ? "Hide full table" : "Show full table"}
        </Button>
      </CardActions>
    </Card>
  );
}
