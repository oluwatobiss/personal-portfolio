import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Cairo_Play } from "next/font/google";
import Link from "next/link";
import styles from "@/src/styles/MobileNavTopbar.module.css";

const cairoPlay = Cairo_Play({ subsets: ["latin"] });

export default function MobileMenuTopbar() {
  const [icon, setIcon] = useState(<AiOutlineMenu />);

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
      <Link href="/" className={`${styles.navLogo} ${cairoPlay.className}`}>
        Oluwatobi
      </Link>
      <span
        className={`${styles.menuIcon} mobile-menu-icon show-menu-icon`}
        onClick={handleMenuIconClick}
      >
        {icon}
      </span>
    </div>
  );
}
