import React from 'react';
import Link from '@docusaurus/Link';
import styles from './miscellaneous.module.css';

const GetMiscellaneousBRQCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Miscellaneous JavaScript interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/miscellaneous-browser-questions/mutation-observer'
              className={styles.mainCategoryLink}
            >
              Mutation Observer
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/miscellaneous-browser-questions/selection-and-range'
              className={styles.mainCategoryLink}
            >
              Selection and Range
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/miscellaneous-browser-questions/event-loop-microtasks-macrotasks'
              className={styles.mainCategoryLink}
            >
              Event loop
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetMiscellaneousBRQCats;
