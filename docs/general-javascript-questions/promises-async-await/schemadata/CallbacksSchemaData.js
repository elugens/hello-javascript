const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you Explain the function and syntax of the async function in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An async function is a function declared with the async keyword, and the await keyword gets permitted within them. The async and await keywords enable asynchronous, promise-based behavior, avoiding the need to configure promise chains explicitly. Async functions may also get defined as expressions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do callbacks work in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A callback is a function passed as an argument to another function, and a callback function can run after another function has finished. JavaScript functions execute in the sequence they get called, not in the defined sequence.  Functions running in parallel with other functions are called asynchronous.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can we load two scripts sequentially: the first one and the second one after it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The natural solution would be to put the second script call inside the callback. Nesting the callback helps control the flow of the script loads. After the external script is complete, the callback initiates the inner one.',
      },
    },
    {
      '@type': 'Question',
      name: 'There are times when internal/external scripts fail to load. Is there a way, in JavaScript, to handle resource (scripts) loading errors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, script loading errors get handled in a callback with the script.onerror event handler.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best alternative to nested resource loading in asynchronous coding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It looks fine for one or maybe two nested calls. As calls become nested, the code becomes more profound and increasingly more challenging to manage, especially if we have real code that may include more loops, conditional statements, and other implementations. The best alternative to alleviate the problem is to make every action a standalone function. This approach makes the code easy to manage and debug, and there are some performance advantages to boot.',
      },
    },
  ],
};

export default StructuredData;
