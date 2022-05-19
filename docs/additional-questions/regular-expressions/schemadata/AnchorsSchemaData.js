const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What do the caret ^ and dollar sign $ represent in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The caret ^ and dollar $ characters have special meaning in a regexp. They are called \u201Canchors\u201D. The caret ^ matches at the beginning of the text, and the dollar $ represents the end. You should note that we could use the startsWith and endsWith methods to perform the same task, which is the recommendation. We use regular expressions for more complex tests in JavaScript.',
      },
    },
    {
      '@type': 'Question',
      name: 'What approach should we use to test for a full match in RegExp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both anchors, caret, and dollar sign, together ^...$ often get used in testing whether a string fully matches the pattern. For instance, check if the user input is in the proper format.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean that Anchors (caret/dollar sign) have zero width?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They do not match a character but instead force the regexp engine to check the condition (text start/end).',
      },
    },
  ],
};

export default StructuredData;
