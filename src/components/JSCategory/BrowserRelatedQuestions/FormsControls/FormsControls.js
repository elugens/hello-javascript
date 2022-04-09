import React from 'react';
import Link from '@docusaurus/Link';
import styles from './formscontrols.module.css';

const GetFormsControlsCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        JavaScript Forms controls interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/forms-controls/forms-properties-methods'
              className={styles.mainCategoryLink}
            >
              Form Properties / Methods
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/forms-controls/focusing-focus-blur'
              className={styles.mainCategoryLink}
            >
              Focusing - focus/blur
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/forms-controls/forms-events'
              className={styles.mainCategoryLink}
            >
              Form Events
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/forms-controls/form-event-submit'
              className={styles.mainCategoryLink}
            >
              Form Submit / Events
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetFormsControlsCats;
