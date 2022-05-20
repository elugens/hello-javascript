const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: {
    '@type': 'Question',
    name: 'Can you explain the Module design pattern?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Another popular JavaScript design pattern for keeping our code tidy, segregated, and organized is the Module Pattern. A module is a standalone code that may modify objects without impacting other components. In JavaScript does not support the concept of an access modifier, the aid of the module in mimicking the behavior of private/public access, thereby ensures encapsulation.',
    },
  },
};

export default StructuredData;
