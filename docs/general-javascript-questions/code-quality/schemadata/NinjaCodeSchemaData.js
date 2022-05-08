const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are one-letter variables a practical idea to use in programming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, they can confuse developers in a team environment and make it harder to debug your code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it a good idea to abbreviate variable and function names?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, they can confuse a team coders environment and make it harder to debug your code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it a good idea in JavaScript to overlap variables?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, they can generate confusion in a collaborative atmosphere and make debugging your code more complex. Overlapping is not a good idea since it might lead to mistakes farther down in your code's layers.",
      },
    },
  ],
};

export default StructuredData;
