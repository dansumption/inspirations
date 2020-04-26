import Link from 'next/link';
import Head from 'next/head';
import PageWrapper from '../components/pageWrapper';

import Activity from '../components/activity';
import PageWrapper from '../components/pageWrapper';

export default function Inspiration() {
  return (
    <PageWrapper>
      <Head>
        <title>inspirations: something to do</title>
      </Head>
      <div className="grid">
        <Activity
          title="go for a walk"
          time="3 to 4 hours"
          people="1 to 8"
          description="go for a nice walk in the countryside. Pick up a twig when you get there and name it after your favourite dog."
        />
        <Activity
          title="meditate"
          time="20 minutes"
          people="1"
          description="Sit and feel your breathing"
        />
        <Activity
          title="cut your tonails"
          time="5 minutes"
          people="1"
          description="Get some scissors and cut!"
        />
        <Activity
          title="plant a tree"
          time="1 to 2 hours"
          people="1 to 2"
          description="Dig a hole, plant a tree, water the tree"
        />
      </div>
    </PageWrapper>
  );
}
