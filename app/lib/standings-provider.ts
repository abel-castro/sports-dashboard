import { StandingsData } from "./types";

export interface StandingsProvider {
  getStandings(): Promise<StandingsData>;
}
