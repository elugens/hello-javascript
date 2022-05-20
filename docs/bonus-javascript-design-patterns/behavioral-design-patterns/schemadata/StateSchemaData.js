const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the state design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The State pattern provides state-specific logic to a limited set of objects in which each object represents a particular state. The State pattern is commonly used in JavaScript to convert massive switch-base state machines into objects.',
      },
    },
    {
      '@type': 'Question',
      name: 'The State pattern belongs to which pattern category?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The State pattern is a type of behavioral design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should you utilize the JavaScript State Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In a real-world application, the State pattern could be handy for introducing new states that we haven't yet considered, possibly more simply than a switch case. Each state is contained and has its own set of internal functions.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the advantages of employing the State pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits of the State Pattern: Singular Responsibility Principle -- Separate the code related to each state into separate classes. The Open/Closed Principle - Add new states without modifying existing state classes or the context. Simplify the contextual code by removing bulky state machine conditionals.',
      },
    },
    {
      '@type': 'Question',
      name: "What are some of the State pattern's drawbacks?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Applying the pattern may be excessive if a state machine has only a few states or infrequently changes.',
      },
    },
  ],
};

export default StructuredData;
