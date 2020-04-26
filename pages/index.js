import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Activity from '../components/activity';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';


export default function Home({ allPostsData }) {
                 return (
                   <Layout home>
                     <Head>
                       <title>{siteTitle}</title>
                     </Head>
                     <section
                       className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                     >
                       <h2 className={utilStyles.headingLg}>activities</h2>
                       <div className="grid">
                         {allPostsData.map(({ id, time, people, title }) => (
                           <Activity className={utilStyles.listItem} key={id} title={title} time={time} people={people}/>
                         ))}
                       </div>
                     </section>
                   </Layout>
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