import uniqid from "uniqid";
import { Nunito } from "next/font/google";
import contactInfoArray from "../contactInfoArray";

const nunito = Nunito({ subsets: ["latin"] });
const contactSpans = contactInfoArray.map((i) => (
  <span>
    <a href={i.link} target="_blank" rel="noopener" key={uniqid()}>
      {i.icon}
      <h3>{i.name}</h3>
    </a>
  </span>
));

export default function Contact() {
  return <div className={nunito.className}>{contactSpans}</div>;
}
