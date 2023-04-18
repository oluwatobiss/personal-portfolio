import { useState } from "react";
import { Nunito, Inter } from "next/font/google";
import { MdContrast, MdDarkMode, MdLightMode } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import styles from "@/src/styles/MobileNavSidebar.module.css";

const nunito = Nunito({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function MobileMenuSidebar({ setIcon }) {
  const [navThemeIcon, setNavThemeIcon] = useState(<MdDarkMode />);

  function handleRoutesClick(e) {
    const menuSpan = document.querySelector(".mobile-menu-icon");

    if ([...menuSpan.classList].includes("show-menu-icon")) {
      menuSpan.classList.remove("show-menu-icon");
      setIcon(<AiOutlineClose />);
    } else {
      menuSpan.classList.add("show-menu-icon");
      setIcon(<AiOutlineMenu />);
    }

    e.currentTarget.parentElement.classList.add("hide-mobile-sidebar");
  }

  function handleThemeModalClick(e) {
    const root = document.documentElement;
    const themeOptions = document.querySelectorAll(".theme-option");
    const clickedThemeOption = e.target.closest(".theme-option");

    if (clickedThemeOption) {
      const menuSpan = document.querySelector(".mobile-menu-icon");
      const classesOfClickedTheme = [...clickedThemeOption.classList];

      themeOptions.forEach((i) => i.classList.remove("active-theme"));
      clickedThemeOption.classList.add("active-theme");

      if ([...menuSpan.classList].includes("show-menu-icon")) {
        menuSpan.classList.remove("show-menu-icon");
        setIcon(<AiOutlineClose />);
      } else {
        menuSpan.classList.add("show-menu-icon");
        setIcon(<AiOutlineMenu />);
      }

      if (classesOfClickedTheme.includes("light")) {
        root.classList.add("light");
        root.classList.remove("dark");
        root.classList.remove("device");
        e.currentTarget.classList.add("hide-theme-modal");
        e.currentTarget.parentElement.parentElement.classList.add(
          "hide-mobile-sidebar"
        );
        setNavThemeIcon(<MdLightMode />);
      }

      if (classesOfClickedTheme.includes("dark")) {
        root.classList.remove("light");
        root.classList.add("dark");
        root.classList.remove("device");
        e.currentTarget.classList.add("hide-theme-modal");
        e.currentTarget.parentElement.parentElement.classList.add(
          "hide-mobile-sidebar"
        );
        setNavThemeIcon(<MdDarkMode />);
      }

      if (classesOfClickedTheme.includes("system")) {
        root.classList.remove("light");
        root.classList.remove("dark");
        root.classList.add("device");
        e.currentTarget.classList.add("hide-theme-modal");
        e.currentTarget.parentElement.parentElement.classList.add(
          "hide-mobile-sidebar"
        );
        setNavThemeIcon(<MdContrast />);
      }
    }
  }

  function handleThemeNavBtnClick(e) {
    const themeModal =
      e.currentTarget.parentElement.parentElement.querySelector(".theme-modal");
    themeModal.classList.toggle("hide-theme-modal");
  }

  return (
    <aside
      className={`${nunito.className} ${styles.aside} hide-mobile-sidebar`}
    >
      <div
        className={`${styles.routes} ${inter.className}`}
        onClick={handleRoutesClick}
      >
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
