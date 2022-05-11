const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the new Function constructor syntax in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A new Function object gets created using the Function constructor. Calling the constructor can directly build functions dynamically, but it has similar security and performance drawbacks (though significantly less severe) than eval. In contrast to eval, the Function constructor builds functions that only execute in the global scope. We should note that the new Function syntax does not require a function body to function. The main distinction between this method and others is that the function gets physically built from a string given at run-time. We can extract a string externally and utilize it in a function constructor. In complicated web applications, it gets employed in particular instances, such as when we receive code from a server or dynamically assemble a function from a template.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what occurs when using the new Function constructor to create a function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a function gets created using the new Function constructor, its [[Environment]] gets set to global rather than the current one. As a result, such a function only has access to global variables and not outer variables. This unusual property of the "new" operator in a Function constructor appears to be very beneficial in practice. As a result, they cannot use external variables. But this is a positive thing since it protects us from mistakes. Passing parameters explicitly is a far superior architectural solution that produces no issues with minifiers.',
      },
    },
  ],
};

export default StructuredData;
