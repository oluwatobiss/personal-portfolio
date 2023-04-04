import Layout from "./Layout";
import Head from "next/head";
import uniqid from "uniqid";
import Image from "next/image";
import styles from "@/src/styles/Milestones.module.css";
import { Inter, Nunito } from "next/font/google";
import transformProjPic from "@/public/transform-oluwatobi-sofela.png";
import { MdOutlineSchool } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export default function Milestones() {
  return (
    <Layout>
      <Head>
        <title>Milestones - Oluwatobi Sofela</title>
      </Head>
      <h1 className={styles.pageHeading}>Milestones</h1>
      <div className={styles.timeline}>
        <section className={styles.milestoneSection} key={uniqid()}>
          <div className={styles.milestoneDate}>
            <em>2021</em>
          </div>
          <div className={styles.milestoneIcon}>{<MdOutlineSchool />}</div>
          <div className={`${styles.milestoneCategory} ${nunito.className}`}>
            Education
          </div>
          <div className={styles.milestoneInfo}>
            <span className={styles.infoSpan}>
              <h3>Transform.</h3>
              <p className={nunito.className}>
                Transform is a shopping cart website where users browse for
                glamorous items to spark up their style. You can use it to
                transform your clothing, jewelry, and electronic collections.
              </p>
              <span className={styles.techStackSpan}>
                <strong className={inter.className}>Tech Stack: </strong>
                ReactJS, React Router
              </span>
            </span>
            <span className={styles.imageSpan}>
              <Image src={transformProjPic} alt="test" placeholder="blur" />
            </span>
          </div>
        </section>
        <section className={styles.milestoneSection} key={uniqid()}>
          <div className={styles.milestoneDate}>
            <em>2021</em>
          </div>
          <div className={styles.milestoneIcon}>{<MdOutlineSchool />}</div>
          <div className={`${styles.milestoneCategory} ${nunito.className}`}>
            Education
          </div>
          <div className={styles.milestoneInfo}>
            <span className={styles.infoSpan}>
              <h3>Transform.</h3>
              <p className={nunito.className}>
                Transform is a shopping cart website where users browse for
                glamorous items to spark up their style. You can use it to
                transform your clothing, jewelry, and electronic collections.
              </p>
              <span className={styles.techStackSpan}>
                <strong className={inter.className}>Tech Stack: </strong>
                ReactJS, React Router
              </span>
            </span>
            <span className={styles.imageSpan}>
              <Image src={transformProjPic} alt="test" placeholder="blur" />
            </span>
          </div>
        </section>
      </div>
    </Layout>
  );
}
