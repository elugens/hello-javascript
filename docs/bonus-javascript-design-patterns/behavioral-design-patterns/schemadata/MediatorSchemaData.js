const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the mediator design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Mediator Pattern is a design pattern that allows one item to notify another group of objects when an event or action occurs. The Mediator and Observer patterns vary in that the Mediator pattern allows one object to be alerted of events occurring in other objects. In contrast, the Observer pattern allows one object to subscribe to numerous events occurring in other objects.',
      },
    },
    {
      '@type': 'Question',
      name: 'The Mediator pattern belongs to which pattern category?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Mediator pattern is a type of behavioral design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should you utilize the JavaScript Mediator Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use it: If your system has several components that must communicate with one another. To avoid tight object coupling in a system with many objects. To enhance code readability. To make it easier to maintain code. If communication between objects gets complicated or impedes code reusability.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the advantages of employing the Mediator pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits of the Mediator Pattern: Singular Responsibility Principle -- You may consolidate the communications between numerous components into a single location, making them easier to understand and maintain. The Open/Closed Principle You can add new mediators without changing the key components. You can reduce coupling between software components. We can use individual components more efficiently.',
      },
    },
    {
      '@type': 'Question',
      name: "What are some of the Mediator pattern's drawbacks?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drawbacks of the Iterator Pattern: A mediator can evolve into a God Object over time.',
      },
    },
  ],
};

export default StructuredData;
