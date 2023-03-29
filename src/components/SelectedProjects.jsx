import uniqid from "uniqid";
import Image from "next/image";
import selectedProjectsInfoArray from "../selectedProjectsInfoArray";
import styles from "@/src/styles/Home.module.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const selectedProjectDivs = selectedProjectsInfoArray.map((i) => (
  <div key={uniqid()}>
    <span className={styles.infoSpan}>
      <h3>{i.name}</h3>
      <small>{i.stack}</small>
      <p className={nunito.className}>{i.about}</p>
    </span>
    <span className={styles.imageSpan}>
      <Image src={i.imgSrc} alt={i.imgAlt} placeholder="blur" />
    </span>
  </div>
));

function SelectedProjects() {
  return selectedProjectDivs;
}

export default SelectedProjects;
