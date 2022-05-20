const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Could you please explain the adapter design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, the adapter design pattern allows objects or classes with incompatible interfaces to work together. Interfaces from different classes or objects connect through an adapter work together despite their incompatible interfaces. The wrapper pattern is another name for it.',
      },
    },
    {
      '@type': 'Question',
      name: 'The Adapter pattern belongs to which pattern category?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Adapter pattern is a type of structural design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: "What is the Adapter Pattern's most noticeable feature?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main characteristic of the Adapter Pattern is the adapter interface required to intersect with interfaces that are not compatible.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Pros and Cons can you think of regarding the Adapter Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits: Based on SOLID principles. The code is both reusable and adaptable. Clean code — because the client/context does not use a different interface in each concrete class and can switch between additional adapters using polymorphism. Single Responsibility Principle - The principle of single responsibility. You can separate the interface or data conversion code from the main business logic of the program. Open/Closed Principle. If they interact with the adapters via the client interface, you can start introducing new kinds of adapters into the application without having to break the existing client code. Drawbacks: The overall complexity of the code rises as a result of the addition of new interfaces and classes. Changing the service class to match the rest of your code is sometimes easier.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should the Adapter Pattern be used?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use Case: When there is a class whose interfaces do not match the one you need. There are several subclasses, but it’s impractical to adapt their interface by sub-classing every one.',
      },
    },
  ],
};

export default StructuredData;
