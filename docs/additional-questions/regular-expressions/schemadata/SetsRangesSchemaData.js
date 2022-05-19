const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do square brackets [\u2026] perform in regular expression sets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Several characters or character classes inside square brackets [\u2026] mean to \u201Csearch for any character among given\u201D. For example, [eao] means any of the 3 characters: 'a', 'e', or 'o'. That is called a set in regex terminology. We use sets in a regular expressions along with recurring characters. We should note that although there are multiple characters in the set, they correspond to exactly one character in the match.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain how range gets set in a regular expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In simple terms, a range in a regular expression is denoted or expressed inside of square brackets. A range may be from [a-z] or [1-100]. These settings can be set based on your needs. We can also use character classes inside [\u2026]. For example, if we would like to look for a wordy character \\w or a hyphen -, then the set is [\\w-]. Combining multiple classes is also possible, e.g. [\\s\\d] means \u201Ca space character or a digit\u201D.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to handle Han (Chinese) or Cyrillic in regexp ranges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can write a universal pattern that looks for wordy characters in any language. That is easy; we would use the Unicode properties in regular expressions. You should note that Internet Explorer does not support Unicode properties, and if we need them, we can use library XRegExp for IE users.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you exclude a range of characters in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we want to exclude a range of characters in a regular expression. We can place the caret ^ character at the start and match any character except the ones we are trying to match.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do we have to escape special characters in regex sets or ranges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, there is no need to escape special characters in regex ranges or sets. The only characters that we escape are the caret ^ and the closing bracket, and they are not escaped in the technical sense but rather implicitly. This technicality does not mean we cannot escape characters, but it is not necessary in most cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the recommended way to match against surrogate pairs in a set or range?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If there are surrogate pairs in the set, flag u is required for them to work correctly. This requirement also applies to a range of surrogate pairs.',
      },
    },
  ],
};

export default StructuredData;
