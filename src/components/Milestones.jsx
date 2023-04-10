import Layout from "./Layout";
import Head from "next/head";
import styles from "@/src/styles/Milestones.module.css";
import { GiDiamondTrophy } from "react-icons/gi";

export default function Milestones() {
  return (
    <Layout>
      <Head>
        <title>Milestones - Oluwatobi Sofela</title>
      </Head>
      <h1 className={styles.pageHeading}>Milestones</h1>
      <div className={styles.milestonesContainer}>
        <section className={styles.milestoneCard}>
          <span className={styles.milestoneIcon}>
            <GiDiamondTrophy />
          </span>
          <span className={styles.milestoneInfo}>
            <span className={styles.date}>2022-12-02</span>
            <a
              href="https://www.freecodecamp.org/news/freecodecamp-2022-top-contributors/#:~:text=Keyur%20Paralkar-,Oluwatobi%20Sofela,-Eamonn%20Cottrell"
              target="_blank"
              rel="noopener"
              className={styles.title}
            >
              2022 Top Contributors Award - freeCodeCamp
            </a>
          </span>
        </section>
      </div>
    </Layout>
  );
}
