const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When it comes to coding style and application development, what is the goal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The goal is to take a complex task and code it correctly and in a human-readable manner.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should you always use curly braces with conditional if statements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is a best practice and makes code more readable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it okay to use long horizontal code lines or split them into separate lines? Give a reason why you choose your answer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional JavaScript developers prefer separate lines because they are more readable than not. It is also a best practice. A great example would be long paragraphs longer than 120 characters. We can use backticks to handle lines longer than 120 characters.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do development teams typically agree to for the maximum character length?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The maximum length typically agreed upon by dev teams is between 80 to 120 characters.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a best practice for vertical space of code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A best practice is to divide each code action by a line space to keep your code readable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is one way to reduce nesting levels in your code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A great way to reduce nesting levels is handling minimum conditions early. The goal is to reduce nested code blocks that isolate variable access. The benefits of writing code in this fashion are increased readability and faster code because of early conditional error checks. If the code fails early, then it is handled without continuity.<br /><br />\r\n  <strong>Here are some rules of thumb for reducing nesting in your code:</strong><br /><br />\r\n  <ol>\r\n    <li>Keep your conditional blocks brief. Keeping things local improves readability.</li>\r\n    <li>Think about restructuring if your loops and branches are more than two layers deep.</li>\r\n    <li>Consider separating layered logic into distinct functions. For example, you may write a function to handle each item instead of using a double nested loop to cycle through a list of objects containing a list (such as a protocol buffer with repeated fields).</li>\r\n  </ol>',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Linter, and why should you use it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Linters are tools that can automatically check the style of your code and make improvement suggestions. The great thing about linters is that style-checking can also find bugs, like typos in variable or function names. Because of this feature, using a linter is recommended even if you do not want to stick to one particular code style.',
      },
    },
  ],
};

export default StructuredData;
