const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you execute more than one statement in an if statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but they must be encased in curly brackets {}. Even if just one sentence has to run, this improves readability and is encouraged.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of conversion does the JavaScript \u201Cif\u201D statement use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The if (_) statement evaluates the expression in its parentheses and converts it to a true or false Boolean value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you pre-evaluate a condition for use in an if statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can pass a pre-evaluated condition in a value to an if statement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to handle falsie conditions in an if statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the \u201Cif\u201D statement may contain an optional \u201Celse\u201D block. It executes when the condition is false.',
      },
    },
    {
      '@type': 'Question',
      name: 'If you want to test a variety of circumstances. What kind of conditional statement can you use with an if statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To test several conditions in an if statement, you must add an \u201Celse if\u201D statement. There can be more than one else if block and the final else is optional.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you assign a variable depending on a condition in an if statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can assign a variable depending on a condition in an if statement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a shorthand version of the if statement that you can use in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the condition/ternary (?) operator can be used to shorten the implementation of a conditional statement.',
      },
    },
  ],
};

export default StructuredData;
