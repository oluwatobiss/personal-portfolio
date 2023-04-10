import uniqid from "uniqid";
import styles from "@/src/styles/Milestones.module.css";
import awardsInfoArray from "../awardsInfoArray";
import personalMilestonesInfoArray from "../personalMilestonesInfoArray";

const allMilestonesInDescOrder = [
  ...awardsInfoArray,
  ...personalMilestonesInfoArray,
].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const milestonesCards = allMilestonesInDescOrder.map((i) => {
  return (
    <section className={styles.milestoneCard} key={uniqid()}>
      <span className={styles.milestoneIcon}>{i.icon}</span>
      <span className={styles.milestoneInfo}>
        <span>{i.date}</span>
        <a href={i.link} target="_blank" rel="noopener">
          {i.title}
        </a>
      </span>
    </section>
  );
});

export default function MilestonesCards() {
  return milestonesCards;
}
