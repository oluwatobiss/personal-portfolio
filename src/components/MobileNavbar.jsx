import Link from "next/link";
import { useState } from "react";
import { Cairo_Play, Nunito, Inter } from "next/font/google";
import { AiOutlineMenu } from "react-icons/ai";
import styles from "@/src/styles/MobileNavbar.module.css";

const cairoPlay = Cairo_Play({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function MobileNavbar() {
  return (
    <nav className={`${nunito.className} ${styles.nav}`}>
      <Link href="/" className={`${styles.navLogo} ${cairoPlay.className}`}>
        Oluwatobi
      </Link>
      <span className={styles.menuIcon}>
        <AiOutlineMenu />
      </span>
    </nav>
  );
}
