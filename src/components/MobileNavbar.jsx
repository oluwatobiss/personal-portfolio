import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNavTopbar from "./MobileNavTopbar";
import MobileNavSidebar from "./MobileNavSidebar";
import styles from "@/src/styles/MobileNavbar.module.css";

export default function MobileNavbar() {
  const [closeOrMenuIcon, setCloseOrMenuIcon] = useState(<AiOutlineMenu />);

  return (
    <nav className={`${styles.nav}`}>
      <div className={styles.topNSidebarContainer}>
        <MobileNavTopbar
          iconToDisplay={closeOrMenuIcon}
          setIcon={(icon) => setCloseOrMenuIcon(icon)}
        />
        <MobileNavSidebar
          iconToDisplay={closeOrMenuIcon}
          setIcon={(icon) => setCloseOrMenuIcon(icon)}
        />
      </div>
    </nav>
  );
}
