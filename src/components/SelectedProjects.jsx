import uniqid from "uniqid";
import Image from "next/image";
import transformProjPic from "@/public/transform-oluwatobi-sofela.png";
import findProjPic from "@/public/find-oluwatobi-sofela.png";
import youtubeProjPic from "@/public/youtube-clone-oluwatobi-sofela.png";
import styles from "@/src/styles/Home.module.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const selectedProjectsInfo = [
  {
    name: "Transform.",
    stack: "ReactJS, React Router",
    about:
      "Transform is a shopping cart website where users browse for glamorous items to spark up their style. You can use it to transform your clothing, jewelry, and electronic collections.",
    imgSrc: transformProjPic,
    imgAlt: "Transform shopping cart project's screenshot",
  },
  {
    name: "Find",
    stack: "Firebase, Jest, ReactJS, Testing Library",
    about:
      "Find is a search-and-find game where a player searches an image for some items (e.g., Waldo, Cat, Apple, etc.). You finish the game by finding all the specified elements.",
    imgSrc: findProjPic,
    imgAlt: "Find project's screenshot",
  },
  {
    name: "YouTube Clone",
    stack: "Firebase, Jest, ReactJS, Testing Library",
    about:
      "YouTube Clone is a replication of the YouTube website. This replica implements most of the live website's functionality, like authentication, search, history, and shorts. So, you can use it to watch your favorite videos just as you would with the actual website.",
    imgSrc: youtubeProjPic,
    imgAlt: "Youtube project's screenshot",
  },
];

const selectedProjectDivs = selectedProjectsInfo.map((i) => (
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
