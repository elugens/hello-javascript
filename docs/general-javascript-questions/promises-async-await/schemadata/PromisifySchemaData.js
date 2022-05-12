const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain what promisification is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '“Promisification” is a long word for a simple transformation, and it is the conversion of a function that accepts a callback into a function that returns a promise. Such transformations are often required in real-life, as many functions and libraries are callback-based. But promises are more convenient, so it makes sense to “promisify” them.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is one crucial aspect to remember when using promisifications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Promisification is an excellent approach, especially when using async/await, but not a total replacement for callbacks. Remember, a promise may have only one result, but a callback may technically be called many times. So promisification is only meant for functions that call the callback once, and further calls get ignored.',
      },
    },
  ],
};

export default StructuredData;
