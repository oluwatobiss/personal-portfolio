import { GiBookshelf } from "react-icons/gi";
import { MdRocketLaunch, MdSchool } from "react-icons/md";
import { RiArticleFill, RiNpmjsFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";

const personalMilestonesInfoArray = [
  {
    icon: <CgWebsite />,
    date: "2023-04-22",
    title: "Published my first personal portfolio site",
    link: "/",
    linkType: "internal",
  },
  {
    icon: <RiNpmjsFill />,
    date: "2022-12-15",
    title: "Published my first NPM package - React YouTube Playlist",
    link: "https://www.npmjs.com/package/@codesweetly/react-youtube-playlist",
    linkType: "external",
  },
  {
    icon: <GiBookshelf />,
    date: "2021-11-03",
    title: "Published my first book - React Explained Clearly",
    link: "https://amzn.to/3n5pMHt",
    linkType: "external",
  },
  {
    icon: <RiArticleFill />,
    date: "2020-06-01",
    title: "Published my first article - HTML vs CSS vs JavaScript",
    link: "https://codesweetly.com/html-css-javascript",
    linkType: "external",
  },
  {
    icon: <MdSchool />,
    date: "2019-12-31",
    title: "Completed Colt Steel's Udemy bootcamp",
    link: "https://www.udemy.com/user/coltsteele/",
    linkType: "external",
  },
  {
    icon: <MdRocketLaunch />,
    date: "2019-02-21",
    title:
      "Started my web development adventure with Colt Steel's Udemy bootcamp",
    link: "https://www.udemy.com/user/coltsteele/",
    linkType: "external",
  },
];

export default personalMilestonesInfoArray;
