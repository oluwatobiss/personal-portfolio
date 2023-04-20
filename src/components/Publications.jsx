import uniqid from "uniqid";
import { Nunito } from "next/font/google";
import publicationsInfoArray from "../publicationsInfoArray";

const nunito = Nunito({ subsets: ["latin"] });
const publicationCards = publicationsInfoArray.map((i) => (
  <a href={i.link} target="_blank" rel="noopener" key={uniqid()}>
    <span>
      {i.icon}
      <h3>{i.name}</h3>
    </span>
  </a>
));

export default function Publications() {
  return <div className={nunito.className}>{publicationCards}</div>;
}
