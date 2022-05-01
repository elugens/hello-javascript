import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures'; // leave this here for now
import HeroComp from '../components/HeroCustom/HeroComp';
import LinkDirectory from '../components/LinkDirectory/LinkDirectory';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return <HeroComp />;
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Pass Your Next Frontend Phone Interview`}
      description='A Complete Archive of JavaScript Interview Questions and Answers. We can help you pass the first and second phone interviews.'
    >
      <Head>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9546383196522386'
          crossorigin='anonymous'
        ></script>
      </Head>
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <LinkDirectory />
      </main>
    </Layout>
  );
}
