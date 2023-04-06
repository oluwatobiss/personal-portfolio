import Layout from "./Layout";
import Head from "next/head";
import styles from "@/src/styles/Projects.module.css";
import ProjectCards from "./ProjectCards";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects - Oluwatobi Sofela</title>
      </Head>
      <h1 className={styles.pageHeading}>Projects</h1>
      <div className={styles.timeline}>{<ProjectCards />}</div>
    </Layout>
  );
}
