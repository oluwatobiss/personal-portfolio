import Layout from "./Layout";
import Head from "next/head";
import MilestonesCards from "./MilestonesCards";
import styles from "@/src/styles/Milestones.module.css";

export default function Milestones() {
  return (
    <Layout>
      <Head>
        <title>Milestones - Oluwatobi Sofela</title>
      </Head>
      <h1 className={styles.pageHeading}>Milestones</h1>
      <div className={styles.milestonesContainer}>{<MilestonesCards />}</div>
    </Layout>
  );
}
