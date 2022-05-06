const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the developer console used for in JavaScript development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The developer console resembles a shell interface and has tools for viewing the DOM, debugging, and analyzing network traffic. The console collects data as part of the JavaScript development process and interacts with a web page through JavaScript expressions within the page's context. The console essentially allows you to generate, administer, and monitor JavaScript code.\r\nAdditional Information: We can use developer tools to see problems, perform commands, and analyze variables.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you open the developer console in Google Chrome?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On Windows, most browser developer tools get accessed by pressing F12; however, Chrome for Mac requires Cmd+Opt+J, and Safari requires Cmd+Opt+C. (need to be enabled first).',
      },
    },
  ],
};

export default StructuredData;
