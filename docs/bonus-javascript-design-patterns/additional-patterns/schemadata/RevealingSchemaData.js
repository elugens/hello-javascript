const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: {
    '@type': 'Question',
    name: 'Can you explain the revealing design pattern?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'The basic tenet of the Revealing Module pattern is that all functions and variables should be hidden unless explicitly revealed. All of our functions and variables may be defined in the private scope. We can return an anonymous object containing references to the private functionality we want to make public.',
    },
  },
};

export default StructuredData;
