const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Explain the difference between an object copy and a primitive value copying?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Objects are stored and copied by reference, while primitive values always get copied as whole values.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are two objects always equal in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two objects are only equal if they are the same object, achieved through object reference.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if we need to duplicate an object? Is there a way to clone an object and its properties at the primitive level?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It's a bit of a process; you need to create a new object and replicate the structure of the existing one by iterating over its properties and copying them at the primitive level. We also can use object.assign to replace for..in loop for simple cloning.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can properties reference another property in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this happens when a property has an object as a value and has individual properties. The parent property references the nested properties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can objects assigned to a constant (const) be modified?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The object can be modified, but the declared variable cannot. The reason behind this is that the variable is constant, it must always reference the same object, but the properties of that object are free to change.',
      },
    },
  ],
};

export default StructuredData;
