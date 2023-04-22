import NextNProgress from "nextjs-progressbar";
import Layout from "./Layout";
import "@/src/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color="#e53a35" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </Layout>
  );
}
