const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a prototype refer to in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Objects in JavaScript feature a special hidden property called [[Prototype]] (as defined in the standard), which is either null or refers to another object. We refer to this object as a prototype. JavaScript objects inherit features from one another through the use of prototypes. Objects can have a prototype object, which acts as a template object from which it inherits methods and properties to provide inheritance. JavaScript commonly gets described as a prototype-based language.',
      },
    },
    {
      '@type': 'Question',
      name: 'What exactly is a prototype in JavaScript when it comes to objects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A prototype is a fixed entity called an object. When you declare a function, it generates a prototype related to it. Furthermore, the prototype object establishes a link to its function, resulting in a circular relationship. This behavior applies to any function. Objects get created in various ways in JavaScript, and the new keyword is one method. We apply an uppercase initial letter to the function name when we declare it if we intend on utilizing the "new" keyword. (a constructor function).',
      },
    },
    {
      '@type': 'Question',
      name: 'In JavaScript prototypal inheritance, what is the value of the "this" keyword?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The answer is simple: prototypes do not affect "this", regardless of the method the location in an object or prototype. This structure is always the object before the dot in a method call.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the for-in loop behave when iterating through inherited properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you loop through the properties of an object that inherits from another, the for...in statement moves up the prototype chain and enumerates the inherited properties.',
      },
    },
  ],
};

export default StructuredData;
