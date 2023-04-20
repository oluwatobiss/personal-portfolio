import Layout from "./Layout";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color="#e53a35" />
      <Component {...pageProps} />
    </Layout>
  );
}
