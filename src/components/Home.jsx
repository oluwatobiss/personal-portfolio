import Head from "next/head";
import SelectedProjects from "./SelectedProjects";
import Publications from "./Publications";
import Contact from "./Contact";
import styles from "@/src/styles/Home.module.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Oluwatobi Sofela - A JavaScript Front End Web Developer</title>
      </Head>
      <svg
        style={{ width: 0, height: 0, position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id="instagram-icon-gradient" cx="0.3" cy="0.3">
            <stop offset="0%" stop-color="#fdf497" />
            <stop offset="5%" stop-color="#fdf497" />
            <stop offset="45%" stop-color="#fd5949" />
            <stop offset="60%" stop-color="#d6249f" />
            <stop offset="90%" stop-color="#285aeb" />
          </radialGradient>
        </defs>
      </svg>
      <section className={styles.introSection}>
        <div className={styles.h1AndBioContainer}>
          <h1>Oluwatobi Sofela</h1>
          <div className={`${nunito.className} ${styles.bio}`}>
            A JavaScript Developer
          </div>
        </div>
      </section>
      <section className={`${styles.nonIntroSection} ${styles.projectSection}`}>
        <h2>Selected Projects</h2>
        {<SelectedProjects />}
      </section>
      <section
        className={`${styles.nonIntroSection} ${styles.publicationSection}`}
      >
        <h2>Publications</h2>
        {<Publications />}
      </section>
      <section className={`${styles.nonIntroSection} ${styles.contactSection}`}>
        <h2>Contact</h2>
        {<Contact />}
      </section>
    </>
  );
}
