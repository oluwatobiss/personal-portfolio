import Head from "next/head";
import Link from "next/link";
import styles from "@/src/styles/Layout.module.css";
import { Cairo_Play, Inter, Nunito } from "next/font/google";
import { MdOutlineLightMode } from "react-icons/md";

const cairoPlay = Cairo_Play({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div>
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
          <Link href="/projects">Projects</Link>
          <Link href="/guest-posts">Guest Posts</Link>
          <Link href="/milestones">Milestones</Link>
          <span>
            <MdOutlineLightMode />
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
