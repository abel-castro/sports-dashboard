import { StandingsData, LeageTableData } from "./types";
import { StandingsProvider } from "./standings-provider";

const API_BASE_URL = process.env.SPORTS_API_URL || "https://sports-api.fastapicloud.dev";

export class RestStandingsProvider implements StandingsProvider {
  async getStandings(): Promise<StandingsData> {
    const response = await fetch(`${API_BASE_URL}/api/sports/standings/`, {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch standings: ${response.status} ${response.statusText}`);
    }

    const standings: LeageTableData[] = await response.json();
    return { standings };
  }
}
