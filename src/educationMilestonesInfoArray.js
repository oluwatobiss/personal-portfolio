import { MdOutlineSchool } from "react-icons/md";
import transformProjPic from "@/public/transform-oluwatobi-sofela.png";
import findProjPic from "@/public/find-oluwatobi-sofela.png";
import youtubeProjPic from "@/public/youtube-clone-oluwatobi-sofela.png";

const educationMilestonesArray = [
  {
    endDate: 2022,
    startDate: 2022,
    icon: <MdOutlineSchool />,
    category: "Education",
    name: "YouTube Clone",
    about:
      "YouTube Clone is a replication of the YouTube website. This replica implements most of the live website's functionality, like authentication, search, history, and shorts. So, you can use it to watch your favorite videos just as you would with the actual website.",
    stack: "Firebase, Jest, ReactJS, Testing Library",
    imgSrc: youtubeProjPic,
    imgAlt: "Youtube project's screenshot",
  },
  {
    endDate: 2022,
    startDate: 2022,
    icon: <MdOutlineSchool />,
    category: "Education",
    name: "Find",
    about:
      "Find is a search-and-find game where a player searches an image for some items (e.g., Waldo, Cat, Apple, etc.). You finish the game by finding all the specified elements.",
    stack: "Firebase, Jest, ReactJS, Testing Library",
    imgSrc: findProjPic,
    imgAlt: "Find project's screenshot",
  },
  {
    endDate: 2021,
    startDate: 2021,
    icon: <MdOutlineSchool />,
    category: "Education",
    name: "Transform.",
    about:
      "Transform is a shopping cart website where users browse for glamorous items to spark up their style. You can use it to transform your clothing, jewelry, and electronic collections.",
    stack: "ReactJS, React Router",
    imgSrc: transformProjPic,
    imgAlt: "Transform shopping cart project's screenshot",
  },
];

export default educationMilestonesArray;
