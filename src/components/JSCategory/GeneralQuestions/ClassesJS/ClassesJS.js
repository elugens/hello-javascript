import React from 'react';
import Link from '@docusaurus/Link';
import styles from './jsclasses.module.css';

const GetJSClassesCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        JavaScript Classes interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/js-classes/class-basic-syntax'
              className={styles.mainCategoryLink}
            >
              Basic Syntax
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/js-classes/class-inheritance'
              className={styles.mainCategoryLink}
            >
              Class Inheritance
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/js-classes/static-properties-methods'
              className={styles.mainCategoryLink}
            >
              Static Props / Methods
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/js-classes/private-protected-properties-methods'
              className={styles.mainCategoryLink}
            >
              Private, Protected Props / Methods
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/js-classes/extend-native-built-in-classes'
              className={styles.mainCategoryLink}
            >
              Extending Natives
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/js-classes/instanceof-class-checking'
              className={styles.mainCategoryLink}
            >
              Class Checking
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/js-classes/javascript-mixins'
              className={styles.mainCategoryLink}
            >
              Mixins
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetJSClassesCats;
