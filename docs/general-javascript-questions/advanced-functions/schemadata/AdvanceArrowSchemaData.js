const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an arrow function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An arrow function is a compact alternative to a traditional function expression but is limited, and we cannot use it in all situations. Arrow Functions lack bindings to "this" or "super", and you should not utilize them as methods. They also have no access to the arguments or the new.target keywords. You should note that arrow functions are not agreeable with the call, apply, and bind methods that generally rely on establishing scope. They cannot be used as constructors and cannot use yield within their bodies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the meaning of Arrow functions having no THIS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unlike regular functions, Arrow functions do not have a this of their own; only regular functions and global scope have this of their own. Whenever "this" gets referenced in an arrow function, it begins by going up the scope to locate " this " value. Suppose the object does not have a "this" during the lookup. It goes up the global scope and binds the value of "this" to the global scope where nothing gets found.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain why you cannot use the new.target keyword with Arrow Functions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The reason you cannot use the new.target keyword with Arrow Functions is that it has no constructor, [[Construct]] internal method.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the distinction between the Arrow and Regular functions for binding this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is a subtle difference between an arrow function and a regular function called with bind(this). The bind(this) syntax creates a "bound version" of a regular function, and the arrow does not create any binding. So, the arrow function does not have "this". The lookup of "this" is made the same way as a regular variable search in the outer lexical environment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain one benefit of Arrow functions having no arguments variable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, arrow functions can be used in decorators to reduce code size. You can pass the arguments variable in a wrapper because arrow functions do not bind to the arguments object. This behavior gives you the ability to reduce code and write simple abstractions in JavaScript.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the definition of a Higher-Order function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Functions that operate on other functions are called higher-order functions, either by taking them as arguments or returning them.',
      },
    },
  ],
};

export default StructuredData;
