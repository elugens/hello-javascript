const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are some popular applications for asynchronous iteration in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When there is an asynchronous need to retrieve data, we typically use asynchronous iteration. The most common use case is an object needs to make a network request to deliver the next value. This approach is also a great way to handle controlled chunks of data to reduce the impact on resources.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to use a spread syntax with an asynchronous iterator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, because the spread syntax expects to find Symbol.iterator, not Symbol.asyncIterator. It’s also the case for for..of: the syntax without await needs Symbol.iterator.',
      },
    },
  ],
};

export default StructuredData;
