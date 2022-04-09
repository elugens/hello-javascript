import React from 'react';
import Link from '@docusaurus/Link';
import styles from './networkrequests.module.css';

const GetNetworkRequestCats = () => {
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
              to='/docs/additional-questions/network-requests/fetch-requests'
              className={styles.mainCategoryLink}
            >
              Fetch Requests
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/network-requests/formdata'
              className={styles.mainCategoryLink}
            >
              FormData Object
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/network-requests/fetch-download-progress'
              className={styles.mainCategoryLink}
            >
              Fetch - Download Progress
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/network-requests/fetch-abort'
              className={styles.mainCategoryLink}
            >
              Fetch - Abort
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/network-requests/fetch-cross-origin-request'
              className={styles.mainCategoryLink}
            >
              Cross-Origin Requests
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/network-requests/fetch-api'
              className={styles.mainCategoryLink}
            >
              Fetch API
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/network-requests/url-objects'
              className={styles.mainCategoryLink}
            >
              URL Objects
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/network-requests/xmlhttprequest'
              className={styles.mainCategoryLink}
            >
              XMLHttpRequest
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/network-requests/resumable-file-uploads'
              className={styles.mainCategoryLink}
            >
              Resumable File Uploads
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/network-requests/long-polling'
              className={styles.mainCategoryLink}
            >
              Long Polling
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/network-requests/websocket'
              className={styles.mainCategoryLink}
            >
              WebSocket
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/network-requests/server-sent-events'
              className={styles.mainCategoryLink}
            >
              Server Sent Events
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetNetworkRequestCats;
