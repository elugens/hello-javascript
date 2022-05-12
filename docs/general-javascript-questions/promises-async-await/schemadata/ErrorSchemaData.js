const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is error handling achieved with promises in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a promise rejects, the control gets sent to the nearest rejection handler. An error may occur while attempting to return a promise. The catch method is the simplest way to handle error handling. The dot catch does not have to be instant, and it might emerge after one or more dot thens.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an implicit try…catch concerning promises in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The code of a promise executor and promise handlers have an "invisible try..catch" around it. If an exception happens, it gets caught and treated as a rejection. This outcome happens not only in the executor function but also in its handlers. If we throw inside a .then handler, that means a rejected promise, so the control jumps to the nearest error handler. This outcome happens for all errors, not just those caused by the throw statement, including programming errors.',
      },
    },
    {
      '@type': 'Question',
      name: "In a regular try..catch, we can analyze the error and maybe rethrow it if we can't handle it. Is the same thing possible for promises?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the same thing is possible for promises. If we throw inside .catch, the control goes to the next closest error handler, and if we handle the error and finish usually, it continues to the next closest successful .then handler.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when an error is unhandled in a promise?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In practice, something has gone wrong, just like with regular unhandled code errors. The script terminates with an error message on the console. Unhandled promise rejections behave similarly, and the JavaScript engine monitors such rejections and emits a global error in such cases. We may catch such errors in the browser by utilizing the event `unhandledrejection`.',
      },
    },
  ],
};

export default StructuredData;
