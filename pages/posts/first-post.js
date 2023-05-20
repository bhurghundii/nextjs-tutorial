import Link from "next/link";
import Head from "next/head"; // Used for metadata (https://nextjs.org/learn/basics/assets-metadata-css/metadata)
import Script from "next/script"; // Adds a 3rd party lib (https://nextjs.org/learn/basics/assets-metadata-css/third-party-javascript)

import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        {" "}
        <title>First Post</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}
