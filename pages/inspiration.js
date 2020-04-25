import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

import Activity from '../components/activity'

export default function Inspiration() {
  return (
    <Layout>
      <Head>
        <title>inspirations: something to do</title>
      </Head>
      <Activity/>
    </Layout>
  );
}
