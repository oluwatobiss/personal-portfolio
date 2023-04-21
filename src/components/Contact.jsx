import { Nunito } from "next/font/google";
import uniqid from "uniqid";
import contactInfoArray from "../contactInfoArray";
import styles from "@/src/styles/Home.module.css";

const nunito = Nunito({ subsets: ["latin"] });
const contactCards = contactInfoArray.map((i) => (
  <a href={i.link} target="_blank" rel="noopener" key={uniqid()}>
    <span className={`${styles[`${i.name}Icon`]}`}>{i.icon}</span>
    <h3>{i.name}</h3>
  </a>
));

export default function Contact() {
  return <div className={nunito.className}>{contactCards}</div>;
}
