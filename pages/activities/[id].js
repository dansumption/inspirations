import Head from 'next/head';
import PageWrapper from '../../components/pageWrapper';
import Activity from '../../components/activity';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Inspiration({ postData }) {
  return (
    <PageWrapper>
      <Head>
        <title>inspirations: something to do</title>
      </Head>
      <div className="grid">
        <Activity
          title={postData.title}
          time={postData.time}
          people={postData.people}
          description={postData.description}
        />
      </div>
    </PageWrapper>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}