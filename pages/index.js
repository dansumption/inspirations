import Head from 'next/head';
import PageWrapper, { siteTitle } from '../components/pageWrapper';
import Activity from '../components/activity';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/readActivities';

export default function Home({ allPostsData }) {
  return (
    <PageWrapper home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2 className={utilStyles.headingLg}>activities</h2>
        <div className="grid">
          {allPostsData.map(({ id, time, people, title }) => (
            <Activity key={id} title={title} time={time} people={people} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
