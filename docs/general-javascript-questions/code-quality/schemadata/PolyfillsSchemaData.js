const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Describe what a JavaScript Trans-piler does?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A transpiler is a unique piece of software that can parse ("read and understand") modern code and rewrite it using older syntax constructs so that the result would be the same.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Polyfill in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A polyfill fills the gaps where newer JavaScript features may not be compatible with older browsers.',
      },
    },
  ],
};

export default StructuredData;
