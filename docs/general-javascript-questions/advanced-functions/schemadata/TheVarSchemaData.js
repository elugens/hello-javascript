const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between var and let declarations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main contrast between let and var is that the scope of a variable declared with let gets confined to the block it gets declared, whereas a variable created with var has global scope. As a result, we may argue that var is a keyword that declares a variable globally independent of block scope. When var gets compared to let, it exhibits some strange behavior. In its global state, it gets explicitly declared, where let throws an error.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the var declaration block-scoped or globally scoped?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Variables, declared with var, are either function-scoped or globally-scoped. They are visible through blocks. So, technically they have no originating scope (besides function blocks) in JavaScript.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does var work inside of a function block?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If a code block is inside a function, var becomes a function-level variable. Once the var gets used inside of a function, the function takes ownership of the var.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when you redeclare a var in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we redeclare var in the global space, then JavaScript ignores it as an error and allows the new value to overwrite the old one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what hoisting is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hoisting is the default behavior of JavaScript, which moves declarations to the top but does not initialize them. The hoisting behavior gets predicted when var gets declared after its assignment since JavaScript only hoists declarations, not initializations. A precise definition of hoisting implies that variable and function declarations physically relocate to the top of your code; however, this is not the case. Instead, variable and function declarations are stored in memory during the compilation step but remain where you typed them in your code.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a (IIFE) immediately invoked function expression, and why is it used with the old var?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the past, as there was only var, and it had no block-level visibility, programmers invented a way to emulate it. An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as the code defines it. We should not use it in modern JavaScript code, but you can still find them in old scripts. So, you should know what they are when you see them in code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to execute Function Declarations immediately in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, JavaScript does not permit the immediate execution of Function Declarations. It causes a syntax error.',
      },
    },
  ],
};

export default StructuredData;
