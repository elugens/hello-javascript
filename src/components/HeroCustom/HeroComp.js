import Link from '@docusaurus/Link';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './herocomp.module.css';
import HeroBar from '../HeroBar/HeroBar';

function HeroComp() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className={styles.custom__hero}>
        <div className={styles.hero__container}>
          <div className='hero__content'>
            <div className={styles.hero__text__container}>
              <button className={styles.support_button}>SUPPORT US!</button>
              <h1 className='hero__title'>{siteConfig.title}</h1>
              <p className='hero__subtitle'>{siteConfig.tagline}</p>
            </div>

            <div className={styles.img_container}>
              <img
                className={styles.hero__image}
                src='../../../static/img/hero-vscode-editor-hellojavascriptdotinfo.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <HeroBar />
    </>
  );
}

export default HeroComp;
