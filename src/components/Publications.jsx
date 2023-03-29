import uniqid from "uniqid";
import { RiArticleLine } from "react-icons/ri";
import { VscFolderLibrary } from "react-icons/vsc";
import { GiBlackBook } from "react-icons/gi";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const publicationsInfoArray = [
  {
    icon: <RiArticleLine />,
    name: "Articles",
  },
  {
    icon: <VscFolderLibrary />,
    name: "Libraries",
  },
  {
    icon: <GiBlackBook />,
    name: "Books",
  },
];

const publicationSpans = publicationsInfoArray.map((i) => (
  <span key={uniqid()}>
    {i.icon}
    <h3>{i.name}</h3>
  </span>
));

export default function Publications() {
  return <div className={nunito.className}>{publicationSpans}</div>;
}
