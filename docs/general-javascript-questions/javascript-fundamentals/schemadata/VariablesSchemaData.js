const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the definition of a variable in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A variable is a “named storage” for data. We can use variables to store values, visitor information, and other data.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the keywords used to declare a variable in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'here are three variable declaration keywords used in JavaScript. They include let, const, and var variables. In modern JavaScript, development let and const remain recommended to optimize your application.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you declare multiple variables on one line?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, although the specification does not advise it for readability and consistency reasons.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to copy stored data from one variable to another?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, declare two variables and copy data into one\u2014better known as copy by reference.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does JavaScript allow you to change the value of a variable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, by declaring the variable equals the new value. A const declaration on a variable does not have this capability because it is a constant value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you declare a variable twice in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, it results in a syntax error.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the two limitations of variable names in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, variable names are subject to two limitations. Only letters, numbers, or the symbols $ and an underscore _ may appear in the name, and the first character cannot be a number.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the CamelCase naming method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CamelCase is a naming method in which a name gets made up of many words combined into a single term. Each word’s initial letter gets capitalized so that the name may be easily read. In JavaScript, we use the lowerCamelCase implementation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What stylization rule gets used in naming multi-word variables?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the name contains multiple words, lower camelCase is the standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does variable case matter in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, variables named myUser and myuser are two different variables because variables in JavaScript are case-sensitive.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Non-Latin letters allowed in naming variables?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is possible to use any language, including Cyrillic letters or even hieroglyphs, but it remains a lousy approach and not recommended, according to the MDN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to declare a variable without let, const, or "Old var"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outside of strict mode, it is possible but not encouraged. It is possible to find it in earlier programs. Technically, it is achievable but not recommended in modern JavaScript.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between var and let in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use both var and let for variable declaration in JavaScript. However, the distinction is that var is function scoped and let is block scoped. When compared to let, a variable declared using var is considered defined throughout the program.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you reassign a value in a variable declared with const?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, it results in a syntax error because constants do not allow reassignment.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should you use a constant as an alias in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For constant variable values that are difficult to memorize, we use aliases. Capital letters and underscores should get used in this case.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the advantages of aliasing a constant in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aliases are easy to remember than numeric identifiers, like hexadecimal numbers.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should a constant be named in caps, and when should it be named in the usual way?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Constant discovery happens before code execution (like a hexadecimal value for red). Some constants are calculated at run-time during execution but do not alter after they are assigned. Capital-named constants only get used as aliases for "hard-coded" values.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some excellent rules for variable naming conventions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<div>A variable name should have a clean, obvious meaning, describing the data it stores, like currentUser or newUser. Unlike functions, a variable name should always be camelCase and begin with a noun.',
      },
    },
    {
      '@type': 'Question',
      name: 'What differentiates variable and function naming conventions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A variable name is always camelCase and should begin with a noun to differentiate variables from functions, which generally should begin with a verb.',
      },
    },
  ],
};

export default StructuredData;
