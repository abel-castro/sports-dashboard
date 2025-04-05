import { grey, red, teal } from "@mui/material/colors";

const winnerColor = { color: teal[200] };
const loserColor = { color: red[200] };
const drawColorLight = { color: grey[200] };
const drawColorDark = { color: "white" };

type CalculateColor = {
  currentTeam: "home" | "away";
  homeScore: number;
  awayScore: number;
  backgroundColor: "dark" | "light";
  winnerBold?: boolean;
};

export function calculateColor({
  currentTeam,
  homeScore,
  awayScore,
  backgroundColor,
  winnerBold,
}: CalculateColor) {
  const homeWin = homeScore > awayScore;
  const awayWin = awayScore > homeScore;
  const isDraw = homeScore === awayScore;

  if (isDraw && backgroundColor === "dark") {
    return drawColorLight;
  } else if (isDraw && backgroundColor === "light") {
    return drawColorDark;
  } else if (
    (homeWin && currentTeam === "home") ||
    (awayWin && currentTeam === "away")
  ) {
    if (winnerBold) {
      return { ...winnerColor, fontWeight: "bold" };
    } else {
      return winnerColor;
    }
  } else if (
    (awayWin && currentTeam === "home") ||
    (homeWin && currentTeam === "away")
  ) {
    return loserColor;
  }
}
