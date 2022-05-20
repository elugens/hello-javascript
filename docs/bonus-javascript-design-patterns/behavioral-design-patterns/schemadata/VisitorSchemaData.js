const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the visitor design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visitor is a behavioral design pattern that lets you detach algorithms from the objects on which they act. The Visitor pattern adds new methods to a group of objects without affecting them, and the new logic gets housed in a distinct entity known as the Visitor.',
      },
    },
    {
      '@type': 'Question',
      name: 'To which pattern family does the Visitor pattern belong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Visitor pattern is part of the Behavioral design pattern set.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should you utilize the JavaScript Visitor Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use the visitor pattern when: Similar procedures must get done on various data structure objects. Specific operations must get carried out on multiple items in the data structure. You wish to make libraries or frameworks more extensible.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the benefits of using the Visitor pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits of the Visitor Pattern: The principle of open/closed. You may add new behavior that works with objects of various classes without modifying the classes themselves. Single Responsibility Principle - You can move multiple versions of the same behavior into the same class. While working with various objects, a visitor object might get helpful information. This information is helpful if you wish to traverse a complicated object structure, such as an object tree, and apply the Visitor to each item in the structure.',
      },
    },
    {
      '@type': 'Question',
      name: "What are some of the Visitor pattern's drawbacks?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drawbacks of the Visitor Pattern: Every time a class is added or withdrawn from the element hierarchy, you must notify all visitors. Visitors may not have access to the private fields and methods of the components they get expected to operate.',
      },
    },
  ],
};

export default StructuredData;
