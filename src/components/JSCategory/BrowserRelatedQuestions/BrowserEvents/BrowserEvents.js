import React from 'react';
import Link from '@docusaurus/Link';
import styles from './browserevents.module.css';

const GetBrowserEventCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Browser Events interview questions and answers for frontend developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-events/browser-events-doc'
              className={styles.mainCategoryLink}
            >
              Browser Events
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-events/bubbling-capturing'
              className={styles.mainCategoryLink}
            >
              Bubbling / Capturing
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-events/event-delegation'
              className={styles.mainCategoryLink}
            >
              Event Delegation
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-events/browser-default-actions'
              className={styles.mainCategoryLink}
            >
              Browser Default Actions
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-events/dispatching-custom-events'
              className={styles.mainCategoryLink}
            >
              Dispatching Custom Events
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetBrowserEventCats;
