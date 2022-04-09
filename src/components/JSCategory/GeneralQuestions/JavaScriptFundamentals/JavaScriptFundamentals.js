import React from 'react';
import Link from '@docusaurus/Link';
import styles from './jsfundamentals.module.css';

const GetJSFundamentalCats = () => {
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
              to='/docs/general-javascript-questions/javascript-fundamentals/the-script-tag'
              className={styles.mainCategoryLink}
            >
              The "script" Tag
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/code-structure'
              className={styles.mainCategoryLink}
            >
              Code Structure
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/strict-mode'
              className={styles.mainCategoryLink}
            >
              Strict Mode
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/variables'
              className={styles.mainCategoryLink}
            >
              Variables
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/data-types'
              className={styles.mainCategoryLink}
            >
              Data Types
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/browser-window-interactions'
              className={styles.mainCategoryLink}
            >
              Window Interaction
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/type-conversion'
              className={styles.mainCategoryLink}
            >
              Type Conversion
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/basic-math-operators-in-javascript'
              className={styles.mainCategoryLink}
            >
              Basic Operators, Math
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/comparisons-operators'
              className={styles.mainCategoryLink}
            >
              Comparisons Operators
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/conditional-branching'
              className={styles.mainCategoryLink}
            >
              Conditional Branching
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/logical-operators'
              className={styles.mainCategoryLink}
            >
              Logical Operators
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/nullish-coalescing-operator'
              className={styles.mainCategoryLink}
            >
              Nullish Coalescing Operator
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/while-for-loop'
              className={styles.mainCategoryLink}
            >
              While & For Loops
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/the-switch-statement'
              className={styles.mainCategoryLink}
            >
              The "Switch" Statement
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/functions'
              className={styles.mainCategoryLink}
            >
              Functions
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/function-expressions'
              className={styles.mainCategoryLink}
            >
              Function Expressions
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/arrow-functions'
              className={styles.mainCategoryLink}
            >
              Arrow Functions
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/javascript-fundamentals/javascript-specials'
              className={styles.mainCategoryLink}
            >
              JavaScript Specials
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetJSFundamentalCats;
