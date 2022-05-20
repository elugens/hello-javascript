const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the observer design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Observer is a behavioral JS design pattern that allows you to construct a subscription mechanism that alerts numerous objects (observers) about any events that occur to the object (subject) they're viewing. This pattern is also known as Pub/Sub, which stands for Publication/Subscription. It establishes a one-to-many relationship between items, encourages loose coupling, and aids in effective object-oriented design. The observer pattern is at the heart of event-driven programming. We create event handler routines that are informed when a specific event occurs.",
      },
    },
    {
      '@type': 'Question',
      name: 'The Observer pattern belongs to which pattern category?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Observer pattern is a type of behavioral design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: "Can you explain the Observer Pattern's use case?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Use Cases: To improve code management: We break down large programs into a system of loosely connected objects. To increase flexibility by allowing a dynamic relationship between observers and subscribers, which would otherwise be impossible due to tight coupling. To increase communication between the application's many components. To establish a one-to-many dependency between weakly related items.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the advantages of employing the Observer pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Benefits of the Observer Pattern: The Open/Closed Principle -- You can add new subscriber classes without modifying the publisher's code (and vice versa if a publisher interface exists). At runtime, you can create relationships between objects.",
      },
    },
    {
      '@type': 'Question',
      name: "What are some of the Observer pattern's drawbacks?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drawbacks of the Observer Pattern: Sends notifications to subscribers in random order.',
      },
    },
  ],
};

export default StructuredData;
