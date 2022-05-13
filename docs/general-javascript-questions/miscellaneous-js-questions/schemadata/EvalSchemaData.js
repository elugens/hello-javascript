const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the eval functions’ purpose in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to the MDN, the honest answer is that you should never use eval in your applications. However, the purpose of eval is to evaluate JavaScript code represented as a string value. One string parameter evaluates in the built-in eval function, and returns the completed value of the evaluated code. If the completion value is empty, undefined is returned.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should you use the eval built-in JavaScript function property JavaScript? Why or why not?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In modern programming, developers use eval very sparingly. Developers often say that \u201Ceval is evil\u201D. The reason is simple: a long, long time ago, JavaScript was a weaker language; many things only worked with eval. But that time passed a decade ago. There is no reason to use eval because the JavaScript engine does not optimize it. If someone is using it, there is a good chance they can replace it with a modern language construct or a JavaScript Module. Evil, I mean eval has several issues, including speed and code minification compatibility issues. The fundamental problem is that it poses a security risk to the user, and the MDN does not recommend its use in modern programming.<br /><br /> Using external local variables inside eval is also considered a bad programming practice, as it makes maintaining the code more complex. If your code needs some data from the outer scope, use \u201Cnew\u201D Function and pass it as arguments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a better option or built-in JavaScript object than eval that you can use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the recommended option is to use the built-in Function() object. The benefits include increased application security and engine optimization. If your code needs some data from the outer scope, use new Function and pass it as arguments.',
      },
    },
  ],
};

export default StructuredData;
