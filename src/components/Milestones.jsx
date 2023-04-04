import Layout from "./Layout";
import Head from "next/head";
import styles from "@/src/styles/Milestones.module.css";
import MilestoneSections from "./MilestoneSections";

export default function Milestones() {
  return (
    <Layout>
      <Head>
        <title>Milestones - Oluwatobi Sofela</title>
      </Head>
      <h1 className={styles.pageHeading}>Milestones</h1>
      <div className={styles.timeline}>{<MilestoneSections />}</div>
    </Layout>
  );
}
