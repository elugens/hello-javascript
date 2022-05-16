const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Mutation Observer? How does it interact with a DOM tree?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MutationObserver is a built-in object that observes a DOM element and fires a callback when it detects a change. It was designed to replace the older Mutation Events feature, part of the DOM3 Events specification.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Mutation Record, and how does it interact with a Mutation Observer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A MutationRecord represents an individual DOM mutation, and it is the object that gets passed to MutationObserver's callback.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you give a use case for a MutationObserver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A good use case is when you need to add a third-party script that contains proper functionality and does something unwanted, like injecting unwanted HTML elements. Naturally, the third-party script provides no mechanisms to remove it. Using MutationObserver, we can detect when the unwanted element appears in our DOM and remove it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to stop observing or disconnecting the MutationObserver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can stop or disconnect the observer by calling the `disconnect()` method. It tells the observer to stop watching for mutations. We can reuse the observer by calling its `observe()` method again.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to ensure the processing of changes when there is a disconnect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "When we cease observing, it's conceivable that the observer hasn't yet processed some changes. In such instances, we employ the observer. `observer.takeRecords()` returns a list of unprocessed mutation records that occurred but remained handled by the callback.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does garbage collection work with Observers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Internally, observers employ weak references to nodes. A node can be trash collected if it is deleted from the DOM and becomes inaccessible, and the observation of a DOM node does not stop garbage collection.',
      },
    },
  ],
};

export default StructuredData;
