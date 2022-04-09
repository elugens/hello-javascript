import React from 'react';
import Link from '@docusaurus/Link';
import styles from './frameswindows.module.css';

const GetFramesWindowsCats = () => {
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
              to='/docs/additional-questions/frames-windows/popups-window-methods'
              className={styles.mainCategoryLink}
            >
              Popups / Window Methods
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/frames-windows/cross-window-communications'
              className={styles.mainCategoryLink}
            >
              Cross-Window Communication
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/frames-windows/clickjacking-attack'
              className={styles.mainCategoryLink}
            >
              Clickjacking Attacks
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetFramesWindowsCats;
