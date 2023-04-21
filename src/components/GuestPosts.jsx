import Head from "next/head";
import GuestPostCards from "./GuestPostCards";
import styles from "@/src/styles/GuestPosts.module.css";

export default function GuestPosts() {
  return (
    <>
      <Head>
        <title>GuestPosts - Oluwatobi Sofela</title>
      </Head>
      <h1 className={styles.pageHeading}>Guest Posts</h1>
      <div className={styles.guestPosts}>
        <GuestPostCards />
      </div>
    </>
  );
}
