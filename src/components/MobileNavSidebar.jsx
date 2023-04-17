import Link from "next/link";
import { useState } from "react";
import { Nunito, Inter } from "next/font/google";
import { MdContrast, MdDarkMode, MdLightMode } from "react-icons/md";
import styles from "@/src/styles/MobileNavSidebar.module.css";

const nunito = Nunito({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function MobileMenuSidebar() {
  const [navThemeIcon, setNavThemeIcon] = useState(<MdDarkMode />);
  function handleThemeNavBtnClick(e) {
    const themeModal =
      e.currentTarget.parentElement.parentElement.querySelector(".theme-modal");
    themeModal.classList.toggle("hide-theme-modal");
  }

  function handleThemeModalClick(e) {
    const root = document.documentElement;
    const themeOptions = document.querySelectorAll(".theme-option");
    const clickedThemeOption = e.target.closest(".theme-option");

    if (clickedThemeOption) {
      const classesOfClickedTheme = [...clickedThemeOption.classList];
      themeOptions.forEach((i) => i.classList.remove("active-theme"));
      clickedThemeOption.classList.add("active-theme");

      if (classesOfClickedTheme.includes("light")) {
        root.classList.add("light");
        root.classList.remove("dark");
        root.classList.remove("device");
        e.currentTarget.classList.add("hide-theme-modal");
        setNavThemeIcon(<MdLightMode />);
      }

      if (classesOfClickedTheme.includes("dark")) {
        root.classList.remove("light");
        root.classList.add("dark");
        root.classList.remove("device");
        e.currentTarget.classList.add("hide-theme-modal");
        setNavThemeIcon(<MdDarkMode />);
      }

      if (classesOfClickedTheme.includes("system")) {
        root.classList.remove("light");
        root.classList.remove("dark");
        root.classList.add("device");
        e.currentTarget.classList.add("hide-theme-modal");
        setNavThemeIcon(<MdContrast />);
      }
    }
  }

  return (
    <aside
      className={`${nunito.className} ${styles.aside} hide-mobile-sidebar`}
    >
      <div className={`${styles.routes} ${inter.className}`}>
        <Link href="/projects">Projects</Link>
        <Link href="/guest-posts">Guest Posts</Link>
        <Link href="/milestones">Milestones</Link>
      </div>
      <div className={styles.theme}>
        <div
          className={`${styles.themeModal} theme-modal hide-theme-modal`}
          onClick={handleThemeModalClick}
        >
          <button
            type="button"
            className={`${styles.themeOption} theme-option light`}
          >
            <MdLightMode />
            <span>Light</span>
          </button>
          <button
            type="button"
            className={`${styles.themeOption} theme-option active-theme dark`}
          >
            <MdDarkMode />
            <span>Dark</span>
          </button>
          <button
            type="button"
            className={`${styles.themeOption} theme-option system`}
          >
            <MdContrast />
            <span>System</span>
          </button>
        </div>
        <div
          className={`${styles.themeNavBtnContainer} theme-nav-btn-container`}
        >
          <button
            type="button"
            className={`${styles.themeNavBtn} theme-nav-btn`}
            onClick={handleThemeNavBtnClick}
          >
            <span className={styles.themeNavBtnIcon}>{navThemeIcon}</span>
            <span>Theme</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
