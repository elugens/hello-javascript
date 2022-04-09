import React from 'react';
import Link from '@docusaurus/Link';
import styles from './miscellaneous.module.css';

const GetMiscellaneousCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        General JavaScript interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/miscellaneous-js-questions/proxy-and-reflect'
              className={styles.mainCategoryLink}
            >
              Proxy and Reflect
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/miscellaneous-js-questions/eval-running-a-code-string'
              className={styles.mainCategoryLink}
            >
              String Evaluation
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/miscellaneous-js-questions/currying'
              className={styles.mainCategoryLink}
            >
              Currying
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/miscellaneous-js-questions/reference-types'
              className={styles.mainCategoryLink}
            >
              Reference Types
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/miscellaneous-js-questions/bigint'
              className={styles.mainCategoryLink}
            >
              BigInts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetMiscellaneousCats;
