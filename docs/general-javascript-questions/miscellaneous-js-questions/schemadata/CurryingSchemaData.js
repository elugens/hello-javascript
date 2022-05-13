const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is currying in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Currying is an advanced procedure for working with functions. It is used not only in JavaScript but in other languages as well. Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c). Currying does not call a function; it just transforms it. Currying allows us to extract partials quickly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the main rule of currying functions in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Currying necessitates that a function takes a fixed number of arguments. A function with rest parameters, such as f(...args), cannot be curried in this manner.',
      },
    },
  ],
};

export default StructuredData;
