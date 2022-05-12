const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Promise object in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is a proxy for a value not necessarily known when the promise gets created. It enables you to attach handlers with an asynchronous operation to provide a success or failure result. This process lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the method returns a promise to supply the value later. A Promise is in one of three states, including pending, fulfilled, and rejected. The pending state is the initial state, neither fulfilled nor rejected. The fulfilled state means that the operation was ultimately successful, and the rejected state means that there was an apparent failure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the function called that we pass to the newly created promise?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The executor is the function that gets supplied to a new Promise. The executor launches automatically when a new Promise gets produced. It contains the code that eventually provides the result. Its arguments resolve and reject JavaScript callbacks, and only the executor gets access to our code. When the executor receives the result, whether early or late, it should call one of these callbacks (resolve, reject). Successful completion with the outcome value gets characterized as resolved. If an error occurs, Reject includes the Error object and executes it. To summarize, the executor is a program that runs automatically and attempts to perform a job. When the attempt gets made, it calls to resolve if it was successful or reject if there was an issue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you name the properties that the promise object returned by the Promise constructor has internally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The promise object contains four internal properties, including state and result. The state is initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called. The result property is initially undefined, then changes to value when resolve(value) gets called or an error when the reject(error) gets called. So, the executor eventually moves the promise to one of these states.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a promise that is either resolved or rejected called?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A promise that is either resolved or rejected is called “settled” instead of an initially “pending” promise.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the main limitation of a Promise in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main limitation is that there can be only a single result or error. The executor should call only one resolve or one reject. Any state change is final; all further resolve calls and `reject` are ignored. The idea is that a job done by the executor may have only one result or an error. Also, resolve/reject excepts only one argument (or none) and ignores additional arguments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three subscribing (consumers) methods/functions used in Promises?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Promise object is a link between the executor and the consuming functions, which receive the result or error. Consuming functions can be registered using methods .then, .catch and .finally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the promise then() method/function in JS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise. The first argument of .then is a function that runs when the promise is `resolved` and receives the result. The second argument of .then is a function that runs when the promise is `rejected` and receives the error. If we are interested only in errors, we can use null as the first argument ( .then(null, errorHandlingFunction); ). The then method/function returns a Promise which allows for method chaining.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the promise catch() method/function in JS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The catch() method returns a Promise and deals with rejected cases only. It behaves the same as calling Promise.prototype.then(undefined, onRejected) (in fact, calling obj.catch(onRejected) internally calls obj.then(undefined, onRejected)). This means that you have to provide an onRejected function even if you want to fall back to an undefined result value - for example obj.catch(() => &#123;&#125;).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the promise finally() method/function in JS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The `finally` method schedules a function for executing when the promise gets settled, either fulfilled or rejected.',
      },
    },
    {
      '@type': 'Question',
      name: 'In JavaScript, what are the advantages of promises versus callbacks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Promises allow us to do things in the natural order. We can call .then on a Promise as many times as we want. Each time we add a new subscribing function to the “subscription list”, it returns a new promise. This approach allows us to chain our promises without the limitations of a callback. We can immediately see a few benefits over the callback-based pattern. So, promises give us better code flow and flexibility.',
      },
    },
  ],
};

export default StructuredData;
