import uniqid from "uniqid";
import { Nunito } from "next/font/google";
import contactInfoArray from "../contactInfoArray";

const nunito = Nunito({ subsets: ["latin"] });
const contactSpans = contactInfoArray.map((i) => (
  <span key={uniqid()}>
    {i.icon}
    <h3>{i.name}</h3>
  </span>
));

export default function Contact() {
  return <div className={nunito.className}>{contactSpans}</div>;
}
