import React from 'react';
import Link from '@docusaurus/Link';
import styles from './codequality.module.css';

const GetCodeQualityCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Code Quality interview questions and answers for frontend developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/code-quality/debugging-javascript-in-chrome-browser'
              className={styles.mainCategoryLink}
            >
              Debugging in Chrome
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/code-quality/coding-style'
              className={styles.mainCategoryLink}
            >
              Coding Style
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/code-quality/comments-in-javascript'
              className={styles.mainCategoryLink}
            >
              Comments
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/code-quality/ninja-code'
              className={styles.mainCategoryLink}
            >
              Ninja Code
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/code-quality/automated-code-testing'
              className={styles.mainCategoryLink}
            >
              Automated Testing
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/code-quality/polyfills-and-transpilers'
              className={styles.mainCategoryLink}
            >
              Polyfills & Transpilers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetCodeQualityCats;
