import React from 'react';
import Link from '@docusaurus/Link';
import styles from './objectproperties.module.css';

const GetObjectPropertiesCats = () => {
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
              to='/docs/general-javascript-questions/object-properties/property-flags-and-descriptors'
              className={styles.mainCategoryLink}
            >
              Property Flags / Descriptors
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/object-properties/property-getters-and-setters'
              className={styles.mainCategoryLink}
            >
              Property Getters & Setters
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetObjectPropertiesCats;
