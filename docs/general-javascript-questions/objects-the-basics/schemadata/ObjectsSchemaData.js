const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the seven (7) primitive JavaScript data types?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "There are seven primitive data types: text, integer, BigInt, Boolean, undefined, Symbol, and null. A primitive value gets directly represented at the language implementation's lowest level most of the time.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are JavaScript primitive immutable or mutable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All primitives are unchanging and unchangeable. It is crucial to distinguish between a primitive and a variable with a primitive value. The variable can assign a new value, but it cannot get modified like objects, arrays, and functions can. A primitive can get swapped, but we cannot directly alter them.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the purpose of an object in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use Objects to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the two ways to implement an empty Object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can create an empty object ("empty cabinet") using one of two syntaxes. You can use an object constructor or an object literal. The Object constructor gets called with the new keyword, and we should not confuse this with native Objects that should get called without the new keyword.',
      },
    },
    {
      '@type': 'Question',
      name: 'What delimiter separates a key from the value in an Object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can separate Object key-value pairs with a colon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a value be of any type in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, since all values in JavaScript are dynamically typed and observed while the script executes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the two ways to access a value in an Object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, the dot notation and bracket notation get used in accessing object attributes. The dot notation commonly gets used because it is easier to read and grasp and is less verbose. The primary distinction between dot notation and bracket notation is that bracket notation allows us to access object characteristics through variables.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use multi-word property names in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically, JavaScript enables multi-word properties in Objects, but it is not encouraged since it might create issues later in your code when you try to access it. The problem becomes evident when you try to access the property using dot notation. When naming functions, objects, attributes, and variables in JavaScript, you should always use the camelCase naming style.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is JavaScript able to implement computed properties using object-literal notation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you may assign the expression as a property to an object without first creating it with object-literal notation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any restrictions on Object property names?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are no known constraints on naming Object properties. However, we should not use reserved keywords in most JavaScript components. It is possible to utilize reserved keywords as property names without making a mistake, although it is not encouraged. They can be strings or symbols (a specific form of identifier).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minor snag with the special property name __proto__?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should not set the special property name __proto__ to a non-object value such as a primitive value. It can have unexpected results.',
      },
    },
    {
      '@type': 'Question',
      name: "Why does the (in) operator exist? Isn't it enough to compare against undefined?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The “in” operator is used to check if a property exists or loop over object properties. Using it to compare against undefined can have less than truthy results. We should not use the "in" operator to loop over arrays; not a recommended approach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are object properties in order? In other words, do we get all attributes in the same order they get introduced if we loop over an object? Can we put our faith in this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'he short answer is that they get ordered in a particular way, integer properties get sorted, and others appear in creation order. This behavior is not a reliable approach, and we are seeking a specific numbered order.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain what an integer property is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The "integer property" term here means a string that converts to and from an integer without a change.',
      },
    },
  ],
};

export default StructuredData;
