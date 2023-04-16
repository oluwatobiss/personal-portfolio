import Head from "next/head";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Footer from "./Footer";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  function handleLayoutClick(e) {
    const layoutContainer = e.currentTarget;
    const themeModal = layoutContainer.querySelector(".theme-modal");
    const themeModalIsHidden = [...themeModal.classList].includes(
      "hide-theme-modal"
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
      themeModal.classList.add("hide-theme-modal");
    }
  }

  return (
    <div onClick={handleLayoutClick}>
      <Head>
        <meta name="description" content="Oluwatobi Sofela's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopNavbar />
      <MobileNavbar />
      <main className={inter.className}>{children}</main>
      <Footer />
    </div>
  );
}
