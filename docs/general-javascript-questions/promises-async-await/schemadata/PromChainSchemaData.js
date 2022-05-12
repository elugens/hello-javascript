const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the definition of promise chaining in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chaining promises is why we have promises in the first place. It is proper to tell JavaScript the next thing to do after an asynchronous task is done, thus avoiding the pyramid of doom typically associated with nested callbacks. It also reduces the complexity of your code and increases readability.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a typical error made by new JavaScript developers when it comes to promises chaining?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A classic mistake made by new developers is breaking the promises chain. New developers can often attempt to separate or break the chain for readability or lack of knowledge. Although technically, we can also add many “.then” to a single promise. This method isn't considered chaining since it adds numerous handlers to a single promise without passing the result. Instead, they process the result independently from one another. We rarely need multiple handlers for one promise in practice, and chaining often gets used.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you briefly explain the benefits of returning a new promise in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A handler, used in .then(handler), may create and return a new promise. In that case, further handlers wait until it settles and then return its result. Returning promises allows us to build chains of asynchronous actions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you briefly explain what a thenable is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A “thenable” object is an arbitrary object that has a method .then. It gets treated the same way as a promise. The idea is that 3rd-party libraries may implement “promise-compatible” objects of their own. They can have an extended set of methods and be compatible with native promises, because they implement .then. This feature allows us to integrate custom objects with promise chains without having to inherit from Promise.',
      },
    },
  ],
};

export default StructuredData;
