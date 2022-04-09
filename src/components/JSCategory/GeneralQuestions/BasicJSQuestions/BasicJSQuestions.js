import React from 'react';
import Link from '@docusaurus/Link';
import styles from './basicjsquestions.module.css';

const GetBasicJavaScriptCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Basic JavaScript interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-basics/basic-javascript-questions-answers'
              className={styles.mainCategoryLink}
            >
              Basic JS Questions
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-basics/manuals-and-descriptions'
              className={styles.mainCategoryLink}
            >
              Manuals & Specifications
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-basics/code-editors'
              className={styles.mainCategoryLink}
            >
              Code Editors
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-basics/developer-console'
              className={styles.mainCategoryLink}
            >
              Developer Console
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetBasicJavaScriptCats;
