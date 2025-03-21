export type TeamData = {
  position: number;
  name: string;
  points: number;
};

export type LeageTableData = {
  name: string;
  slug: string;
  logo: string;
  teams: TeamData[];
  results: ResultsData[];
};

export type StandingsData = {
  standings: LeageTableData[];
};

export type ResultsData = {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  matchday: number;
};
