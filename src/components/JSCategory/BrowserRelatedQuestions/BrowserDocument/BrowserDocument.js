import React from 'react';
import Link from '@docusaurus/Link';
import styles from './browserdocument.module.css';

const GetBrowserDocumentCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        JavaScript browser document interview questions and answers for frontend
        developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-document/browser-environment-specifications'
              className={styles.mainCategoryLink}
            >
              Browser Environment Specs
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-document/dom-tree'
              className={styles.mainCategoryLink}
            >
              DOM Tree
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-document/walking-the-dom-tree'
              className={styles.mainCategoryLink}
            >
              Walking the DOM
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-document/searching-getelement-queryselector'
              className={styles.mainCategoryLink}
            >
              Searching the DOM
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-document/node-properties-type-tag-contents'
              className={styles.mainCategoryLink}
            >
              Node Properties
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-document/attributes-properties'
              className={styles.mainCategoryLink}
            >
              Attributes / Properties
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-document/modifying-the-document'
              className={styles.mainCategoryLink}
            >
              Modifying the Document
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-document/styles-classes'
              className={styles.mainCategoryLink}
            >
              Styles / Classes
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-document/element-size-scrolling'
              className={styles.mainCategoryLink}
            >
              Element Size / Scrolling
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-document/window-size-scrolling'
              className={styles.mainCategoryLink}
            >
              Window Sizes / Scrolling / Resizing
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/browser-related-questions/browser-document/window-coordinates'
              className={styles.mainCategoryLink}
            >
              Window Coordinates
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetBrowserDocumentCats;
