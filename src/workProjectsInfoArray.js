import { MdWorkOutline } from "react-icons/md";
import codesweetlyWebsitePic from "@/public/projects/work/codesweetly-homepage.png";
import codesweetlySketchbookPic from "@/public/projects/work/codesweetly-sketchbook.webp";
import cssFlexboxBookProjPic from "@/public/projects/work/css-flexbox.webp";
import cssGridBookProjPic from "@/public/projects/work/css-grid-guidebook.webp";
import imageGridGalleryProjPic from "@/public/projects/work/react-image-grid-gallery.webp";
import reactBookProjPic from "@/public/projects/work/react-explained-clearly.webp";
import visualCSSGridBookProjPic from "@/public/projects/work/visual-css-grid.webp";
import visualFlexboxBookProjPic from "@/public/projects/work/visual-flexbox.webp";
import youTubePlaylistProjPic from "@/public/projects/work/react-youtube-playlist.webp";

const workProjectsInfoArray = [
  {
    endDate: 2023,
    startDate: 2023,
    icon: <MdWorkOutline />,
    category: "Work",
    name: "React Image Grid Gallery",
    about:
      "A simple, easy-to-use, and responsive image gallery component for displaying a grid of images in React apps.",
    stackType: "Tech",
    stack: "Babel, ReactJS, TypeScript",
    imgSrc: imageGridGalleryProjPic,
    imgAlt: "The React Image Grid Gallery project's screenshot",
    link: "https://www.npmjs.com/package/react-image-grid-gallery",
  },
  {
    endDate: 2023,
    startDate: 2023,
    icon: <MdWorkOutline />,
    category: "Work",
    name: "CodeSweetly Sketchbook",
    about:
      "Every top-notch design begins with a sketch. The CodeSweetly Sketchbook is an ideal sketch/note-taking pad for app developers and programmers.",
    stackType: "Press",
    stack: "Affinity Suite",
    imgSrc: codesweetlySketchbookPic,
    imgAlt: "The CodeSweetly sketchbook's image",
    link: "https://amzn.to/459dQWO",
  },
  {
    endDate: 2023,
    startDate: 2023,
    icon: <MdWorkOutline />,
    category: "Work",
    name: "Visual CSS Grid",
    about:
      "A book filled with beautiful CSS Grid images. Use it as your complete image guide to the CSS Grid layout module.",
    stackType: "Press",
    stack: "Microsoft Word, Affinity Suite, Kindle Create",
    imgSrc: visualCSSGridBookProjPic,
    imgAlt: "The Visual CSS Grid book's image",
    link: "https://amzn.to/4216eU6",
  },
  {
    endDate: 2023,
    startDate: 2023,
    icon: <MdWorkOutline />,
    category: "Work",
    name: "The CSS Grid Guidebook",
    about:
      "The CSS Grid Guidebook uses beautiful images and live examples to discuss everything you need to know to use CSS Grid like a pro.",
    stackType: "Press",
    stack: "Microsoft Word, Affinity Suite, Kindle Create",
    imgSrc: cssGridBookProjPic,
    imgAlt: "The CSS Grid Guidebook's image",
    link: "https://amzn.to/3yQzRdW",
  },
  {
    endDate: 2022,
    startDate: 2022,
    icon: <MdWorkOutline />,
    category: "Work",
    name: "React YouTube Playlist",
    about:
      "An easy-to-use and responsive NPM package for displaying YouTube playlists on a web app. Use it to create a beautiful gallery of YouTube videos on your website.",
    stackType: "Tech",
    stack: "Babel, ReactJS, YouTube API",
    imgSrc: youTubePlaylistProjPic,
    imgAlt: "The React YouTube Playlist project's screenshot",
    link: "https://www.npmjs.com/package/@codesweetly/react-youtube-playlist",
  },
  {
    endDate: 2022,
    startDate: 2022,
    icon: <MdWorkOutline />,
    category: "Work",
    name: "CSS Flexbox",
    about:
      "The CSS Flexbox book uses beautiful images and live examples to discuss everything you need to know to use Flexbox like a pro.",
    stackType: "Press",
    stack: "Microsoft Word, Affinity Suite",
    imgSrc: cssFlexboxBookProjPic,
    imgAlt: "CSS Flexbox book's image",
    link: "https://amzn.to/3mStkwr",
  },
  {
    endDate: 2022,
    startDate: 2022,
    icon: <MdWorkOutline />,
    category: "Work",
    name: "Visual Flexbox",
    about:
      "A book filled with beautiful CSS Flexbox images. Use it to learn CSS Flexbox quickly in your time.",
    stackType: "Press",
    stack: "Affinity Suite",
    imgSrc: visualFlexboxBookProjPic,
    imgAlt: "Visual Flexbox book's image",
    link: "https://amzn.to/3YVRljz",
  },
  {
    endDate: 2021,
    startDate: 2021,
    icon: <MdWorkOutline />,
    category: "Work",
    name: "React Explained Clearly",
    about:
      "The React Explained Clearly book uses scalable projects to explain essential React.js concepts that will set you on a sound footing to become a proficient React developer.",
    stackType: "Press",
    stack: "Microsoft Word, Affinity Suite",
    imgSrc: reactBookProjPic,
    imgAlt: "The React Explained Clearly book's image",
    link: "https://amzn.to/3n5pMHt",
  },
  {
    endDate: new Date().getFullYear(),
    startDate: 2020,
    icon: <MdWorkOutline />,
    category: "Work",
    name: "CodeSweetly",
    about:
      "CodeSweetly is a tech site developers use to learn web technology topics such as HTML, CSS, JavaScript, and ReactJS.",
    stackType: "Tech",
    stack: "ReactJS, Docusaurus",
    imgSrc: codesweetlyWebsitePic,
    imgAlt: "The CodeSweetly website's screenshot",
    link: "https://codesweetly.com/",
  },
];

export default workProjectsInfoArray;
