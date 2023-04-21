import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Cairo_Play } from "next/font/google";
import Link from "next/link";
import styles from "@/src/styles/MobileNavTopbar.module.css";

const cairoPlay = Cairo_Play({ subsets: ["latin"] });

export default function MobileMenuTopbar({ iconToDisplay, setIcon }) {
  function handleLogoClick(e) {
    const mobileSidebar =
      e.currentTarget.parentElement.parentElement.querySelector("aside");

    if (![...mobileSidebar.classList].includes("hide-mobile-sidebar")) {
      const mobileMenuIcon =
        e.currentTarget.parentElement.querySelector(".mobile-menu-icon");

      mobileSidebar.classList.add("hide-mobile-sidebar");
      mobileMenuIcon.classList.add("show-menu-icon");
      setIcon(<AiOutlineMenu />);
    }
  }

  function handleMenuIconClick(e) {
    const mobileSidebar =
      e.currentTarget.parentElement.parentElement.querySelector("aside");
    mobileSidebar.classList.toggle("hide-mobile-sidebar");

    if ([...e.currentTarget.classList].includes("show-menu-icon")) {
      e.currentTarget.classList.remove("show-menu-icon");
      setIcon(<AiOutlineClose />);
    } else {
      e.currentTarget.classList.add("show-menu-icon");
      setIcon(<AiOutlineMenu />);
    }
  }

  return (
    <div className={`${styles.mobileNavTopbar} mobile-nav-topbar`}>
      <span onClick={handleLogoClick}>
        <Link href="/" className={`${styles.navLogo} ${cairoPlay.className}`}>
          Oluwatobi
        </Link>
      </span>
      <span
        className={`${styles.menuIcon} mobile-menu-icon show-menu-icon`}
        onClick={handleMenuIconClick}
      >
        {iconToDisplay}
      </span>
    </div>
  );
}
