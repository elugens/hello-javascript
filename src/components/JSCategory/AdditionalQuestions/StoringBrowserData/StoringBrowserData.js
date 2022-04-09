import React from 'react';
import Link from '@docusaurus/Link';
import styles from './storingbrowserdata.module.css';

const GetStoringBrowserDataCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Storing browser data interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/storing-data-in-the-browser/cookies-document-cookie'
              className={styles.mainCategoryLink}
            >
              Cookies - document.cookie
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/storing-data-in-the-browser/localstorage-sessionstorage'
              className={styles.mainCategoryLink}
            >
              LocalStorage / sessionStorage
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/storing-data-in-the-browser/indexeddb'
              className={styles.mainCategoryLink}
            >
              IndexedDB
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetStoringBrowserDataCats;
