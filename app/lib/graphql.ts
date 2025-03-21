import { GraphQLClient, gql } from "graphql-request";
import { ResultsData, StandingsData } from "./types";

const GRAPHQL_URL = "https://core.abelcastro.dev/graphql/";

const graphQLClient = new GraphQLClient(GRAPHQL_URL, {
  headers: {
    // If you need to add authorization or other headers, do it here.
    // Authorization: 'Bearer YOUR_API_TOKEN',
  },
});

const STANDINGS_QUERY = gql`
  query Standings {
    standings {
      name
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

/**
 * Function to fetch standings data.
 */
export async function getStandings(): Promise<StandingsData> {
  try {
    const data = (await graphQLClient.request(
      STANDINGS_QUERY
    )) as StandingsData;
    return data;
  } catch (error) {
    console.error("Error fetching standings:", error);
    throw error;
  }
}
