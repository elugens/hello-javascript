const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between Map and WeakMap in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first difference between Map and WeakMap is that keys must be objects, not primitive values. WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to extract all the keys or values from it. Also, WeakMap is limited to the following methods, including get, set, delete, and has methods. Why such a limitation? That is for technical reasons. If an object has lost all other references, it gets garbage-collected automatically. But technically, it is not precisely specified when the cleanup happens.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some use cases in applications for a WeakMap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main area of application for WeakMap is an additional data storage, such as third-party data that you may not have an indefinite use. Another typical example is caching. We can store (“cache”) results from a function so that future calls on the same object can reuse.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a Set and WeakSet in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both Set & WeakSet are key-based collections but with some crucial differences. Like Set, the WeakSet constructor takes in an iterable object as input. The main difference is that WeakSet can only contain objects & not any other type. The other main difference is that references to objects in a WeakSet hold “weakly” in the object. This difference means that garbage gets collected if there is no other reference to an object in the WeakSet. The same is not valid for Set. An object stored in a Set does not get garbage collected even if nothing references it. This distinction is important because, for this reason, there is no way to access or iterate over objects stored inside a WeakSet. We also do not have access to the size of the weak set for this exact reason.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most notable limitation of WeakMap and WeakSet in JS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most noteworthy constraint of WeakMap and WeakSet is the absence of iteration and the inability to extract all current content. That may appear inconvenient but does not prevent WeakMap/WeakSet from doing their primary job in “additional” data storage for objects stored/managed elsewhere.',
      },
    },
  ],
};

export default StructuredData;
