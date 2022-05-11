const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between the rest parameter and spread syntax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The spread syntax is the opposite of the rest parameter. The rest parameter collects items into an array, and the spread operator unpacks the collected elements into single elements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the rest parameter works in functions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The rest parameter expands the dynamic capabilities of functions. Functions themselves express an error when there are excessive arguments. The function declaration includes the remaining parameters by using three dots followed by the array\'s name. The dots mean "gather the remaining parameters into an array". This behavior allows the function to act on several arguments instead of a predefined number or single argument.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use the rest parameter with predefined arguments in JavaScript functions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can mix predefined parameters with the rest parameter in JavaScript functions. There is a limit to its use in the form of the order of arguments. Predefined parameters must precede the rest parameter, or it may result in an error. The best way to remember this is to "Rest at the end".',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the rest parameter and the arguments array-like object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The rest parameter and the arguments array-like object have similar behaviors. The rest parameter is relatively new compared to arguments. Although arguments are both array-like and iterable, it is not an array. It does not support array methods, so we cannot call arguments.map(...) for example. Also, it always contains all arguments. We cannot capture them partially as we did with the rest parameters. So, when we need these features, then the rest parameters are preferred. Another issue is that arrow functions do not have access to arguments. If we access the argument\'s object from an arrow function, it takes them from the outer "normal" function. This issue reduces the potency of the arguments object and can lead to bugs in our code.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the advantages of adopting the ES6 spread syntax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As far as coding in a functional paradigm is concerned, using the spread syntax in ES6 can prove to be heavily beneficial. The spread syntax is easily used to create copies of arrays or objects. Using spread syntax in a program reduces the need to use loops, Object.create, slice, or any library function, which helps reduce code and complexity in your applications.',
      },
    },
  ],
};

export default StructuredData;
