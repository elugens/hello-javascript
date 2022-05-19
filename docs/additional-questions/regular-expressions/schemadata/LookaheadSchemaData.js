const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the Lookahead approach in a regular expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sometimes, we need to find only those matches for a pattern that are followed or preceded by another pattern. The lookahead approach involves catching a match based on a proceeding character or digit. For example, the syntax is: X(?=Y), which means "look for X, but match only if followed by Y". There may be any pattern instead of X and Y. Notably, the lookahead is merely a test. The contents of the parentheses do not get included in the result.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between regex Lookahead and Lookbehind?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lookahead allows us to add a condition for \u201Cwhat follows\u201D. Lookbehind is similar, but it looks behind to find the target.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the Lookbehind approach in a regular expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lookbehind is like the lookahead approach. The difference is that they are the opposite, where lookahead value matches a value that proceeds it. While the lookbehind value matches the value proceeds it. It allows us to match a pattern only if the target value is before it. We can also use the negative lookbehind approach. The negative lookbehind approach allows us to set a test where the target should not be behind the pattern value. You should note that the contents inside lookbehind parentheses do not become a part of the result.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you apply a capturing group to a lookaround in a regular expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this is possible for both the lookahead and lookbehind (They are lookarounds) to apply the lookaround approach. The lookaround is zero-length making it Atomic. As soon as the lookaround condition is satisfied, the regex engine forgets about everything inside the lookaround, and it does not backtrack inside the lookaround to try different permutations.<br /><br />The only situation in which this makes any difference is when you use capturing groups inside the lookaround. Since the regex engine does not backtrack into the lookaround, it does not try different permutations of the capturing groups.',
      },
    },
  ],
};

export default StructuredData;
