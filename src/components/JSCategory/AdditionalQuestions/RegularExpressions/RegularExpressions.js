import React from 'react';
import Link from '@docusaurus/Link';
import styles from './regularexpressions.module.css';

const GetRegExpCats = () => {
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
              to='/docs/additional-questions/regular-expressions/patterns-flags'
              className={styles.mainCategoryLink}
            >
              Patterns and Flags
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/character-classes'
              className={styles.mainCategoryLink}
            >
              Character Classes
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/unicode-regex'
              className={styles.mainCategoryLink}
            >
              Unicode Regex
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/anchors'
              className={styles.mainCategoryLink}
            >
              Anchors
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/multiline-mode'
              className={styles.mainCategoryLink}
            >
              Multiline Mode
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/word-boundaries'
              className={styles.mainCategoryLink}
            >
              Word Boundary
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/escaping-special-characters'
              className={styles.mainCategoryLink}
            >
              Escaping Characters
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/sets-ranges'
              className={styles.mainCategoryLink}
            >
              Sets / Ranges
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/quantifiers-regex'
              className={styles.mainCategoryLink}
            >
              Quantifiers
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/greedy-lazy-quantifiers-regex'
              className={styles.mainCategoryLink}
            >
              Greedy / Lazy Quants
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/capturing-groups-in-regex'
              className={styles.mainCategoryLink}
            >
              Capturing Groups
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/backreferences-in-pattern'
              className={styles.mainCategoryLink}
            >
              Backreferences
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/alternation'
              className={styles.mainCategoryLink}
            >
              Alternation
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/lookahead-lookbehind'
              className={styles.mainCategoryLink}
            >
              Lookahead / Lookbehind
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/catastrophic-backtracking'
              className={styles.mainCategoryLink}
            >
              Catastrophic Backtracking
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/sticky-flag'
              className={styles.mainCategoryLink}
            >
              Sticky Flag
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/regular-expressions/regexp-string-methods'
              className={styles.mainCategoryLink}
            >
              Regex / String Methods
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetRegExpCats;
