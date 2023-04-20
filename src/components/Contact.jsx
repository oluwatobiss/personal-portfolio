import uniqid from "uniqid";
import { Nunito } from "next/font/google";
import contactInfoArray from "../contactInfoArray";

const nunito = Nunito({ subsets: ["latin"] });
const contactCards = contactInfoArray.map((i) => (
  <a href={i.link} target="_blank" rel="noopener" key={uniqid()}>
    {i.icon}
    <h3>{i.name}</h3>
  </a>
));

export default function Contact() {
  return <div className={nunito.className}>{contactCards}</div>;
}
