const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain how the Job Queue (Microtasks Queue) works?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Apart from Callback Queue, browsers have introduced one more queue, the “Job Queue”, reserved only for new Promise() functionality. Asynchronous tasks need proper management. The ECMA standard specifies an internal queue PromiseJobs, more often referred to as the “microtask queue” (V8 term). So when you use promises in your code, you add .then() method, which is a callback method. These `thenable` methods are added to Job Queue once the promise has returned/resolved and then executes. Notably, any code in the ScriptsJob returns before the return of a promise in the microtasks queue.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if the order matters for us? How can we make code run after a promise completes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most straightforward and recommended way to run code after a promise completes is to put it into the queue with the .then method.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does an unhandled rejection occur in JavaScript promises?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An “unhandled rejection” occurs when a promise error is unhandled at the end of the microtask queue. Usually, if we expect an error, we add .catch to the promise chain to handle it.',
      },
    },
  ],
};

export default StructuredData;
