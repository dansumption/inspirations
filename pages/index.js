import Head from 'next/head';
import PageWrapper, { siteTitle } from '../components/pageWrapper';
import Activity from '../components/activity';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/readActivities';
import Link from 'next/link';

export default function Home({ allPostsData }) {
  return (
    <PageWrapper home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="grid">
          {allPostsData.map(({ id, time, people, title }) => (
            <Link key={id} href={'/activities/' + id}>
              <a>
                <Activity key={id} title={title} time={time} people={people} />
              </a>
            </Link>
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
