const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'In Simple terms, what are loops used for in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Loops are a way to repeat or iterate over the same code multiple times.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain how a while loop works?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The while loop iterates if a given condition is met and exits the loop when the condition no longer exists.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the definition of an iteration in a JavaScript loop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single execution of the loop body is called an iteration in software engineering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a while loop require an explicit incrementor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the incrementor is required to continue the iterations. If it is missing, then the process is killed immediately after the first iteration or can result in an endless loop. This process all depends on whether you are incrementing or decrementing the loop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are curly brackets required in a single-line loop body?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, If the loop body has a single statement, we can omit the curly braces.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Do-While and While Loop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The do-while loop conditional check is at the end of the loop. In a while loop, the condition is at the beginning of the loop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain, How the Do-While loop works?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The loop first executes the body, checks the condition, and executes it again while it is truthy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain, How the For-Loop works?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The for loop sets a starting point, condition, and steps. The starting point executes once upon entering the loop. The condition gets checked before every loop iteration. The loop body runs again and again while the condition is truthy. If false, the loop terminates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a For-Loop inline variable declaration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inline variable declaration is the process of declaring a variable starting point inside of the for-loop. The variable is only visible inside the loop and cannot be accessed globally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to skip or omit parts of the for-loop settings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is possible to omit parts or all the for-loop settings. If you remove all the parts, it results in an endless loop. Please note that the two semicolons (;) must be present, and otherwise, there would be a syntax error.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you stop a JavaScript loop based on a specific condition?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, You can achieve this by using the break directive or statement to stop the loop at any time. This approach is ideal for cases when you need to pause the loop in the middle or at various points along its length. The break directive works with all traditional looping structures. (It does not work with forEach).',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the continue directive (statement) work in a loop? Does it stop the whole loop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The continue directive is a "lighter version" of the break statement. It does not stop the whole loop; instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the break statement and the continue directive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The break statement stops the loop in the middle or several places of its body. The continue directive is a \u201Clighter version\u201D of break. It does not stop the whole loop; instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a potential benefit of using the continue directive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The continue directive helps decrease nesting and increases code readability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the continue or break directives be used with the shorthand ternary (?) expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, the continue or break directives on a ternary operator's right side (?) result in a syntax error.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you break out of two nested for loops?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can use a label to break out of two nested for loops, and the break directive targets the label to ensure that both loops halt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can labels jump to an arbitrary place in the code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, Labels do not allow us to jump into an arbitrary place in the code. A call to break/continue is only possible from inside a loop, and the label must be somewhere above the directive.',
      },
    },
  ],
};

export default StructuredData;
