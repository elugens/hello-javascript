const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What are the Promise class's six static methods?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The promise class has 6 static methods, including the promise.all, allSettled, race, any, resolve and reject methods. Of all these, Promise.all is probably the most common in practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Promise.all static methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Promise.all() method takes an iterable of promises as an input. Then returns a single Promise that resolves to array of results, technically can be any iterable but its usually an array. This returned promise resolves when all the input's promises resolve or if the input iterable contains no promises. It rejects immediately upon any input promises rejecting or non-promises throwing an error and rejects with this first rejection message/error. The new promise resolves when all listed promises settle, and the array of their results becomes its result.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does the map method work with Promise.all static method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Since the map method creates a new array populated with the results of the calling function. The map method is an excellent adhesive for the Promise.all method because it carries some of the responsibility of providing the calling function on every array element.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when there is an error with the Promise.all method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones on the list. Their results get ignored.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Promise.all allow regular values in the iterable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Promise.all(iterable) allows non-promise “regular” values in the iterable. Typically, Promise.all(...) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it is passed to the resulting array “as is”.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the static method, Promise.allSettled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Promise.allSettled() function produces a promise that resolves once all of the specified promises have been fulfilled or refused. This behavior happens together with an array of objects that specify the outcome of each promise. You typically use it when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you would like to know the result of each promise. In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other / if you'd like to reject upon any of them getting rejected immediately.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Promise.race static method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Like Promise.all but waits only for the first settled promise and returns its result (or error). The Promise.race() method returns a promise that fulfills or rejects when one of the promises in an iterable is fulfilled or rejected, with the value or explanation derived from that promise.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Promise.any static method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Similar to Promise.race, but waits only for the first fulfilled promise and returns its result. If all of the given promises reject, the returned promise rejects with Aggregate Error – a special error object that keeps track of all promise errors in its errors property.',
      },
    },
    {
      '@type': 'Question',
      name: "Can you explain the Promise.resolve static method's function and syntax?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Promise.resolve() method returns a Promise object that resolves with a given value. If the value is a promise, that promise returns; if the value is a `thenable` (i.e. has a "then" method), the returned promise will "follow" that `thenable`, adopting its eventual state; otherwise, the returned promise fulfills with the value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Promise.reject static method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Promise.reject() method returns a Promise object that rejects for a given reason. The static Promise.reject function returns a Promise that rejects. Making reason an instance of Error is essential for debugging and selective error catching.',
      },
    },
  ],
};

export default StructuredData;
