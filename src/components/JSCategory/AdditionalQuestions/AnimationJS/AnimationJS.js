import React from 'react';
import Link from '@docusaurus/Link';
import styles from './animation.module.css';

const GetAnimationCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        JavaScript Animations interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/js-animation/bezier-curve'
              className={styles.mainCategoryLink}
            >
              Bezier Curve
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/js-animation/css-animations'
              className={styles.mainCategoryLink}
            >
              CSS-Animations
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/js-animation/javascript-animations'
              className={styles.mainCategoryLink}
            >
              JavaScript Animations
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetAnimationCats;
