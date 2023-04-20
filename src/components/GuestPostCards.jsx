import uniqid from "uniqid";
import Image from "next/image";
import { Inter, Nunito } from "next/font/google";
import styles from "@/src/styles/GuestPosts.module.css";
import educativeAnswersPostsInfoArray from "../educativeAnswersPostsInfoArray";
import freeCodeCampPostsInfoArray from "../freeCodeCampPostsInfoArray";
import hackernoonPostsInfoArray from "../hackernoonPostsInfoArray";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

const allGuestPostsInDescOrder = [
  ...freeCodeCampPostsInfoArray,
  ...educativeAnswersPostsInfoArray,
  ...hackernoonPostsInfoArray,
].sort((a, b) => Date.parse(b.publishedDate) - Date.parse(a.publishedDate));

const guestPostCards = allGuestPostsInDescOrder.map((i) => {
  return (
    <div
      className={`${styles.guestPostCard} card-container guest-post-card`}
      key={uniqid()}
    >
      <section className={`${styles.imageContainer} guest-post-img-container`}>
        <a href={i.link} target="_blank" rel="noopener">
          <Image src={i.imgSrc} alt={i.imgAlt} placeholder="blur" />
        </a>
      </section>
      <section className={`${styles.textSection} ${nunito.className}`}>
        <span
          className={`${styles.postHost} ${
            styles[`${i.host.replace(/\s/g, "")}Tag`]
          }`}
        >
          {i.host}
        </span>
        <a href={i.link} target="_blank" rel="noopener">
          <h3 className={inter.className}>{i.title}</h3>
          <p>{i.about}</p>
        </a>
        <div className={`${styles.publishedDate} published-date`}>
          {i.publishedDate}
        </div>
      </section>
    </div>
  );
});

export default function GuestPostCards() {
  return guestPostCards;
}
