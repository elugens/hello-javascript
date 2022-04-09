import React from 'react';
import Link from '@docusaurus/Link';
import styles from './jsmodules.module.css';

const GetJSModulesCats = () => {
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
              to='/docs/general-javascript-questions/javascript-modules/modules-the-basics'
              className={styles.mainCategoryLink}
            >
              Modules
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-modules/export-import-modules'
              className={styles.mainCategoryLink}
            >
              Export & Import
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-modules/dynamic-imports'
              className={styles.mainCategoryLink}
            >
              Dynamic Imports
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetJSModulesCats;
