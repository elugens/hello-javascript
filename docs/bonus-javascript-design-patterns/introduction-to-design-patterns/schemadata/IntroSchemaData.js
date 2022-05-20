const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you name the three principal categories of design patterns in web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The three main design patterns categories in JavaScript are creational, structural, and behavioral design patterns.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what a creational design pattern is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Creation design patterns handle object creation and reduce complexity in object creation in JavaScript. Examples of creational design patterns include the constructor, factory, prototype, and singleton patterns.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain what a structural design pattern is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Structural design patterns in software engineering are design patterns that simplify the design process by identifying a straightforward approach to realizing relationships between entities. Structural design patterns include the module, decorator, facade, adapter, and proxy patterns.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what a behavioral design pattern is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Behavioral design patterns identify communication between objects, which increases flexibility in how our application carries out communication. Structural design patterns include the chain of responsibility, command, observer, iterator, strategy, and template patterns.',
      },
    },
  ],
};

export default StructuredData;
