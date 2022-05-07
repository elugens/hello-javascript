const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Explain how the nullish coalescing operator works?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The nullish coalescing operator returns the first argument if it is not null or undefined\u2014otherwise, the second one. The nullish coalescing operator, for example, is denoted by two question marks (??).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a different method to get the same outcomes as the nullish coalescing operator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can use the NOT (!==) Equal operator to check to see if the first value is not equal to null or undefined; return the second value.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an everyday use case for a nullish coalescing operator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An everyday use case for the nullish coalescing operator is to provide a default value for a potentially undefined variable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use a chain or sequence of nullish coalescing operators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can use a sequence of nullish coalescing operators to select the first value from a list that is not null or undefined.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there another operator we use to perform the same task as the nullish coalescing operator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The OR operator can be used the same way as the nullish coalescing operator.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the primary distinction between the Nullish Coalescing Operator and the Logical OR Operator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The key distinction is that the OR operator returns the first true value, whereas the null operator returns the first specified value.<br /><br /> In other words, logical OR (||) does not differentiate between false, zero, an empty string "" and null/undefined. They\'re all the same — false values, and we obtain the second if any of them are the first arguments of ||.<br /><br /> However, we may wish to utilize the default value only when the variable is null/undefined in practice. When the value is unknown or not set, this is the case.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the nullish coalescing operator have high or low operator precedence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The precedence of the ?? operator is relatively low: 5 in the MDN table. So ?? is evaluated before = and ?. But after most other operations, such as +, *. So if we’d like to choose a value with ?? in an expression with other operators, consider adding parentheses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should the Nullish Coalescing Operator be used with the AND (&&) and OR (||) operators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Using the AND operator directly in line with the nullish coalescing operator is not recommended. It would help by wrapping the AND and OR operators in parentheses as a workaround.',
      },
    },
  ],
};

export default StructuredData;
