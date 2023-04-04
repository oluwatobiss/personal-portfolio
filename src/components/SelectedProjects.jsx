import uniqid from "uniqid";
import Image from "next/image";
import educationProjectsInfoArray from "../educationProjectsInfoArray";
import styles from "@/src/styles/Home.module.css";
import { Inter, Nunito } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });
let selectedProjects = [];

for (const project of educationProjectsInfoArray) {
  const namesOfSelectedProjects = ["Transform.", "Find", "YouTube Clone"];
  if (namesOfSelectedProjects.includes(project.name)) {
    selectedProjects.push(project);
  }
}

const selectedProjectDivs = selectedProjects.map((i) => (
  <div key={uniqid()}>
    <span className={styles.infoSpan}>
      <h3>{i.name}</h3>
      <p className={nunito.className}>{i.about}</p>
      <span className={styles.techStackSpan}>
        <strong className={inter.className}>Tech Stack: </strong>
        {i.stack}
      </span>
    </span>
    <span className={styles.imageSpan}>
      <Image src={i.imgSrc} alt={i.imgAlt} placeholder="blur" />
    </span>
  </div>
));

export default function SelectedProjects() {
  return selectedProjectDivs;
}
