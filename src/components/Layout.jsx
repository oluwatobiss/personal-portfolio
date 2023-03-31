import Head from "next/head";
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
      <nav className={nunito.className}>
        <span>Oluwatobi</span>
        <span>
          <span>Milestones</span>
          <span>Press</span>
          <span>Awards</span>
          <span className="theme">th</span>
        </span>
      </nav>
      <main className={inter.className}>{children}</main>
    </div>
  );
}
