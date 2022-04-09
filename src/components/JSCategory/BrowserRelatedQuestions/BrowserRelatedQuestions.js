import React from 'react';
import Link from '@docusaurus/Link';
import styles from './browserrelatedquestions.module.css';

const GetBrowserRelatedQuestionCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Browser related JavaScript interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-document/'
              className={styles.mainCategoryLink}
            >
              Browser Document
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-events/'
              className={styles.mainCategoryLink}
            >
              Browser Events
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/ui-events/'
              className={styles.mainCategoryLink}
            >
              UI Events
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/forms-controls/'
              className={styles.mainCategoryLink}
            >
              Forms / Controls
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/document-resource-loading/'
              className={styles.mainCategoryLink}
            >
              Document / Resource loading
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/miscellaneous-browser-questions/'
              className={styles.mainCategoryLink}
            >
              Miscellaneous
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetBrowserRelatedQuestionCats;
