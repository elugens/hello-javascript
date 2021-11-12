import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures'; // leave this here for now
import HeroComp from '../components/HeroCustom/HeroComp';
import LinkDirectory from '../components/LinkDirectory/LinkDirectory';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return <HeroComp />;
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`HelloJavaScript.info`}
      description='A Complete Archive of JavaScript Interview Questions and Answers. We can help you pass the first and second phone interviews.'
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <LinkDirectory />
      </main>
    </Layout>
  );
}
