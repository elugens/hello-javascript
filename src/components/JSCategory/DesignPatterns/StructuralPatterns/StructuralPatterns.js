import React from 'react';
import Link from '@docusaurus/Link';
import styles from './structuralpatterns.module.css';

const GetStructuralPatternCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Structural Patterns interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/structural-design-patterns/adapter-pattern'
              className={styles.mainCategoryLink}
            >
              Adapter
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/structural-design-patterns/bridge-pattern'
              className={styles.mainCategoryLink}
            >
              Bridge
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/structural-design-patterns/composite-pattern'
              className={styles.mainCategoryLink}
            >
              Composite
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/structural-design-patterns/decorator-pattern'
              className={styles.mainCategoryLink}
            >
              Decorator
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/structural-design-patterns/facade-pattern'
              className={styles.mainCategoryLink}
            >
              Facade
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/structural-design-patterns/flyweight-pattern'
              className={styles.mainCategoryLink}
            >
              Flyweight
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/structural-design-patterns/proxy-pattern'
              className={styles.mainCategoryLink}
            >
              Proxy
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/structural-design-patterns/module-pattern'
              className={styles.mainCategoryLink}
            >
              Module
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetStructuralPatternCats;
