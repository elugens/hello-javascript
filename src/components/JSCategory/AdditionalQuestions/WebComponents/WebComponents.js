import React from 'react';
import Link from '@docusaurus/Link';
import styles from './webcomponents.module.css';

const GetWebComponentCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Web Components interview questions and answers for frontend developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/web-components/web-components-doc'
              className={styles.mainCategoryLink}
            >
              Web Components
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/web-components/custom-elements'
              className={styles.mainCategoryLink}
            >
              Custom Elements
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/web-components/shadow-dom'
              className={styles.mainCategoryLink}
            >
              Shadow DOM
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/web-components/template-element'
              className={styles.mainCategoryLink}
            >
              Template Element
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/web-components/shadow-dom-slots-composition'
              className={styles.mainCategoryLink}
            >
              Shadow DOM Slots
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/web-components/shadow-dom-styling'
              className={styles.mainCategoryLink}
            >
              Shadow DOM Styling
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/web-components/shadow-dom-and-events'
              className={styles.mainCategoryLink}
            >
              Shadow DOM / Events
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetWebComponentCats;
