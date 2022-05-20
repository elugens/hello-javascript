const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the command design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Command Pattern is a behavioral JS design pattern that aims to encapsulate actions or operations as objects. This pattern is helpful in scenarios where we want to decouple or split the objects executing the commands from the objects issuing the orders. You may centralize the processing of these actions/operations by using command objects.',
      },
    },
    {
      '@type': 'Question',
      name: 'To which pattern family does the Command pattern belong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Command pattern is a type of behavioral design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should you utilize the JavaScript command pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Use Case: If you want to queue and execute requests at different times. If you're going to perform operations such as reset or undo. If you're going to keep a history of requests made.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the benefits of using the Command pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits of the Command Pattern: Singular Responsibility Principle Classes that invoke operations get separated from classes that perform these actions. The Open/Closed Principle - You can add new commands to the app without affecting the client code that already exists. You can use the undo/redo feature. You can use deferred operation execution. You can combine a series of simple commands to create a more sophisticated one.',
      },
    },
    {
      '@type': 'Question',
      name: "What are some of the Command pattern's drawbacks?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The code may become more complicated since you're introducing a whole new layer between senders and receivers.",
      },
    },
  ],
};

export default StructuredData;
