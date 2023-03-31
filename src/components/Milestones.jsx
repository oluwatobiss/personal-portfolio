import Layout from "./Layout";
import Head from "next/head";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Oluwatobi Sofela - A JavaScript Front End Web Developer</title>
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
      <section>
        <div>
          <h1>Milestones page</h1>
        </div>
      </section>
      <footer>
        Copyright © {new Date().getFullYear()} Oluwatobi Sofela • All rights
        reserved.
      </footer>
    </Layout>
  );
}
