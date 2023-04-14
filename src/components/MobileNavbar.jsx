import MobileNavTopbar from "./MobileNavTopbar";
import MobileNavSidebar from "./MobileNavSidebar";
import styles from "@/src/styles/MobileNavbar.module.css";

export default function MobileNavbar() {
  return (
    <nav className={`${styles.nav}`}>
      <div className={styles.topNSidebarContainer}>
        <MobileNavTopbar />
        <MobileNavSidebar />
      </div>
    </nav>
  );
}
