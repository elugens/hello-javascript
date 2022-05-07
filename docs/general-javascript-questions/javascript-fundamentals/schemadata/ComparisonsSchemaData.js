const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do all comparison operators return a Boolean value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, every comparison yields a true or false Boolean value.\r\n- true \u2013 means \u201Cyes\u201D, \u201Ccorrect\u201D or \u201Cthe truth\u201D.\r\n- false \u2013 means \u201Cno\u201D, \u201Cwrong\u201D or \u201Cnot the truth\u201D.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does JavaScript compare strings to see if their greater or less than another?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript uses \u201Clexicographical\u201D order. JavaScript compares letter-by-letter based on their Unicode value.',
      },
    },
    {
      '@type': 'Question',
      name: 'When comparing values of different types, does JavaScript convert the values to numbers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, when comparing values of different types, it converts the values to numbers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible that two values are equal at the same time if one is true as a Boolean and the other one is false as a Boolean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When there is an explicit conversion to a Boolean on values. A string and a number, such as a number 0 and string \u201C0\u201D. The return value for the string returns true, and it returns false for the number. When we attempt to compare the two using the equality operator, the return value returns true, but it returns false with the strict equality operator.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a regular and strict equality check?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The regular equality check loosely compares values with type conversion. In contrast, the strict-equality check compares the value and the data type without converting the types.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a benefit of using the strict equality operator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The strict equality operator is a bit longer to write but makes it obvious what is going on and leaves less room for errors.',
      },
    },
    {
      '@type': 'Question',
      name: 'What value returns when null and undefined get compared using the strict equality operator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'False because each of them is a different type, but the non-strict operator returns true. For math and other comparisons such as greater and less than null/undefined are converted to numbers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is comparing undefined to other values a good or bad idea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bad Idea, You should never compare undefined to other values.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are two ways to avoid problems with undefined/null values?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We should avoid using undefined or null in anything less than strict comparisons and never use comparisons with an undefined or null value.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the if statement work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The \u201Cif\u201D statement evaluates a condition and executes a code block if the result is true.',
      },
    },
  ],
};

export default StructuredData;
