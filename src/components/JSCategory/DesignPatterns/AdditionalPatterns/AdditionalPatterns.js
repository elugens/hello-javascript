import React from 'react';
import Link from '@docusaurus/Link';
import styles from './additionalpattern.module.css';

const GetAdditionalPatternCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Additional Design Patterns interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/additional-patterns/reavealing-pattern'
              className={styles.mainCategoryLink}
            >
              Revealing
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/additional-patterns/mixin-pattern'
              className={styles.mainCategoryLink}
            >
              Mixin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetAdditionalPatternCats;
