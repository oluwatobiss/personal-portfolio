import uniqid from "uniqid";
import Image from "next/image";
import styles from "@/src/styles/Projects.module.css";
import { Nunito } from "next/font/google";
import educationProjectsInfoArray from "../educationProjectsInfoArray";
import workProjectsInfoArray from "../workProjectsInfoArray";

const nunito = Nunito({ subsets: ["latin"] });

const allProjectsInDescOrder = [
  ...workProjectsInfoArray,
  ...educationProjectsInfoArray,
].sort((a, b) => b.endDate - a.endDate);

const projectCards = allProjectsInDescOrder.map((i) => {
  const endDateString = i.startDate !== i.endDate ? ` - ${i.endDate}` : "";
  return (
    <section className={styles.projectCard} key={uniqid()}>
      <div className={styles.projectDate}>
        <em>{`${i.startDate}${endDateString}`}</em>
      </div>
      <div className={styles.projectIcon}>{i.icon}</div>
      <div
        className={`${nunito.className} ${styles.projectCategory} ${
          styles[`${i.category}ProjectCategory`]
        }`}
      >
        {i.category}
      </div>
      <div className={`${styles.projectInfo} card-container`}>
        <span className={styles.infoSpan}>
          <a href={i.link} target="_blank" rel="noopener">
            <h3>{i.name}</h3>
            <p className={nunito.className}>{i.about}</p>
          </a>
          <span className={styles.techStack}>
            <strong>{`${i.stackType || ""}`} Stack: </strong>
            {`${i.stack}`}
          </span>
        </span>
        <span className={`${styles.imageContainer} proj-img-container`}>
          <a href={i.link} target="_blank" rel="noopener">
            <Image src={i.imgSrc} alt={i.imgAlt} placeholder="blur" />
          </a>
        </span>
      </div>
    </section>
  );
});

export default function ProjectCards() {
  return projectCards;
}
