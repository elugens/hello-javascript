const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Could you please explain the facade design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Façade design pattern creates an interface that protects clients from complex functionality in one or more sub-systems. It's a simple pattern that may appear insignificant, but it's powerful and advantageous. We commonly find it in systems based on a multi-layer architecture.",
      },
    },
    {
      '@type': 'Question',
      name: 'The Facade pattern belongs to which pattern family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Facade pattern is a type of structural design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should you employ the Façade Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The facade pattern makes it easier for a client to interact with a system. As a result, it gets used when an application's underlying code is large and complex, and the client does not need to see it. It gets used in communicating with methods in a library without understanding what is happening behind the scenes. JavaScript libraries, such as jQuery, are an example.",
      },
    },
    {
      '@type': 'Question',
      name: "Can you elaborate on the Façade Pattern's object participants?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two types of objects represented in the Façade Pattern. They consist of the Façade and the Sub Systems (There can be multiple sub-system objects in this pattern).  The Façade understands which sub-systems are in charge of a request and routes client requests to the appropriate sub-system objects. A sub-system implements and executes specialized sub-system activities, but it has no cohesive knowledge or connection to the Façade itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the benefits of using the Facade pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can isolate your code from the complexity of a sub-system.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the disadvantages of employing the Facade pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A façade can be a god object tightly linked to all classes in an app.',
      },
    },
  ],
};

export default StructuredData;
