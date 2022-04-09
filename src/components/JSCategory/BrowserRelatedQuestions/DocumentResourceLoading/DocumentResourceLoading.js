import React from 'react';
import Link from '@docusaurus/Link';
import styles from './documentresourceloading.module.css';

const GetDocumentResourceLoadingCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Document / Resource Loading interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/document-resource-loading/page-documentcontentloaded-load-beforeunload-unload'
              className={styles.mainCategoryLink}
            >
              Page Lifecycle
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/document-resource-loading/scripts-async-defer'
              className={styles.mainCategoryLink}
            >
              Scripts - Async/Defer
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/document-resource-loading/resource-loading-onload-onerror'
              className={styles.mainCategoryLink}
            >
              Resource Loading
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetDocumentResourceLoadingCats;
