import React from 'react';
import Link from '@docusaurus/Link';
import styles from './behavioralpatterns.module.css';

const GetBehavioralPatternCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        Behavioral Pattern interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/behavioral-design-patterns/interpreter-pattern'
              className={styles.mainCategoryLink}
            >
              Interpreter
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/behavioral-design-patterns/template-method-pattern'
              className={styles.mainCategoryLink}
            >
              Template Method
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/behavioral-design-patterns/chain-of-responsibility-pattern'
              className={styles.mainCategoryLink}
            >
              Chain of Responsibility
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/behavioral-design-patterns/command-pattern'
              className={styles.mainCategoryLink}
            >
              Command
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/behavioral-design-patterns/iterator-pattern'
              className={styles.mainCategoryLink}
            >
              Iterator
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/behavioral-design-patterns/mediator-pattern'
              className={styles.mainCategoryLink}
            >
              Mediator
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/behavioral-design-patterns/memento-pattern'
              className={styles.mainCategoryLink}
            >
              Memento
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/behavioral-design-patterns/observer-pattern'
              className={styles.mainCategoryLink}
            >
              Observer
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/behavioral-design-patterns/state-pattern'
              className={styles.mainCategoryLink}
            >
              State
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/behavioral-design-patterns/strategy-pattern'
              className={styles.mainCategoryLink}
            >
              Strategy
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/bonus-javascript-design-patterns/behavioral-design-patterns/visitor-pattern'
              className={styles.mainCategoryLink}
            >
              Visitor
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetBehavioralPatternCats;
