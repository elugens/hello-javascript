import React from 'react';
import Link from '@docusaurus/Link';
import styles from './introtopatterns.module.css';

const GetIntroPatternCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Introductory JavaScript Pattern interview questions and answers for
        frontend developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/introduction-to-design-patterns/what-is-design-pattern'
              className={styles.mainCategoryLink}
            >
              What is a Pattern?
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/introduction-to-design-patterns/defining-a-pattern'
              className={styles.mainCategoryLink}
            >
              Defining a Pattern
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetIntroPatternCats;
