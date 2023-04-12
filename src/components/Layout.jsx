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
    const themeOptionsModal =
      e.currentTarget.parentElement.querySelector(".theme-options");
    themeOptionsModal.classList.toggle("hideThemeModal");
  }

  function handleLayoutClick(e) {
    const layoutContainer = e.currentTarget;
    const themeOptionsModal = layoutContainer.querySelector(".theme-options");
    const themeOptionsIsHidden = [...themeOptionsModal.classList].includes(
      "hideThemeModal"
    );
    const clickedThemeNavBtn = e.target.closest(".theme-nav-btn");
    const clickedThemeOptionModal = e.target.closest(".theme-options");
    const clickedThemeOption = e.target.closest(".theme-option");

    if (
      !themeOptionsIsHidden &&
      !clickedThemeNavBtn &&
      !clickedThemeOptionModal &&
      !clickedThemeOption
    ) {
      themeOptionsModal.classList.add("hideThemeModal");
    }
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
              className={`${styles.themeOptions} theme-options hideThemeModal`}
            >
              <button
                type="button"
                className={`${styles.themeOption} ${styles.activeTheme} theme-option`}
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
