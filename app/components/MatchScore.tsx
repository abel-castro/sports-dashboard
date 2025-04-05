interface MatchScoreProps {
  homeScore: number;
  awayScore: number;
}
import { Box, Typography } from "@mui/material";
import { calculateColor } from "./calculateColor";

export default function MatchScore({ homeScore, awayScore }: MatchScoreProps) {
  return (
    <Box
      component={"span"}
      sx={{
        backgroundColor: "#3c3c3c",
        borderRadius: "5px",
        padding: "4px",
      }}
    >
      <Typography
        component="span"
        sx={{
          ...calculateColor({
            currentTeam: "home",
            homeScore: homeScore,
            awayScore: awayScore,
            backgroundColor: "light",
            winnerBold: true,
          }),
          fontSize: "1.2rem",
        }}
      >
        {homeScore}
      </Typography>
      <Typography component="span" sx={{ color: "white" }}>
        {" "}
        -{" "}
      </Typography>
      <Typography
        component="span"
        sx={{
          ...calculateColor({
            currentTeam: "away",
            homeScore: homeScore,
            awayScore: awayScore,
            backgroundColor: "light",
            winnerBold: true,
          }),
          fontSize: "1.2rem",
        }}
      >
        {awayScore}
      </Typography>
    </Box>
  );
}
