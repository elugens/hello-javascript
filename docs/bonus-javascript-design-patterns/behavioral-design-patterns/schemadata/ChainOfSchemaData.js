const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the chain of responsibility design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This behavioral JavaScript design pattern generates a series of receiver objects responding to a request. This approach encourages loose coupling, allowing us to avoid coupling the sender of a request to a receiver and allowing other receivers to handle the request. The receiving objects get coupled together, and they'll be able to act on the request before passing it over to the following receiver object. It's also simple to add additional recipient objects to the chain.",
      },
    },
    {
      '@type': 'Question',
      name: 'In what pattern category does the Chain of Responsibility pattern belong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Chain of Responsibility pattern is a behavioral design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'Could you kindly provide an example of a Chain of Responsibility Pattern use case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can use it if your program handles various requests differently without knowing beforehand the sequence and type of requests. It allows you to chain several handlers, thus, allowing all of them a chance to process the request. An illustration of the chain of responsibility pattern is in event bubbling in the DOM. The event propagates through the nested elements, one of which may choose to handle the event.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some advantages of employing the Chain of Responsibility design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits of the Chain of Responsibility Pattern: You have control over the sequence in which requests get handled. The principle of single responsibility. Classes that invoke operations get separated from classes that perform tasks. The principle of open/closed. New handlers can get added to the app without disrupting the old client code.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the disadvantages of the Chain of Responsibility pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drawbacks of the Chain of Responsibility Pattern: Some requests may end up unhandled.',
      },
    },
  ],
};

export default StructuredData;
