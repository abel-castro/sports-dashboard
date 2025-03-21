import { describe, expect, it } from "vitest";
import { calculateColor } from "../Results";
import { teal, red, grey } from "@mui/material/colors";

describe("calculateColor", () => {
  const winnerColor = { color: teal[200] };
  const loserColor = { color: red[200] };
  const drawColor = { color: grey[200] };

  it("should return drawColor when scores are equal", () => {
    expect(calculateColor("home", 1, 1)).toEqual(drawColor);
    expect(calculateColor("away", 2, 2)).toEqual(drawColor);
  });

  it("should return winnerColor for home team when homeScore is greater", () => {
    expect(calculateColor("home", 3, 1)).toEqual(winnerColor);
  });

  it("should return loserColor for away team when homeScore is greater", () => {
    expect(calculateColor("away", 3, 1)).toEqual(loserColor);
  });

  it("should return winnerColor for away team when awayScore is greater", () => {
    expect(calculateColor("away", 1, 3)).toEqual(winnerColor);
  });

  it("should return loserColor for home team when awayScore is greater", () => {
    expect(calculateColor("home", 1, 3)).toEqual(loserColor);
  });
});
