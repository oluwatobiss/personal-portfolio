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
    <div className={styles.guestPostCard} key={uniqid()}>
      <section className={styles.imageSection}>
        <a href={i.link} target="_blank">
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
        <a href={i.link} target="_blank">
          <h2 className={inter.className}>{i.title}</h2>
          <p>{i.about}</p>
        </a>
        <div className={styles.publishedDate}>{i.publishedDate}</div>
      </section>
    </div>
  );
});

export default function GuestPostCards() {
  return guestPostCards;
}
