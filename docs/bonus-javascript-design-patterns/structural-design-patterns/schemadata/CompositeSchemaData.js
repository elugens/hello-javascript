const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Could you please explain the composite design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Composite Pattern, structurally, allows you to compose objects into a tree-like structure, allowing us to work with them as individual objects. Partitioning is another term for this. The Composite pattern enables the creation of objects with primitive items or a collection of object properties. Each item in the group can hold other collections, allowing for deeply nested structures.',
      },
    },
    {
      '@type': 'Question',
      name: 'The Composite pattern belongs to which design pattern family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Composite pattern is a type of Structural design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you specify a use case for the Composite Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Composite pattern is powerful as it allows us to treat an object as a composite. Since both single and composite objects share the same interface, it enables reusing objects without worrying about their compatibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'What objects participate in the Composite Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The participating objects in the Composite Pattern include the Component, Leaf, and Composite objects.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the advantages of employing the composite pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits of the Composite Pattern: Using polymorphism and recursion, you can more efficiently work with complex tree structures. The Open/Closed Principle You can add new element types to the app without breaking the existing code, which is now compatible with the object tree.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the disadvantages of employing the composite pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drawbacks of the Composite Pattern: It might be challenging to provide a standard interface for classes whose functionality differs too much. You would need to overgeneralize the component interface in specific scenarios, making it harder to comprehend.',
      },
    },
  ],
};

export default StructuredData;
