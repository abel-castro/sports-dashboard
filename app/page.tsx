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
          {standings.map((league) => (
            <LeagueCard league={league} key={league.slug} />
          ))}
        </Box>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
