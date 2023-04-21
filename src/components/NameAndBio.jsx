import { Typewriter } from "react-simple-typewriter";
import { Nunito } from "next/font/google";
import styles from "@/src/styles/Home.module.css";

const nunito = Nunito({ subsets: ["latin"] });

export default function NameAndBio() {
  return (
    <div className={styles.nameAndBioContainer}>
      <h1>Oluwatobi Sofela</h1>
      <div className={`${nunito.className} ${styles.bio}`}>
        I'm{" "}
        <span className={styles.nonAnimatedBio}>a JavaScript developer</span>
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
  );
}
