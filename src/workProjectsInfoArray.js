import { MdWorkOutline } from "react-icons/md";
import codesweetlyWebsitePic from "@/public/projects/work/codesweetly-oluwatobi-sofela.png";
import youTubePlaylistProjPic from "@/public/projects/work/react-youtube-playlist-oluwatobi-sofela.webp";

const workProjectsInfoArray = [
  {
    endDate: new Date().getFullYear(),
    startDate: 2022,
    icon: <MdWorkOutline />,
    category: "Work",
    name: "CodeSweetly",
    about:
      "CodeSweetly is a tech site developers use to learn web technology topics such as HTML, CSS, JavaScript, and ReactJS.",
    stack: "ReactJS, Docusaurus",
    imgSrc: codesweetlyWebsitePic,
    imgAlt: "The CodeSweetly website's screenshot",
  },
  {
    endDate: 2022,
    startDate: 2022,
    icon: <MdWorkOutline />,
    category: "Work",
    name: "React YouTube Playlist",
    about:
      "An easy-to-use and responsive NPM package for displaying YouTube playlists on a web app. Use it to create a beautiful gallery of YouTube videos on your website.",
    stack: "Babel, ReactJS, YouTube API",
    imgSrc: youTubePlaylistProjPic,
    imgAlt: "The React YouTube Playlist project's screenshot",
  },
];

export default workProjectsInfoArray;
