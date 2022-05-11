const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the three types of variable declarations in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are three types of variable declarations in JavaScript, including let, const, and the var legacy variable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a code block or block statement (compound statement) in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use a block statement or compound statement to group zero or more statements encapsulated in curly brackets.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the benefits of a JavaScript code block or block statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main benefit is isolating a portion of your code, which improves control and reduces errors in your application.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does JavaScript support nested functions? How do they work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, nested functions have interesting scoping rules in JavaScript. A nested function can access any variables and parameters of their outer parent function(s). This behavior allows us to give the parent function additional dynamic features. Nested functions are pretty standard in JavaScript because of their dynamic abilities, which allow an extension of the originating function.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what is the Lexical Environment is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '"Lexical Environment" is a specification object: it only exists "theoretically" in the language specification to describe how things work. We cannot access this object in our code and manipulate it directly. JavaScript engines may also optimize it, discard unused variables to save memory, and perform other internal tricks if the visible behavior remains as described. The Lexical Environment object consists of two parts, including the environment record and a reference to the outer lexical environment. The Environment Record is an object that stores local variables as its properties (and some other information like the value of this).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain how a variable works in the context of a JavaScript engine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A variable is just a property of the special internal object called the Environment Record. To access or change a variable means to get or manipulate a property of that object.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the distinction between a function declaration and a variable declaration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A function is also a value, like a variable. The difference is that a Function Declaration is fully initialized when the script loads. When a Lexical Environment gets created, a Function Declaration immediately becomes a ready-to-use function. You should be aware that this only applies to function declarations, not function expressions.',
      },
    },
    {
      '@type': 'Question',
      name: 'In JavaScript, what is a closure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A closure is a function that remembers its outer variables and can access them. In some languages, that is impossible, or a function is written in a special way to make it happen. In JavaScript, all functions are naturally Closures (there is only one exception, The "new Function" syntax). Functions automatically remember where their point of creation is using a hidden [[Environment]] property, and then their code can access outer variables. This should not be confused with a code block.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does garbage collection work with the Lexical Environment and nested functions in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After the function call completes, a Lexical Environment typically disappears from memory and all variables. This behavior occurs because there are no references to it, and it is only retained in memory while it is accessible, just like any other JavaScript object. If a nested function is reached after the end of a function, it contains the [[Environment]] attribute, which refers to the lexical environment. In such a situation, the Lexical Environment is still available even after the function completes, therefore, it remains alive. When a Lexical Environment object becomes inaccessible, it dies (like any other object). In other words, it persists as long as there is at least one nested function that refers to it.',
      },
    },
  ],
};

export default StructuredData;
