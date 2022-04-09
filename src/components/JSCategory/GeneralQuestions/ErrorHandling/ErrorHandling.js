import React from 'react';
import Link from '@docusaurus/Link';
import styles from './errorhandling.module.css';

const GetErrorHandlingCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        JavaScript Error Handling interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/error-handling/javascript-error-handling'
              className={styles.mainCategoryLink}
            >
              JS Error Handling
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/error-handling/custom-errors'
              className={styles.mainCategoryLink}
            >
              Custom Errors
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetErrorHandlingCats;
