import Link from 'next/link';
import Head from 'next/head';

export default function Inspiration() {
  return (
    <>
      <Head>
        <title>try this for inspiration</title>
      </Head>
      <h1>try this for inspiration</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
