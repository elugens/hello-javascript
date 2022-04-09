import React from 'react';
import Link from '@docusaurus/Link';
import styles from './generatoriterators.module.css';

const GetGeneratorIteratorCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        JavaScript Fundamentals interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/generators-advance-interation/generators'
              className={styles.mainCategoryLink}
            >
              Generators
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/generators-advance-interation/async-iterators-generators'
              className={styles.mainCategoryLink}
            >
              Async Iteration
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetGeneratorIteratorCats;
