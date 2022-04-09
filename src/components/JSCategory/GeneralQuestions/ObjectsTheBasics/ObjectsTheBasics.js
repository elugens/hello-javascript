import React from 'react';
import Link from '@docusaurus/Link';
import styles from './objectbasics.module.css';

const GetObjectBasicsCats = () => {
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
              to='/docs/general-javascript-questions/objects-the-basics/objects'
              className={styles.mainCategoryLink}
            >
              Objects
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/objects-the-basics/object-references-and-copying'
              className={styles.mainCategoryLink}
            >
              References/Copying
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/objects-the-basics/garbage-collection'
              className={styles.mainCategoryLink}
            >
              Garbage Collection
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/objects-the-basics/object-methods'
              className={styles.mainCategoryLink}
            >
              Object Methods
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/objects-the-basics/the-new-operator-constructors'
              className={styles.mainCategoryLink}
            >
              The "new" Operator
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/objects-the-basics/optional-chaining'
              className={styles.mainCategoryLink}
            >
              Optional Chaining
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/objects-the-basics/symbol-type'
              className={styles.mainCategoryLink}
            >
              Symbol Type
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/objects-the-basics/object-to-primitive-conversion'
              className={styles.mainCategoryLink}
            >
              Object to Primitive Conversion
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetObjectBasicsCats;
