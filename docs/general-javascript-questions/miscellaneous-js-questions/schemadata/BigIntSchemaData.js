const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you briefly explain what a BigInt is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BigInt is a unique numeric type that allows integers of any length. A BigInt gets formed by attaching n to the end of an integer literal or by using the BigInt function, which generates BigInts from strings, numbers. BigInt gets used chiefly as a regular integer. All operations on BigInts return BigInts. BigInts and regular numbers cannot be blended. If necessary, we should explicitly convert them using BigInt() or Number(). The conversion procedures are always quiet and never produce errors, but if the BigInt is too huge, it won’t fit the number type, and excess bits get chopped off; thus, we should exercise caution while doing such conversions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the division operator interact with BigInts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When we use BigInts with the division operator, it rounds the BigInt towards zero. All operations on BigInts return BigInts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when you mix regular numbers with BigInts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We should never mix BigInts and regular numbers in mathematical operations because they result in errors. If needed, we should explicitly convert them using BigInt() or Number().',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to use the unary operator on BigInts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, we should use Number() to convert a BigInt to a number.',
      },
    },
    {
      '@type': 'Question',
      name: 'Although comparisons work with BigInt, what should you always remember?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comparisons, such as (&#8249; &#8250;) work with BigInts and numbers without issue, but as numbers and BigInts belong to different types, they can be equal ==, but not strictly equal === each other.',
      },
    },
  ],
};

export default StructuredData;
