const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the meaning of catastrophic backtracking in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Catastrophic backtracking is a condition that can occur if you are checking a (usually long) string against a complex regular expression. The problem usually occurs if something towards the end of the string causes the string not to match. This problem is common in some browsers like Firefox and can happen on the server-side. We should note that catastrophic backtracking is a runaway regular expression.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you prevent catastrophic backtracking in the regex engine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The solution is simple. When nesting repetition operators, ensure that there is only one way to match the exact match and prevent backtracking in these cases. The performance can sometimes improve by changing the greedy quantifiers into lazy ones, but that is not always the case. Another critical step is to attempt to debug your pattern to ensure it gets written correctly.',
      },
    },
  ],
};

export default StructuredData;
