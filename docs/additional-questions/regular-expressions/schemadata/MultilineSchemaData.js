const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the function of the regular expression m flag?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We should use the "m" flag to specify that a multi-line input string should get treated as multiple lines. If we use the regex flag, the ^ and $ should match at the start or end of any line within the input string. Instead of the beginning or end of the whole string input, we are trying to search.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do Anchors (caret ^/ dollar sign $) behave in multiline mode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the multiline mode, they match at the beginning and the end of the string and the start/end of a line. If we do not have the m flag, we search only the first line, and each additional line gets missed. This outcome is because, by default, a caret only matches at the beginning of the text. In multiline mode, at the beginning of any line.<br />You should note that \u201CStart of a line\u201D formally means \u201Cimmediately after a line break\u201D: the test ^ in multiline mode matches at all positions preceded by a newline character \\n. And at the text start.<br />When we are dealing with the dollar sign $, it behaves similarly. The regular expression \\d$ finds the last digit in all lines.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the \\n and ^$ in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To find a new line, we can use not only anchors ^ and $, but we can also use the newline character \\n. The most notable behavior between the \\n and ^$ is that the new line only returns values in new lines. This characteristic can lead to odd behaviors where a value does not return when it exists at the end of a line. So, a \\n in the pattern gets used, we need newline characters in the result, while anchors are used to find something at the beginning/end of a line. Yes, this can be confusing, but we should be aware of it.',
      },
    },
  ],
};

export default StructuredData;
