const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the benefits of inheriting from the Error object vs. simply using the throw statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because JavaScript allows us to use a throw with any parameter, our error classes do not need to derive from Error. However, we may use obj instanceof Error to identify and track error objects if we inherit. As a result, it is preferable to inherit from it. Our errors automatically build a hierarchy as the program evolves, and ValidationError, for example, may derive from the Error Object, and so forth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there any difference in inheritance when inheriting/extending from the Error class object and regular class inheritance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, the same rules apply; you can only inherit from one base class using the extends keyword. In class declarations or expressions, we can use the extends keyword to build a class that is a child of another class.',
      },
    },
    {
      '@type': 'Question',
      name: 'How would you extend beyond the initial inheritance of the Error object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If it is necessary to extend beyond a primary child class that has already extended the built-in Error Object. It would be best to inherit/extend from the child class to access the base class.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to handle unknown or potential errors in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'hen prospective errors are relevant, we should deal with them immediately. It is not a good idea to address every conceivable or unexpected error. When encapsulating exceptions, it would be preferable to rethrow the catch to at least record the problem.',
      },
    },
  ],
};

export default StructuredData;
