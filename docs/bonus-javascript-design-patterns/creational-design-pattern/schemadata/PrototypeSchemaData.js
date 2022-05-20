const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Could you please explain the prototype design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use the Prototype Pattern to create new objects. Rather than returning uninitialized objects, it returns objects with values copied from a prototype - or example - object. The Properties pattern is another name for the Prototype pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'The Prototype pattern belongs to which design family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The prototype pattern is a type of creational design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an example of a good use case for the prototype pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You can use the Prototype pattern to help initialize business objects with values that match the database's default values. The prototype object contains the default values that you can copy into a newly created business object. Classical languages rarely use the Prototype pattern, but JavaScript is a prototypal language that uses this pattern to construct new objects and their prototypes. We should use the Prototype pattern when your code shouldn't depend on the concrete classes of objects you need to copy.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the advantages of employing the Prototype pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits of the Prototype Pattern: We can clone an object without being bound to its concrete classes. You can avoid repeating the initialization code by cloning pre-built prototypes. It is easier to produce complex objects. hen dealing with structural presets for complex objects, we produce an alternative to inheritance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the disadvantages of employing the Prototype pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cloning complex objects with circular references might be tricky.',
      },
    },
  ],
};

export default StructuredData;
