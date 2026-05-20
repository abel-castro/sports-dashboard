import { RestStandingsProvider } from "./rest-standings-provider";

const provider = new RestStandingsProvider();

export async function getStandings() {
  return provider.getStandings();
}
