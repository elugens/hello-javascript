const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: {
    '@type': 'Question',
    name: 'What does the regex flag \u2018Y\u2019 do in regular expressions?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'The flag y allows us to perform the search at the given position in the source string. The flag y makes regexp.exec(str) search strictly at position lastIndex, not \u201Cstarting from\u201D it. There is a critical performance gain when using flag y.',
    },
  },
};

export default StructuredData;
