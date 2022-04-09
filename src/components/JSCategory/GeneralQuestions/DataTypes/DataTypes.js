import React from 'react';
import Link from '@docusaurus/Link';
import styles from './datatypes.module.css';

const GetDataTypesCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        JavaScript data types interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/data-types/methods-of-primitives'
              className={styles.mainCategoryLink}
            >
              Methods of Primitives
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/data-types/numbers'
              className={styles.mainCategoryLink}
            >
              Numbers
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/data-types/strings'
              className={styles.mainCategoryLink}
            >
              Strings
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/data-types/arrays'
              className={styles.mainCategoryLink}
            >
              Arrays
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/data-types/array-methods'
              className={styles.mainCategoryLink}
            >
              Array Methods
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/data-types/iterables'
              className={styles.mainCategoryLink}
            >
              Iterable Types
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/data-types/map-and-set'
              className={styles.mainCategoryLink}
            >
              Map and Set
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/data-types/weakmap-and-weakset'
              className={styles.mainCategoryLink}
            >
              WeakMap / WeakSet
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/data-types/object-keys-values-entries'
              className={styles.mainCategoryLink}
            >
              Keys / Values / Entries
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/data-types/destructuring-assignment'
              className={styles.mainCategoryLink}
            >
              Destructuring Assignment
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/data-types/dates-and-time'
              className={styles.mainCategoryLink}
            >
              Date and Time
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/data-types/json-methods-tojson'
              className={styles.mainCategoryLink}
            >
              JSON Methods
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetDataTypesCats;
