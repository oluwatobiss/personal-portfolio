import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { CiLinkedin } from "react-icons/ci";

const contactInfoArray = [
  {
    icon: <AiOutlineMail />,
    name: "Email",
    link: "mailto:oluwatobiss@codesweetly.com",
  },
  {
    icon: <CiLinkedin />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/oluwatobiss",
  },
  {
    icon: <TfiTwitter />,
    name: "Twitter",
    link: "https://twitter.com/oluwatobiss",
  },
  {
    icon: <AiOutlineInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/codesweetly",
  },
];

export default contactInfoArray;
