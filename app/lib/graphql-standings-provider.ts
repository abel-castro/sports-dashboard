import { GraphQLClient, gql } from "graphql-request";
import { StandingsData } from "./types";
import { StandingsProvider } from "./standings-provider";

const GRAPHQL_URL =
  process.env.SPORTS_API_GRAPHQL_URL ||
  "https://sports-api.fastapicloud.dev/graphql/";

const STANDINGS_QUERY = gql`
  query Standings {
    standings {
      name
      slug
      logo
      teams {
        name
        points
        position
      }
      results {
        homeTeam
        awayTeam
        homeScore
        awayScore
        matchday
      }
    }
  }
`;

export class GraphQLStandingsProvider implements StandingsProvider {
  private client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient(GRAPHQL_URL);
  }

  async getStandings(): Promise<StandingsData> {
    return this.client.request<StandingsData>(STANDINGS_QUERY);
  }
}
