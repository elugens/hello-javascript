const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a function that is a property of an object called?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A function that is a property of an object is called its method.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the programming paradigm that uses objects to represent entities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Object-oriented Programming, or OOP, is the programming paradigm that uses objects to represent entities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the "this" keyword refer to in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The "this" keyword in JavaScript refers to the object to which it belongs, and it has varying values depending on where it is used.<br /><br />\r\n  <ol>\r\n    <li>In a method, this refers to the owner object.</li>\r\n    <li>Alone, this refers to the global object.</li>\r\n    <li>In a function, this refers to the global object.</li>\r\n    <li>In strict mode, this is undefined.</li>\r\n    <li>In an event, this refers to the element that received the event.</li>\r\n    <li>Methods like call() and apply() can refer "this" to any object.</li>\r\n    <li>Arrow functions have no this.</li>\r\n  </ol>',
      },
    },
    {
      '@type': 'Question',
      name: 'What is one of the advantages of using the "this" keyword in an object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The "this" keyword holds a reference to the object and, in return, removes any effort to nullify it later in the code.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between "THIS" in a function in (strict mode) and (non-strict mode)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In strict mode, "this" returns undefined, and in the non-strict mode, it returns the global window.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the consequences of unbound "THIS"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, the “this” keyword is free. Its value is evaluated at run-time and does not depend on where the method was defined. But instead, the object that precedes the dot. The concept of run-time evaluated "this" has both pluses and minuses. On the one hand, a function can get reused for different objects, and on the other hand, greater flexibility creates more possibilities for mistakes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Since arrow functions have no "This". What is the outcome when the "THIS" keyword gets used in an arrow function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The outcome in an arrow function is a return of undefined. This outcome is because there is no access to the global window.',
      },
    },
  ],
};

export default StructuredData;
