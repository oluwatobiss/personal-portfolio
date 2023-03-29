import Layout from "./Layout";
import Head from "next/head";
import SelectedProjects from "./SelectedProjects";
import styles from "@/src/styles/Home.module.css";
import { Nunito } from "next/font/google";
import { RiArticleLine } from "react-icons/ri";
import { VscFolderLibrary } from "react-icons/vsc";
import { GiBlackBook } from "react-icons/gi";

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
        <div className={nunito.className}>
          <span>
            <RiArticleLine />
            <h3>Articles</h3>
          </span>
          <span>
            <VscFolderLibrary />
            <h3>Libraries</h3>
          </span>
          <span>
            <GiBlackBook />
            <h3>Books</h3>
          </span>
        </div>
      </section>
    </Layout>
  );
}
