import React from 'react';
import Link from '@docusaurus/Link';
import styles from './creationalpatterns.module.css';

const GetCreationalPatternCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Creational Patterns interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/creational-design-pattern/factory-method-pattern'
              className={styles.mainCategoryLink}
            >
              Factory
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/creational-design-pattern/abstract-factory-pattern'
              className={styles.mainCategoryLink}
            >
              Abstract Factory
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/creational-design-pattern/builder-pattern'
              className={styles.mainCategoryLink}
            >
              Builder
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/creational-design-pattern/constructor-pattern'
              className={styles.mainCategoryLink}
            >
              Constructor
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/creational-design-pattern/prototype-pattern'
              className={styles.mainCategoryLink}
            >
              Prototype
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/creational-design-pattern/singleton-pattern'
              className={styles.mainCategoryLink}
            >
              Singleton
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetCreationalPatternCats;
