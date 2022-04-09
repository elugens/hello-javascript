import React from 'react';
import Link from '@docusaurus/Link';
import styles from './uievent.module.css';

const GetUIEventsCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        General JavaScript interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/ui-events/mouse-events'
              className={styles.mainCategoryLink}
            >
              Mouse Events
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/ui-events/moving-the-mouse'
              className={styles.mainCategoryLink}
            >
              Moving the Mouse
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/ui-events/drag-n-drop-with-mouse-events'
              className={styles.mainCategoryLink}
            >
              Drag'n'Drop
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/ui-events/pointer-events'
              className={styles.mainCategoryLink}
            >
              Pointer Events
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/ui-events/keyboard-keydown-keyup'
              className={styles.mainCategoryLink}
            >
              Keyboard Events
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/ui-events/scroll-scolling-events'
              className={styles.mainCategoryLink}
            >
              Scrolling Events
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetUIEventsCats;
