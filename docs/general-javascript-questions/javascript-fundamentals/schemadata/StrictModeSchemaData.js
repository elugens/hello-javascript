const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When was ECMAScript 5 (ES5) released for use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ECMAScript 5 (ES5) was released for use in 2009.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you explicitly enable ES5 features and modifications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need to enable them with a special directive explicitly: "use strict".',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain how you should implement strict mode in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strict mode is enabled by placing “use strict” at the top of your script.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you cancel strict mode later in your code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, there is no directive like "no use strict" that reverts the engine to the old behavior. Once we enter strict mode, there is no going back.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the browser developer console implement strict mode by default?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, we must place it at the first console line for it to work.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you implement strict mode in the browser console?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We must place it at the first console line for it to work, then add the rest of our code. First, you can try to press Shift+Enter to input multiple lines and put “use-strict” on top. In Older browsers, you have to put it in a wrapper.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should we implement "use strict" in modern applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it remains recommended to use strict mode in all modern applications. Although it may not be essential in some cases, we should provide the strict-mode functionality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any language structures that implement strict mode by default?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, JavaScript classes and modules implement strict mode by default.',
      },
    },
  ],
};

export default StructuredData;
