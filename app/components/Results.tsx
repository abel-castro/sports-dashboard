import { ResultsData } from "../lib/types";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

interface ResultsProps {
  resultsData: ResultsData[];
  slug: string;
}
import { Box, Typography } from "@mui/material";
import { grey, red, teal } from "@mui/material/colors";

export default function Results({ resultsData, slug }: ResultsProps) {
  return (
    <Box key={`${slug}-results-container`} sx={{ display: "table" }}>
      {resultsData.map((result) => (
        <Box sx={{ display: "table-row" }}>
          <Box sx={{ display: "table-cell", width: "40%", textAlign: "right" }}>
            <Typography
              sx={calculateColor("home", result.homeScore, result.awayScore)}
            >
              {result.homeTeam}
            </Typography>
          </Box>

          <Box
            sx={{ display: "table-cell", width: "20%", textAlign: "center" }}
          >
            <Typography
              component="span"
              sx={calculateColor("home", result.homeScore, result.awayScore)}
            >
              {result.homeScore}
            </Typography>
            <Typography component="span"> - </Typography>
            <Typography
              component="span"
              sx={calculateColor("away", result.homeScore, result.awayScore)}
            >
              {result.awayScore}
            </Typography>
          </Box>

          <Box sx={{ display: "table-cell", width: "40%", textAlign: "left" }}>
            <Typography
              sx={calculateColor("away", result.homeScore, result.awayScore)}
            >
              {result.awayTeam}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

const winnerColor = { color: teal[200] };
const loserColor = { color: red[200] };
const drawColor = { color: grey[200] };

export function calculateColor(
  team: "home" | "away",
  homeScore: number,
  awayScore: number
) {
  if (homeScore === awayScore) {
    return drawColor;
  }
  if (team === "home") {
    return homeScore > awayScore ? winnerColor : loserColor;
  } else {
    return awayScore > homeScore ? winnerColor : loserColor;
  }
}
