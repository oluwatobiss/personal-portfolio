import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Cairo_Play } from "next/font/google";
import styles from "@/src/styles/MobileNavTopbar.module.css";

const cairoPlay = Cairo_Play({ subsets: ["latin"] });

export default function MobileMenuTopbar() {
  return (
    <div className={`${styles.mobileNavTopbar}`}>
      <Link href="/" className={`${styles.navLogo} ${cairoPlay.className}`}>
        Oluwatobi
      </Link>
      <span className={styles.menuIcon}>
        <AiOutlineMenu />
      </span>
    </div>
  );
}
