const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a word boundary \\b in regular expressions (regexp)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A word boundary \\b is a test, just like ^ and $. When the regexp engine (program module that implements searching for RegExp) comes across \\b, it checks that the position in the string is a word boundary. Three different positions qualify as word boundaries in regular expressions. For instance, if the first string character is a word character \\w. Also, between two characters in the string, where one is a word character \\w, and the other is not, and at the string end if the last string character is a word character \\w. We can use \\b not only with words but also with digits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a word boundary work on Non-Latin alphabets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The word boundary test \\b checks that there should be \\w on the one side from the position and "not \\w" \u2013 on the other side. But \\w means a Latin letter a-z (or a digit or an underscore), so the test does not work for other characters, e.g., Cyrillic letters or Hieroglyphs.',
      },
    },
  ],
};

export default StructuredData;
