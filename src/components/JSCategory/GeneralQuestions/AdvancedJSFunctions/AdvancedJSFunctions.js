import React from 'react';
import Link from '@docusaurus/Link';
import styles from './advancedjsfunctions.module.css';

const GetAdvancedJSFunctionCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Advanced JavaScript Functions interview questions and answers for
        frontend developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/advanced-functions/recursion-and-stack'
              className={styles.mainCategoryLink}
            >
              Recursion & Stack
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/advanced-functions/rest-parameters-and-spread-syntax'
              className={styles.mainCategoryLink}
            >
              Rest Parameters / Spread Syntax
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/advanced-functions/variable-scope-closures'
              className={styles.mainCategoryLink}
            >
              Variable Scope / Closures
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/advanced-functions/the-var-declaration'
              className={styles.mainCategoryLink}
            >
              Var Declaration
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/advanced-functions/global-objects'
              className={styles.mainCategoryLink}
            >
              Global Object
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/advanced-functions/function-object'
              className={styles.mainCategoryLink}
            >
              Function object / NFE
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/advanced-functions/new-function-syntax'
              className={styles.mainCategoryLink}
            >
              The "new" Function Syntax
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/advanced-functions/scheduling'
              className={styles.mainCategoryLink}
            >
              Scheduling / Timing
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/advanced-functions/call-apply-decorators-forwarding'
              className={styles.mainCategoryLink}
            >
              Call and Apply
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/advanced-functions/function-binding'
              className={styles.mainCategoryLink}
            >
              Function Binding
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/general-javascript-questions/advanced-functions/advanced-arrow-functions'
              className={styles.mainCategoryLink}
            >
              Arrow Functions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetAdvancedJSFunctionCats;
