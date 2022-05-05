import React from 'react';
import { useState, useEffect } from 'react';

// Hook JsonLD.js used for structured data.
const JsonLD = (props) => {
  const type = 'application/ld+json';
  const { data } = props;
  const [structuredData, setStructuredData] = useState({});

  useEffect(() => {
    setStructuredData(data);
  }, [data]);

  return <script type={type}>{JSON.stringify(data)}</script>;
};

export default JsonLD;
