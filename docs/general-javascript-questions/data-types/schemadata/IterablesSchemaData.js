const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are iterables in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Iterable objects are a subset of arrays. This notion allows us to use any object in a for...of loop. Arrays, of course, are iterable. However, several additional built-in objects are iterable as well. Strings, for example, are also iterable. It is a data structure that allows consumption of its data in general. It does this by implementing a method with the key Symbol.iterator, which returns an iterator. The iterator interface provides another method called return(), which gets performed when the iteration reaches the last value or is deliberately halted by calling it directly or using break; a for loop.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can we use the Symbol.iterator for in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common use case for Symbol.iterator is creating a custom object iterator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you call an iterator explicitly, and what are the benefits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can call an iterator explicitly in JavaScript. There are several benefits, including more control over the process than for...of.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between an iterable and an array-like object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Iterables are objects that implement the Symbol.iterator method, such as arrays and strings. Array-likes are objects that have indexes and a length property, so they look like arrays. When we use JavaScript for practical tasks in a browser or any other environment, we may meet objects that are iterables or array-likes or both, like strings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What universal method can we use to turn an iterable or array-like value into an array?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Array.from() method can turn an iterable or array-like value into an array. Then we can call array methods on it.',
      },
    },
  ],
};

export default StructuredData;
