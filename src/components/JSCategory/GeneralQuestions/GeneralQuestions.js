import React from 'react';
import Link from '@docusaurus/Link';
import styles from './generalquestions.module.css';

const GetGeneralCats = () => {
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
              to='/docs/general-javascript-questions/javascript-basics/'
              className={styles.mainCategoryLink}
            >
              JavaScript Basics
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/'
              className={styles.mainCategoryLink}
            >
              JavaScript Fundamentals
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/code-quality/'
              className={styles.mainCategoryLink}
            >
              Code Quality
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/objects-the-basics/'
              className={styles.mainCategoryLink}
            >
              Objects the Basics
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/data-types/'
              className={styles.mainCategoryLink}
            >
              Data Types
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/advanced-functions/'
              className={styles.mainCategoryLink}
            >
              Advanced - JS Functions
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/object-properties/'
              className={styles.mainCategoryLink}
            >
              Object Properties Configuration
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/prototypes-inheritance/'
              className={styles.mainCategoryLink}
            >
              Prototypes / Inheritance
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/js-classes/'
              className={styles.mainCategoryLink}
            >
              Classes
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/error-handling/'
              className={styles.mainCategoryLink}
            >
              Error Handling
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/promises-async-await/'
              className={styles.mainCategoryLink}
            >
              Promises/Async/Await
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/generators-advance-interation/'
              className={styles.mainCategoryLink}
            >
              Generators, Advanced Iteration
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-modules/'
              className={styles.mainCategoryLink}
            >
              Modules
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/miscellaneous-js-questions/'
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

export default GetGeneralCats;
