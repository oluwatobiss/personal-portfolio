import Head from "next/head";
import Link from "next/link";
import styles from "@/src/styles/Layout.module.css";
import { Inter, Nunito } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="description" content="Oluwatobi Sofela's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={`${nunito.className} ${styles.nav}`}>
        <Link href="/" className={styles.navLogo}>
          Oluwatobi
        </Link>
        <span className={styles.navRoutes}>
          <Link href="/projects">Projects</Link>
          <Link href="/press">Press</Link>
          <Link href="/awards">Awards</Link>
        </span>
        <span className={styles.navTheme}>th</span>
      </nav>
      <main className={inter.className}>{children}</main>
      <footer className={`${inter.className} ${styles.footer}`}>
        Copyright © {new Date().getFullYear()} Oluwatobi Sofela • All rights
        reserved.
      </footer>
    </div>
  );
}
