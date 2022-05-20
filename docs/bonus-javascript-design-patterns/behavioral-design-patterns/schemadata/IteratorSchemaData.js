const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the iterator design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Iterator Pattern allows you to progressively access and explores elements of an aggregate object (collection) without exposing its underlying representation. This technique enables JavaScript writers to create significantly more versatile and sophisticated looping constructs. Iterators and Generators got introduced in ES6, which aids in implementing the Iteration pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'The Iterator pattern belongs to which pattern category?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Iterator pattern is a type of behavioral design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: "When should you utilize JavaScript's Iterator Pattern?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This pattern helps deal with iteration-related challenges, constructing flexible looping constructs, and retrieving items from a complex collection without knowing the underlying representation. We can use it to create a generic iterator that efficiently explores any collection regardless of its type.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the benefits of using the Iterator pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits of the Iterator Pattern: Singular Responsibility Principle By separating cumbersome traversal algorithms into different classes, you may clean up the client code and collections. The Open/Closed Principle -- You can add new types of collections and iterators to existing code without affecting anything. Because each iterator object maintains its iteration state, you can concurrently iterate over the same collection. For the same reason, you can postpone an iteration and resume it later.',
      },
    },
    {
      '@type': 'Question',
      name: "What are some of the Iterator pattern's drawbacks?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drawbacks of the Iterator Pattern: Using the pattern may be overkill if your software works with simple collections. Using an iterator may be less productive than going over elements of specific specialized collections directly.',
      },
    },
  ],
};

export default StructuredData;
