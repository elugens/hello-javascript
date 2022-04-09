import React from 'react';
import Link from '@docusaurus/Link';
import styles from './prototypesinhertitance.module.css';

const GetPrototypesInheritanceCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        JavaScript Prototypal Inheritance interview questions and answers for
        frontend developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/prototypes-inheritance/prototypal-inheritance'
              className={styles.mainCategoryLink}
            >
              Prototypal Inheritance
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/prototypes-inheritance/function-prototype'
              className={styles.mainCategoryLink}
            >
              Function Prototype
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/prototypes-inheritance/native-prototypes'
              className={styles.mainCategoryLink}
            >
              Native Prototypes
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/prototypes-inheritance/prototype-methods-objects-without-proto'
              className={styles.mainCategoryLink}
            >
              Prototype Methods
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetPrototypesInheritanceCats;
