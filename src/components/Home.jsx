import { Typewriter } from "react-simple-typewriter";
import { Nunito } from "next/font/google";
import Head from "next/head";
import InstagramSvgIconGradient from "./InstagramSvgIconGradient";
import SelectedProjects from "./SelectedProjects";
import Publications from "./Publications";
import Contact from "./Contact";
import styles from "@/src/styles/Home.module.css";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Oluwatobi Sofela - A JavaScript Developer</title>
      </Head>
      <InstagramSvgIconGradient />
      <section className={styles.introSection}>
        <div className={styles.h1AndBioContainer}>
          <h1>Oluwatobi Sofela</h1>
          <div className={`${nunito.className} ${styles.bio}`}>
            I'm{" "}
            <span className={styles.nonAnimatedBio}>
              a JavaScript developer
            </span>
            <span className={styles.animatedBio}>
              <Typewriter
                words={[
                  "a JavaScript developer",
                  "the author of 4 technical books",
                  "the founder of CodeSweetly.com",
                ]}
                loop={0}
                cursor
              />
            </span>
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
