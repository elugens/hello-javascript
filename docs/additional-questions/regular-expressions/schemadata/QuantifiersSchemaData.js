const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a quantifier used for in a regular expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use a quantifier to find the exact count in a sequence of digits. For example, if we are looking for a sequence of numbers like 123-456. We can used \\d&#123;3&#125; which will return 123,456.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any shorthand alias quantifiers in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are shorthands for most used quantifiers, like \\d+ which looks for numbers and is a shorthand way for \\d&#123;1,&#125;,. Quantifiers are often employed, and they are the fundamental "building block" of sophisticated regular expressions. Using shorthand aliases can help reduce the code necessary to implement an expression.',
      },
    },
  ],
};

export default StructuredData;
