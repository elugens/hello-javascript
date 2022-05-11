const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the three types of binding techniques in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, there are three types of binding techniques Window, Implicit, and Explicit function binding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what explicit function binding is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Window, Implicit, and Explicit function binding are JavaScript\'s three types of binding strategies. Explicit binding compels a function call to bind to a specific context object by utilizing call, apply, or bind. These predefined JavaScript methods get passed down to all functions via the function prototype. Functions have a method bind that allows us to fix "this." Binding is the ideal option for tying the context to the correct object and preventing "this" from being lost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the function bind() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The bind method generates a new function that, when called, sets the "this" keyword to the provided value, with a specified sequence of arguments preceding any arguments provided when the new function gets invoked. Bind creates a new function that may be called later in the code while keeping the desired context binding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what a partial function application is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A partial function application in JavaScript refers to the process of fixing several arguments to a function and, in the process producing another function of smaller arity.',
      },
    },
  ],
};

export default StructuredData;
