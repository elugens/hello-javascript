import React from 'react';
import Link from '@docusaurus/Link';
import styles from './promisesasyncawait.module.css';

const GetPromisesAsyncCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        JavaScript Callbacks interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/promises-async-await/callbacks'
              className={styles.mainCategoryLink}
            >
              Callbacks
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/promises-async-await/promise-basics'
              className={styles.mainCategoryLink}
            >
              Promise Basics
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/promises-async-await/promises-chaining'
              className={styles.mainCategoryLink}
            >
              Promises Chaining
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/promises-async-await/error-handling-with-promises'
              className={styles.mainCategoryLink}
            >
              Error / Promises
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/promises-async-await/promise-api'
              className={styles.mainCategoryLink}
            >
              Promise API
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/promises-async-await/promisify-promisification'
              className={styles.mainCategoryLink}
            >
              Promisification
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/promises-async-await/microtasks'
              className={styles.mainCategoryLink}
            >
              Microtask Queue
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/promises-async-await/async-await'
              className={styles.mainCategoryLink}
            >
              Async/Await
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetPromisesAsyncCats;
