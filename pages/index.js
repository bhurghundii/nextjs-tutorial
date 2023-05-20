import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Alert from "../components/alert";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home ({ allPostsData }) { 
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Alert type={"success"}>This blog is live</Alert>
      {/* This is how you use clsx  - pick the class via type which can be passed as a JS Variable */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
