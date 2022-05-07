const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes the logical || (OR), && (AND), ! (NOT) operators unique?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can apply logical operators to values of any type; logical operators are not limited to a Boolean type.',
      },
    },
    {
      '@type': 'Question',
      name: 'If an operand is not a Boolean, what does the logical || OR do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If an operand is not a Boolean, it converts to a Boolean for the evaluation. For instance, the number 1 gets treated as true, and the number 0 is false.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does logical OR \u201C||\u201D function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The OR || operator does the following:\r\nThe OR || operator does the following:<br /><br />\r\n  <ol>\r\n    <li>Operands evaluate from left to right.</li>\r\n    <li>Converts each operand to a Boolean value, and if the result is true, the program terminates and returns the operand's original value.</li>\r\n    <li>Returns the final operand if all operands get evaluated (i.e., all were false).</li>\r\n  </ol>",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the definition of a short-circuit evaluation in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When JavaScript evaluates an OR expression, JavaScript short-circuits by not proceeding to the second operand if the first operand is true.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Logical && (AND) return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Logical && (AND) returns true if both operands are truthy and false otherwise.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of conversion does the Logical && (AND) perform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Logical && (AND) converts all operands to Boolean values, true or false.',
      },
    },
    {
      '@type': 'Question',
      name: 'What steps does JavaScript perform when using the Logical && (AND) operator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The AND && operator performs the following functions:<br /><br />\r\n  <ol>\r\n    <li>Operands evaluate from left to right.</li>\r\n    <li>Converts each operand to a Boolean value, and if the result is false, the program terminates and returns the operand's original value.</li>\r\n    <li>It returns the final operand if all operands get evaluated (i.e., all were true).</li>\r\n  </ol>",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the differences between Logical || (OR) and Logical && (AND) operators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The difference is that AND returns the first falsie value while OR returns the first truthy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which of the two, Logical || (OR) and && (AND) operators have the higher operator precedence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The precedence of the AND && operator is greater than that of the OR || operator. As a result, the code a && b || c && d is effectively the same as if the && expressions were enclosed in parentheses: (a && b) || (c && d).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you replace conditional if with OR (||) or && (AND)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically, we can do it, which goes against recommendations. Although the variant with && appears shorter, an if statement is more prominent and tends to be more readable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What steps does JavaScript perform when implementing the Logical! (NOT) operator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The operator accepts a single argument, converts it to a Boolean, and returns the inverse value.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when we apply the !! (DOUBLE NOT) to a value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first NOT changes the value to Boolean and returns the inverse, whereas the second NOT reverses the process. Finally, we have a simple Value-to-Boolean translation (Boolean conversion).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a built-in object that performs in the same fashion as the !! (DOUBLE NOT) operator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The built-in Boolean object performs this in the same fashion as the !! (DOUBLE NOT) operator.',
      },
    },
    {
      '@type': 'Question',
      name: 'What has the highest operator precedence over all the logical operators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && (AND) or || (OR).',
      },
    },
  ],
};

export default StructuredData;
