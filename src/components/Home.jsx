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
