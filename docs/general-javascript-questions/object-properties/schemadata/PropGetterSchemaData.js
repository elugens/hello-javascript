const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain what getters and setters are as it pertains to JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accessor properties are represented by "getter" and "setter" methods. In an object literal, they are denoted by get and set in JavaScript. Getters and setters allow you to define Object Accessors (Computed Properties). There are some advantages. Getters and Setters are easier to read because of their simplistic syntax. They also allow similar syntax for properties and methods, can secure better data quality, and are particularly useful for doing things behind the scenes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a difference between an accessor property and a data property in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The primary difference between a property function and an accessor property is the simple syntax of the accessor and the way you invoke the accessor. The accessor (getter setter) gets invoked without the parentheses compared to the property function. There are some advantages, Getters and Setters are easier to read. They also allow similar syntax for properties and methods, can secure better data quality, and are extremely useful in doing things behind the scenes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between an accessor property and a data property in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, descriptors for accessor properties are different from those for data properties. There are no value or writable properties for accessor properties; instead, there are get and set functions. A named data property links a name to a value. This means you use the property to get and retrieve data directly as a public field on a class. A named accessor property associates a name with one or two accessor functions. We use accessor functions to store or retrieve a value associated with the property. This behavior means that you restrict the access to a specific value behind a get or/and set accessor property.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use getters and setters as wrappers over real properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Getters/setters can be used as wrappers over "real” property values to gain more control over operations with them. One example of this is a conditional statement used to check the validity of a value.',
      },
    },
  ],
};

export default StructuredData;
