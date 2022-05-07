const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a function \u201Ca function\u201D, object, or both?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, functions are first-class objects because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions get called. In simple terms, they are Function objects.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between a function declaration and a function expression?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Function declarations load before any code executes, while Function expressions load only when the interpreter passes the right side of the expression. A global Function Declaration is visible in the whole script, no matter where. Function Declarations are functions declared as a separate statement in the main code flow. Function Expressions are functions created inside an expression or another syntax construct.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is hoisting, and how does it affect function declarations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hoisting refers to the availability of function declarations and variables (with var) \u201Cat the top\u201D of your code instead of only after they get created. The function objects are initialized immediately and available everywhere in your code.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between using a function declaration versus a function expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should use function declarations when you want to create a function on the global scope and make it available throughout your code. Use function expressions to limit where the function is available, keep your global scope light, and maintain clean syntax.',
      },
    },
    {
      '@type': 'Question',
      name: 'Describe a function expression\u2019s code structure and behavior?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The function expression structure explicitly creates and assigns a variable to the function. A function name can get omitted, making it an anonymous function. If a name is assigned, the name gets localized to the function. The function expression can also assign parameters, if necessary. The expression body, like regular functions, encloses the actions that the function performs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are functions values in JavaScript? If yes, explain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a function is a value so we can deal with it as a value. You can copy a function by reference to create a new copy like you would with a regular variable and value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is there a semicolon at the end of a function expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A function expression uses a semi-colon because we declare it by assignment, and all assignments must use a semi-colon to terminate the statement. There\u2019s no need for a semicolon ( ; ) at the end of code blocks and syntax structures that use them like if { ... }, for { }, function f { } etc.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a callback function in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A callback function gets passed into another function as an argument; it gets invoked inside the outer function to complete a routine or action.',
      },
    },
  ],
};

export default StructuredData;
