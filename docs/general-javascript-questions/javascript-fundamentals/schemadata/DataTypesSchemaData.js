const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'In JavaScript, how many data types are there?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Number, String, Boolean, BigInt, Null, Undefined, Object, and Symbol are JavaScript\'s eight fundamental data types. Except for the Object data type, all are basic data types. We call all other classes "primitive" since their values can only contain one item (a string or a number). On the other hand, we use objects to store data sets and more sophisticated things.',
      },
    },
    {
      '@type': 'Question',
      name: 'What operator do you use to find the type of a specific value or argument?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The typeof operator returns the type of the value or argument.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of numbers does the number type represent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The number type represents both integers and floating-point numbers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the limitation of the number type?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The \u201Cnumber\u201D type cannot represent integer values greater than (2<sup>53</sup>-1) (that\u2019s 9007199254740991) or less than -(2<sup>53</sup>-1) for negatives. It is a technical limitation caused by their internal representation, and anything beyond these values is considered a BigInt.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should you create BigInt in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A BigInt value is created by appending n to the end of an integer or using the BigInt object constructor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three types of quotes available to create a string representation of a value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, there are three types of quotes used to represent a string double, single, and backtick quotes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between double, single, and backtick quotes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple quotations are double and single quotes, and in JavaScript, there is almost no distinction between them. Backticks are quotations with "enhanced functionality." They allow us to embed variables and expressions inside a string, for example, by surrounding them with $&#x7B;\u2026&#125;.',
      },
    },
    {
      '@type': 'Question',
      name: 'What two values does the Boolean logical type have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We often use this type of logical data type to store yes/no values: true means \u201Cyes, correct\u201D, and false means \u201Cno, incorrect\u201D. Boolean Logical data types often get used for comparisons or, more specifically, for greater or less than values in JavaScript.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the NULL data type represent in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is a unique value that represents \u201Cnothing\u201D, \u201Cempty\u201D or \u201Cvalue unknown\u201D. It is not a representation of a value that has not to be defined, non-existing, or a null pointer like other programming languages.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the undefined data type represent in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, undefined means a value is not defined or assigned. If a variable is declared but not assigned, its value is undefined.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between typeof x and typeof(x) with parentheses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'typeof x acts as an operator, and typeof(x) is a function, but they work with parentheses or without them. The result is the same.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the typeof operator return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The typeof operator returns a string with the name of the type, like "number" if it is a number or \u201Cfunction\u201D if it\u2019s a function.',
      },
    },
  ],
};

export default StructuredData;
