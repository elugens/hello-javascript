import React from 'react';
import styles from './herobar.module.css';

const HeroBar = () => {
  return (
    <div className={styles.hero__bar}>
      <p>
        {' '}
        Get Access to Our Complete Offline Package of Questions & Answers -{' '}
        <strong>COMING SOON!</strong>{' '}
      </p>
    </div>
  );
};

export default HeroBar;
