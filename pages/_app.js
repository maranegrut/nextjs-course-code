import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NetxJS Events</title>
        <meta name="description" content="Next events" />
        <metadata
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></metadata>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
