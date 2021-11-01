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
  return (
    <HeroComp />
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div className='container'>
    //     <h1 className='hero__title'>{siteConfig.title}</h1>
    //     <p className='hero__subtitle'>{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className='button button--secondary button--lg'
    //         to='/docs/intro'
    //       >
    //         Get Started
    //       </Link>
    //     </div>
    //   </div>
    // </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`HelloJavaScript.info ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <LinkDirectory />
      </main>
    </Layout>
  );
}
