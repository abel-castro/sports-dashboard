import { ResultsData } from "../lib/types";

interface ResultsProps {
  resultsData: ResultsData[];
  slug: string;
}
import { Box, Typography } from "@mui/material";
import { calculateColor } from "./calculateColor";
import MatchScore from "./MatchScore";

export default function Results({ resultsData, slug }: ResultsProps) {
  return (
    <Box
      key={`${slug}-results-container`}
      sx={{
        display: "table",
        borderSpacing: "0.5rem",
        width: "100%",
        textAlign: "center",
      }}
    >
      {resultsData.map((result) => (
        <Box sx={{ display: "table-row" }}>
          <Box sx={{ display: "table-cell", width: "40%", textAlign: "right" }}>
            <Typography
              sx={calculateColor({
                currentTeam: "home",
                homeScore: result.homeScore,
                awayScore: result.awayScore,
                backgroundColor: "dark",
              })}
            >
              {result.homeTeam}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "table-cell",
              width: "20%",
              textAlign: "center",
            }}
          >
            <MatchScore
              homeScore={result.homeScore}
              awayScore={result.awayScore}
            />
          </Box>

          <Box sx={{ display: "table-cell", width: "40%", textAlign: "left" }}>
            <Typography
              sx={calculateColor({
                currentTeam: "away",
                homeScore: result.homeScore,
                awayScore: result.awayScore,
                backgroundColor: "dark",
              })}
            >
              {result.awayTeam}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
