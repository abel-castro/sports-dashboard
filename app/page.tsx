import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Image from "next/image";
import styles from "./page.module.css";
import { getStandings } from "./lib/graphql";

import LeagueCard from "./components/LeagueCard";
import { Box } from "@mui/material";

export default async function Home() {
  const standingsData = await getStandings();
  const standings = standingsData.standings;

  return (
    <div className={styles.page}>
      <main
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "1800px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", paddingBottom: "40px" }}>
          <h1>Football Dahsboard</h1>
          <p>
            Football results and standings of the most important European
            leagues{" "}
          </p>
        </div>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            // todo fix responsiveness
            gridTemplateColumns: {
              sm: "repeat(2, minmax(400px, 1fr))",
              md: "repeat(3, minmax(400px, 1fr))",
            },
          }}
        >
          {standings.map((league, index) => (
            <LeagueCard
              league={league}
              key={`league-card-${league.slug}-${index}`}
            />
          ))}
        </Box>
        <div
          style={{ textAlign: "center", marginTop: "20px", padding: "20px" }}
        >
          <p>
            Abel Castro 2025 - checkout the source code of this page on{" "}
            <a
              href="https://github.com/abel-castro/sports-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold" }}
            >
              GitHub
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
