import React from 'react';
import Link from '@docusaurus/Link';
import styles from './additionalquestions.module.css';

const GetAdditionalQuestionCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Additional JavaScript interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/frames-windows/'
              className={styles.mainCategoryLink}
            >
              Frames / Windows
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/binary-data-files/'
              className={styles.mainCategoryLink}
            >
              Binary Data / Files
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/network-requests/'
              className={styles.mainCategoryLink}
            >
              Network Requests
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/storing-data-in-the-browser/'
              className={styles.mainCategoryLink}
            >
              Storing Browser Data
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/js-animation/'
              className={styles.mainCategoryLink}
            >
              Animation
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/web-components/'
              className={styles.mainCategoryLink}
            >
              Web Components
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/'
              className={styles.mainCategoryLink}
            >
              Regular Expressions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetAdditionalQuestionCats;
