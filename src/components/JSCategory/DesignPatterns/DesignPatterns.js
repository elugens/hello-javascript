import React from 'react';
import Link from '@docusaurus/Link';
import styles from './designpatterns.module.css';

const GetDesignPatternCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Behavioral Pattern interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/introduction-to-design-patterns/'
              className={styles.mainCategoryLink}
            >
              Introduction to Patterns
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/creational-design-pattern/'
              className={styles.mainCategoryLink}
            >
              Creational Patterns
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/structural-design-patterns/'
              className={styles.mainCategoryLink}
            >
              Structural Patterns
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/behavioral-design-patterns/'
              className={styles.mainCategoryLink}
            >
              Behavioral Patterns
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/anti-patterns/'
              className={styles.mainCategoryLink}
            >
              Anti-Patterns
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetDesignPatternCats;
