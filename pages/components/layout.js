import Head from "next/head";
import styles from "../../styles/Layout.module.css";
import Header from "./header";
import Footer from "./Footer";
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="descrpiton" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the hotest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events",
};
