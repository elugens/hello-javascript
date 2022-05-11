const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'In JavaScript, what data type is a function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All functions in JavaScript are objects. The concept of functions as callable "action objects" is an excellent approach to thinking about them. We can not only invoke them but also treat them as objects. The add/remove properties, pass by reference, and other implementations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain why are functions Objects in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, functions are first-class objects because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions we call them. In brief, they are Function objects.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of naming logic does JavaScript use for functions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The function name-assigning logic in JavaScript is smart. It also assigns the correct name to a function even if it gets created without one. It also works if the assignment gets done via a default value. In the specification, this feature is called a "contextual name". If the function does not provide one, then it is figured out from the context of an assignment. You should not confuse this question with a question about how to name a function.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the function length property do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The function length property returns the number of function parameters (arguments). The function length property does not count rest parameters. The length property sometimes gets used for introspection in functions that operate on other functions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a function property considered a variable in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, A property assigned to a function does not define as a local variable inside it. We can treat a function as an object and store properties in it, but that does not affect its execution, and variables are not properties and vice versa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what a named function expression is in JavaScript (NFE)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Named Function Expression, or NFE, is a term for function expressions with a name. The named function acts as a value of the allocated variable, isolating it from the assigned variable. You can call the named function inside the expression, but any attempts to call it outside the function result in an error.',
      },
    },
    {
      '@type': 'Question',
      name: 'What exactly is the purpose of a named function expression (NFE)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are times when a regular function expression does not meet our needs. A named function expression gives us access to the components of a function even if the reference gets nullified on the primary variable.',
      },
    },
  ],
};

export default StructuredData;
