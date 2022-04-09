import React from 'react';
import Link from '@docusaurus/Link';
import styles from './binarydatafiles.module.css';

const GetBinaryDataFileCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        JavaScript Binary Data and Files interview questions and answers for
        frontend developers.
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/binary-data-files/arraybuffer-binary-arrays'
              className={styles.mainCategoryLink}
            >
              ArrayBuffer, Binary Arrays
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/binary-data-files/textdecoder-textencoder'
              className={styles.mainCategoryLink}
            >
              TextDecoder / TextEncoder
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/binary-data-files/blobs'
              className={styles.mainCategoryLink}
            >
              Blob Data
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/additional-questions/binary-data-files/file-filereader'
              className={styles.mainCategoryLink}
            >
              File / FileReader
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetBinaryDataFileCats;
