const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a regular function and a constructor function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The conventional difference is the constructor function name is capitalized and invoked with the "new" operator.',
      },
    },
    {
      '@type': 'Question',
      name: 'What steps are taken by a constructor function when it gets invoked in relation to the "this" keyword?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First, a new object is created and assigned to "this", the function body executes. Usually, it modifies "this", adds new properties, and the value of this gets returned.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the primary function of constructor functions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The primary purpose of constructors is to act as the framework of object creation. It quickly allows the code to create new objects in its image. All functions that accept the arrow function can get used as a constructor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the result when using an arrow function as a constructor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any attempt to resolve "this" in an arrow function results in a type error. This behavior is especially notable when you try to use an arrow function as a constructor, resulting in a type error. A cardinal rule to remember in JavaScript development is that arrow functions have no "THIS".',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you omit the parentheses when you invoke a constructor function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, technically, when you have no arguments and this approach is permitted by the specification but not considered a good style. It would be best always to use the parentheses even when you have no arguments in your constructor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the explicit rules on return statements in constructor functions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Constructors often do not contain a return statement. Their role is to enter all relevant information into this, and it immediately becomes the outcome; nevertheless, if there is a return statement, the rule is straightforward.<br /><br />\r\n  <ol>\r\n    <li>If the return function gets used with an object, the object is returned instead of this.</li>\r\n    <li>If the return function gets invoked with a primitive, it gets ignored.</li>\r\n  </ol>',
      },
    },
  ],
};

export default StructuredData;
