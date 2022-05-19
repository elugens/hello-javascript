const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a well-known rule for developing complex software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The well-known rule for developing complex software is not to make complex software. If something becomes complex, split it into simpler parts and connect it in the most obvious way. A good architect can make the complex simple.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a component in web architecture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web Components is a suite of different technologies that allow you to create reusable custom elements. Their functionality is encapsulated away from the rest of your code and utilized in your web apps.',
      },
    },
  ],
};

export default StructuredData;
