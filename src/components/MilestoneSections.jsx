import uniqid from "uniqid";
import Image from "next/image";
import styles from "@/src/styles/Milestones.module.css";
import { Inter, Nunito } from "next/font/google";
import educationMilestonesInfoArray from "../educationMilestonesInfoArray";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

const milestoneSections = educationMilestonesInfoArray.map((i) => {
  const endDateString = i.startDate !== i.endDate ? ` - ${i.endDate}` : "";
  return (
    <section className={styles.milestoneSection} key={uniqid()}>
      <div className={styles.milestoneDate}>
        <em>{`${i.startDate}${endDateString}`}</em>
      </div>
      <div className={styles.milestoneIcon}>{i.icon}</div>
      <div className={`${styles.milestoneCategory} ${nunito.className}`}>
        {i.category}
      </div>
      <div className={styles.milestoneInfo}>
        <span className={styles.infoSpan}>
          <h3>{i.name}</h3>
          <p className={nunito.className}>{i.about}</p>
          <span className={styles.techStackSpan}>
            <strong className={inter.className}>Tech Stack: </strong>
            {`${i.stack}`}
          </span>
        </span>
        <span className={styles.imageSpan}>
          <Image src={i.imgSrc} alt={i.imgAlt} placeholder="blur" />
        </span>
      </div>
    </section>
  );
});

export default function MilestoneSections() {
  return milestoneSections;
}
