import uniqid from "uniqid";
import FormatDate from "./Date";
import awardsInfoArray from "../awardsInfoArray";
import personalMilestonesInfoArray from "../personalMilestonesInfoArray";
import Link from "next/link";
import styles from "@/src/styles/Milestones.module.css";

const allMilestonesInDescOrder = [
  ...awardsInfoArray,
  ...personalMilestonesInfoArray,
].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const milestonesCards = allMilestonesInDescOrder.map((i) => {
  return (
    <section
      className={`${styles.milestoneCard} card-container milestone-card`}
      key={uniqid()}
    >
      <div className={styles.milestoneIcon}>{i.icon}</div>
      <div className={styles.milestoneInfo}>
        <span>
          <FormatDate dateString={i.date} />
        </span>
        {i.linkType === "external" ? (
          <a href={i.link} target="_blank" rel="noopener">
            {i.title}{" "}
            <svg
              width="13.5"
              height="13.5"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className={styles.externalLink}
            >
              <path
                fill="currentColor"
                d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
              ></path>
            </svg>
          </a>
        ) : (
          <Link href="/">{i.title}</Link>
        )}
      </div>
    </section>
  );
});

export default function MilestonesCards() {
  return milestonesCards;
}
