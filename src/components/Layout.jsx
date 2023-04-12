import Head from "next/head";
import Link from "next/link";
import styles from "@/src/styles/Layout.module.css";
import { Cairo_Play, Inter, Nunito } from "next/font/google";
import { MdContrast, MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect } from "react";

const cairoPlay = Cairo_Play({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export default function Layout({ children }) {
  function handleThemeNavBtnClick(e) {
    const themeModal =
      e.currentTarget.parentElement.querySelector(".theme-modal");
    themeModal.classList.toggle("hideThemeModal");
  }

  function handleLayoutClick(e) {
    const layoutContainer = e.currentTarget;
    const themeModal = layoutContainer.querySelector(".theme-modal");
    const themeModalIsHidden = [...themeModal.classList].includes(
      "hideThemeModal"
    );
    const clickedThemeNavBtn = e.target.closest(".theme-nav-btn");
    const clickedThemeModal = e.target.closest(".theme-modal");
    const clickedThemeOption = e.target.closest(".theme-option");

    if (
      !themeModalIsHidden &&
      !clickedThemeNavBtn &&
      !clickedThemeModal &&
      !clickedThemeOption
    ) {
      themeModal.classList.add("hideThemeModal");
    }
  }

  function handleThemeModalClick(e) {
    const themeOptions = document.querySelectorAll(".theme-option");
    const clickedThemeOption = e.target.closest(".theme-option");
    themeOptions.forEach((i) => i.classList.remove("active-theme"));
    clickedThemeOption.classList.add("active-theme");
  }

  return (
    <div onClick={handleLayoutClick}>
      <Head>
        <meta name="description" content="Oluwatobi Sofela's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="color-scheme" content="light dark" /> */}
        <meta name="color-scheme" content="light" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={`${nunito.className} ${styles.nav}`}>
        <Link href="/" className={`${styles.navLogo} ${cairoPlay.className}`}>
          Oluwatobi
        </Link>
        <span className={styles.navRoutesAndTheme}>
          <span className={styles.routes}>
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
              <MdLightMode />
            </button>
            <div
              className={`${styles.themeModal} theme-modal hideThemeModal`}
              onClick={handleThemeModalClick}
            >
              <button
                type="button"
                className={`${styles.themeOption} active-theme theme-option`}
              >
                <MdLightMode />
                <span>Light</span>
              </button>
              <button
                type="button"
                className={`${styles.themeOption} theme-option`}
              >
                <MdDarkMode />
                <span>Dark</span>
              </button>
              <button
                type="button"
                className={`${styles.themeOption} theme-option`}
              >
                <MdContrast />
                <span>System</span>
              </button>
            </div>
          </span>
        </span>
      </nav>
      <main className={inter.className}>{children}</main>
      <footer className={`${inter.className} ${styles.footer}`}>
        Copyright © {new Date().getFullYear()} Oluwatobi Sofela • All rights
        reserved.
      </footer>
    </div>
  );
}
