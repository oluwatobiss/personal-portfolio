import Layout from "./Layout";
import Head from "next/head";
import SelectedProjects from "./SelectedProjects";
import Publications from "./Publications";
import Contact from "./Contact";
import styles from "@/src/styles/Home.module.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Oluwatobi Sofela - A JavaScript Front End Web Developer</title>
      </Head>
      <nav className={nunito.className}>
        <span>Oluwatobi</span>
        <span>
          <span>Milestones</span>
          <span>Press</span>
          <span>Awards</span>
          <span className="theme">th</span>
        </span>
      </nav>
      <section className={styles.introSection}>
        <div>
          <h1>Oluwatobi Sofela</h1>
          <p className={nunito.className}>
            A JavaScript Front End Web Developer
          </p>
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
      <footer className={styles.footer}>
        Copyright © {new Date().getFullYear()} Oluwatobi Sofela • All rights
        reserved.
      </footer>
    </Layout>
  );
}
