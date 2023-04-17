import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Cairo_Play } from "next/font/google";
import styles from "@/src/styles/MobileNavTopbar.module.css";

const cairoPlay = Cairo_Play({ subsets: ["latin"] });

export default function MobileMenuTopbar() {
  function handleMenuIconClick(e) {
    const mobileSidebar =
      e.currentTarget.parentElement.parentElement.querySelector("aside");
    mobileSidebar.classList.toggle("hide-mobile-sidebar");
  }

  return (
    <div className={`${styles.mobileNavTopbar} mobile-nav-topbar`}>
      <Link href="/" className={`${styles.navLogo} ${cairoPlay.className}`}>
        Oluwatobi
      </Link>
      <span
        className={`${styles.menuIcon} mobile-menu-icon`}
        onClick={handleMenuIconClick}
      >
        <AiOutlineMenu />
      </span>
    </div>
  );
}
