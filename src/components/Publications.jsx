import uniqid from "uniqid";
import { Nunito } from "next/font/google";
import publicationsInfoArray from "../publicationsInfoArray";

const nunito = Nunito({ subsets: ["latin"] });
const publicationSpans = publicationsInfoArray.map((i) => (
  <span key={uniqid()}>
    {i.icon}
    <h3>{i.name}</h3>
  </span>
));

export default function Publications() {
  return <div className={nunito.className}>{publicationSpans}</div>;
}
