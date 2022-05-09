const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the seven (7) primitive JavaScript data types?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The seven primitive data types include the string, number, BigInt, Boolean, undefined, symbol, and null data types. Most of the time, a primitive value is represented directly at the lowest level of the language implementation.',
      },
    },
    {
      '@type': 'Question',
      name: "What are JavaScript's five (5) primitive wrapper objects?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The five primitive wrapper objects include the String, Number, BigInt, Boolean, and Symbol.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why isn’t an Object a primitive data type?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A primitive data type has only a single value. On the other hand, objects can contain more than one value stored in collections and more complex structures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an object store a function as a property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a function gets used as a property of an object, and it is more commonly called an object method.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a primitive remain a primitive or return a primitive value when you use it in conjunction with one of its methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a primitive remains a primitive. For instance, a string method str.toUpperCase() exists that returns a capitalized string. The type of the returned value remains a string.',
      },
    },
    {
      '@type': 'Question',
      name: 'Some languages like Java allow us to explicitly create “wrapper objects” for primitives using a syntax like new Number(1) or new Boolean(false). Is this a best practice in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically, this gets done in JavaScript, but it is not recommended based on the specifications. There are several unintended consequences of using this practice, which should get avoided. A best practice is to use Number and Boolean object wrappers without the new operator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do the null and undefined primitive data types have methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, they are considered the most primitive data types. They both have no wrapper objects and do not provide any methods.',
      },
    },
  ],
};

export default StructuredData;
