import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
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
