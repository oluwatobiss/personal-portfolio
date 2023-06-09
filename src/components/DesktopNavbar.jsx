import { useState } from "react";
import { MdContrast, MdDarkMode, MdLightMode } from "react-icons/md";
import { Cairo_Play, Nunito, Inter } from "next/font/google";
import Link from "next/link";
import styles from "@/src/styles/DesktopNavbar.module.css";

const cairoPlay = Cairo_Play({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function DesktopNavbar() {
  const [navThemeIcon, setNavThemeIcon] = useState(<MdDarkMode />);
  function handleThemeNavBtnClick(e) {
    const themeModal =
      e.currentTarget.parentElement.querySelector(".theme-modal");
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
    <nav className={`${nunito.className} ${styles.nav}`}>
      <Link href="/" className={`${styles.navLogo} ${cairoPlay.className}`}>
        Oluwatobi
      </Link>
      <span className={styles.navRoutesAndTheme}>
        <span className={`${styles.routes} ${inter.className} routes`}>
          <Link href="/projects">Projects</Link>
          <Link href="/guest-posts">Guest Posts</Link>
          <Link href="/milestones">Milestones</Link>
        </span>
        <span className={styles.theme}>
          <button
            type="button"
            title="Theme"
            className={`${styles.themeNavBtn} theme-nav-btn`}
            onClick={handleThemeNavBtnClick}
          >
            {navThemeIcon}
          </button>
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
        </span>
      </span>
    </nav>
  );
}
