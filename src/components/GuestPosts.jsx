import Layout from "./Layout";
import Head from "next/head";
import styles from "@/src/styles/GuestPosts.module.css";

export default function GuestPosts() {
  return (
    <Layout>
      <Head>
        <title>GuestPosts - Oluwatobi Sofela</title>
      </Head>
      <h1 className={styles.pageHeading}>Guest Posts</h1>
    </Layout>
  );
}
