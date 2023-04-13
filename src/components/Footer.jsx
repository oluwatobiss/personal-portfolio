import { Inter } from "next/font/google";
import styles from "@/src/styles/Footer.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className={`${inter.className} ${styles.footer}`}>
      Copyright © {new Date().getFullYear()} Oluwatobi Sofela • All rights
      reserved.
    </footer>
  );
}
