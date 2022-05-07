const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an operand in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Operands are expressions or values on which an operator operates or works (often constants or variables, but sub-expressions are also permitted).',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the difference between a Binary and a Unary operand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two types of mathematical operators: unary and binary. Unary operators act with a single operand, and Binary operators perform actions with two operands. Unary operators are arithmetic operators that act on a single operand.',
      },
    },
    {
      '@type': 'Question',
      name: 'What basic mathematical operations are allowed in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The basic mathematical operations include addition, subtraction, multiplication, division, remainder or modulo, and exponentiation.',
      },
    },
    {
      '@type': 'Question',
      name: 'In JavaScript, what is the remainder/modulo operator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The remainder operator is used to find the remainder of two arguments (operands/values).',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the exponentiation operator function in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The exponentiation operator multiplies a number by itself a specified number of times. It is like the caret (^) operator in python.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can exponentiation be defined for non-integer numbers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mathematically, the exponentiation operator gets defined for non-integer numbers. We should note that the exponent used on fractions requires parentheses to ensure proper programmatic conversion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to concatenate strings in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, We can implement string concatenation using the binary plus operator or the concat method.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does unary plus work on single values?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unary (+) plus has no conversion effect on numbers, but it converts non-numbers like strings to numbers. JavaScript also has a built-in Number(value) method that you can use to achieve the same output.',
      },
    },
    {
      '@type': 'Question',
      name: 'If you have two strings and wish to add their values together. What technique would you use to convert both strings to integers to prevent concatenating the values into a single string?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Since both numbers are strings (\u201C4\u201D + \u201C4\u201D = \u201C44\u201D). You can use an implicit or explicit approach to solve the problem. The implicit approach requires the use of unary plus applied to the left and right operand (+\u201C4\u201D + +\u201C4\u201D = 8). The second approach is the explicit use of the built-in Number Object ((Number( \u201C4\u201D) + Number( \u201C4\u201D)  = 8).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most prominent characteristic of all operators in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All JavaScript operators return a value, including the assignment (=) operator.',
      },
    },
    {
      '@type': 'Question',
      name: 'In what direction do chained assignments evaluate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chained assignments evaluate from right to left.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the major issue with chained assignments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If chained assignments get implemented incorrectly, it can lead to memory leaks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between increment and decrement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Increment increases a variable by one, and decrement decreases a variable by one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can increment/decrement operators be applied to numbers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, We should only use increment/decrement with <strong>variables</strong>. Trying to use it on a value like 5++ gives an error.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are operators ++ and -- placed before or after a variable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The operators ++ and -- get placed before or after a variable. When the operator goes after the variable, it is in \u201Cpostfix position\u201D: counter++. The \u201Cprefix position\u201D is when the operator goes before the variable: ++counter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there any difference between the postfix and prefix increment/decrement positions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the prefix form ++counter increments counter and returns the new value. The postfix form counter++ also increments the counter but returns the old value before being incremented.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the ++/-- operators be used within expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically, yes, but it is not advisable because it reduces the readability of our code.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do Bitwise operators treat arguments as 16-Bit, 24-Bit, or 32-Bit integer numbers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the comma operator used for in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The comma operator allows us to evaluate several expressions, dividing them with a comma. Each of them gets evaluated, but only the result of the last one gets returned.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do we need the comma operator that throws away everything except the last expression in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sometimes, people use it in more complex constructs to put several actions in one line, and it is not a standard or recommended approach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the comma operator have high or low precedence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The comma operator has exceptionally low precedence, lower than the assignment operator.',
      },
    },
  ],
};

export default StructuredData;
