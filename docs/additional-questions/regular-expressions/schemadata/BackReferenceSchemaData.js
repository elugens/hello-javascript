const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: {
    '@type': 'Question',
    name: 'What is backreferencing in regular JavaScript expressions?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'When matching string patterns using regular expressions, we might wish to match the same piece of text more than once. When the pattern used to perform the first match includes non-literal elements, we can look for the repeated text using a backreference. A backreference in a regular expression identifies a previously matched group and looks for the exact text again.',
    },
  },
};

export default StructuredData;
