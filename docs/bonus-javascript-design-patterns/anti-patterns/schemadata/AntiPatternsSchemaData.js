const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What exactly is an anti-pattern in application development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An anti-pattern is an imperfect solution to a particular problem that results in an unintended result. To summarize, an anti-pattern is a lousy design worthy of documenting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you define a JavaScript anti-pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nine Anti-Patterns you should know: 1. Excessive variable definition in a global context pollutes the global namespace. 2. Passing strings rather than functions to setTimeout or setInterval causes the internal usage of eval(). 3. Playing with native methods in the Object class prototype (this is a particularly bad anti-pattern). 4. Using JavaScript inline because it is inflexible. 5. The usage of document.write when native DOM alternatives, such as document.createElement, are preferable. Over the years, developers have misused document.write. Drawbacks include that it can overwrite the page we're on after the page loads, whereas document.createElement does not. It also doesn't work with XHTML, so using more DOM-friendly techniques like document.createElement is preferable. 6. Incorrect Use of True and False Evaluation. 7. Naming Customs (Ninja Code). 8. Changing the DOM in a loop. 9. New Array.prototype.reduce Object.",
      },
    },
  ],
};

export default StructuredData;
