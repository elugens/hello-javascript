const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the definition of an arrow function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An arrow function expression is a compact alternative to a traditional function expression, but it is limited, and we should not use it in all situations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the differences and limitations between Arrow Functions and Function Expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An arrow function does not have bindings to this or super, and we should not use it as a method or constructor. Also, it is not suitable for the call, apply, and bind methods.<strong>Differences & Limitations:</strong> It does not have its binding to this or super and should not get used as a method. It does not have arguments or new.target keywords. Not suitable for the call, apply and bind methods, which generally rely on establishing a scope. It cannot get used as a constructor. It cannot use yield within its body.',
      },
    },
    {
      '@type': 'Question',
      name: 'If there are no arguments in an arrow function, do you need to add the parentheses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if there are no arguments, then the parentheses should be present in your arrow function. Otherwise, it throws a syntax error.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you dynamically create a function with an arrow function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is possible to create an arrow function in JavaScript dynamically. An example is a ternary statement that returns two anonymous arrow functions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a single and multiline statement in an arrow function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A multiline statement must get enclosed in curly brackets, but we can omit the curly brackets in a single-line statement.',
      },
    },
  ],
};

export default StructuredData;
