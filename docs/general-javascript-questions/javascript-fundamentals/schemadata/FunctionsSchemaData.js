const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the SEVEN types of functions in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The seven types of functions include the function declaration, function expression, arrow function, shorthand methods, generators, constructor functions, and JS built-in methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the definition of a JavaScript Function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A JavaScript function is a callable block of code designed to perform a particular task. Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure — a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Describe the basic structure of a JavaScript function declaration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A function declaration starts first with declaring the function keyword, then the function name, followed by a list of parameters between parentheses (comma-separated, or no parameters are okay), and finally the function body (code) inside of the curly brackets.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is one of the primary purposes of JavaScript functions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The primary purpose of functions is to avoid code duplication. If we ever need to change the message or the way it displays, it is enough to modify the code in one place based on the function which outputs it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a limitation on variables declared inside a function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, they are only visible within the function's scope; we cannot access the variable outside of the function.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can functions access variables outside the function body?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Functions can access top-level variables, variables inside of the function, and variables inside of a function that they are getting called.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Global variable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Variables declared outside of any function or code block are called global. Global variables are visible from any function (unless shadowed by locals).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Modern JavaScript rule for using Global Variables?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 't is a good practice to minimize the use of global variables. Modern code has few or no global variables, and most variables reside in their functions. Sometimes though, global variables can be helpful to store project-level data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain how you use parameters in functions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use parameters (function arguments) to pass arbitrary data to functions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when a function parameter does not get provided?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If a parameter (function argument) has no default, the value becomes undefined.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a default function parameter evaluated in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, a default parameter evaluates every time the function gets called without the respective parameter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to check for an omitted function parameter and return a new value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'a conditional statement or check in the function body. The most common way is a conditional if statement or the logical || OR operator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you implement multiple occurrences of the return statement in a single function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can implement multiple occurrences of the return statement in a single function. There are better ways to implement code without multiple return statements because it can reduce application performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to use a return statement without a value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can use a return statement without a value. We call it an empty return statement; an empty return statement exits a program and returns undefined where it gets called.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a return statement with an empty value output?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A function with an empty return or without it returns undefined.',
      },
    },
    {
      '@type': 'Question',
      name: 'You should use caution when using the return statement. What is the most important thing to remember when using a return statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most important thing to remember when using the return statement is to add a semi-colon and never add a new line between the return and the value. If you want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are good naming practices for function names?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is a widespread practice to start a function with a verbal prefix that vaguely describes the action, and there must be an agreement on the meaning of the prefixes within the team. For example, functions that get something usually start with getting like “getUserName()”. It should be brief, as accurate as possible, and describe what the function does so that someone reading the code indicates what the function does.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are best practices for the creation of a function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A function should only do what its name implies. Even if they generally get referred to as one function, two separate actions usually warrant two functions (in that case, we can make a 3rd function that calls those two).',
      },
    },
    {
      '@type': 'Question',
      name: 'Should there be a separation of the concerns in functions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is imperative to make every effort to apply separate actions in each function. Sometimes, following this rule may not be that easy, but it is the best approach.',
      },
    },
  ],
};

export default StructuredData;
