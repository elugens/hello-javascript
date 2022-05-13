const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What was the original purpose of JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Originally intended for web browsers, the JavaScript programming language has evolved into a language with many practical uses and platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'JavaScript can operate on what kinds of technological platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The JavaScript language can run on a browser, or a webserver or another host, even a “smart” coffee machine, if it can run JavaScript. Each of them provides platform-specific functionality. The JavaScript specification calls that a host environment. A host environment provides its own objects and functions additional to the language core. Web browsers give a means to control web pages. Node.js provides server-side features, and so on.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you briefly explain the general structure of the browser window environment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A browser at its root consists of a window (root object), DOM, BOM, and the JavaScript Object. The DOM is the document object model, and the BOM is the browser object model. JavaScript is the language used to interact with the window, DOM, and BOM.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Document Object Model in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Document Object Model, or DOM, represents all page content as editable objects. The principal "entry point" to the page is the document object, and we may use it to edit or create anything on the website.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you name a good reference document to find information about the document object model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two good reference documents used to reference information about the DOM include the MDN Web Docs and the DOM Living Standard. The DOM Living Standard provides you with detailed information about the specification, and the MDN is a detailed guide expressed in an easy way to learn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the DOM only used in Browsers, or can it be found on other platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The DOM standard describes a document's structure and offers objects for manipulating it. Other non-browser instruments make use of the DOM. Server-side programs that download and parse HTML pages, for example, can also make use of DOM. However, they may only support a portion of the standard.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the CSS Object Model (CSSOM) used for in a browser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The CSS Object Model is a set of APIs that allow JavaScript to manipulate CSS. It is similar to the DOM, but for CSS rather than HTML. It enables users to view and alter CSS styles in real-time. It is independent of the DOM, yet they collaborate when we change the document's style rules. CSSOM, on the other hand, is rarely a necessity in reality.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Browser Object Model in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.<br /><br />\r\n  <strong>For Example:</strong><br /><br />\r\n  <ol>\r\n    <li>The navigator object gives context about the browser and the operating system. There are various characteristics, but the navigator and location are the most well-known. userAgent tells us about the current browser, and navigator.platform tells us about the platform (which varies depending on whether it's Windows, Linux, or Mac).</li>\r\n    <li>We can read the current URL and redirect the browser to a new URL using the location object.</li>\r\n  </ol>",
      },
    },
    {
      '@type': 'Question',
      name: 'Are the alert, confirm, and prompt functions part of the DOM or BOM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BOM includes functions such as alert/confirm/prompt, which are not directly connected to the content but represent pure browser means of communicating with the user.',
      },
    },
    {
      '@type': 'Question',
      name: 'Under what specification does the BOM fall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The BOM is part of the HTML standard. Yes, you read that correctly. The HTML standard, available at https://html.spec.whatwg.org, encompasses more than just the "HTML language" (tags, attributes) and a slew of objects, methods, and browser-specific DOM extensions. That\'s "HTML in broad strokes." Additionally, certain parts have supplementary specifications given at https://spec.whatwg.org.',
      },
    },
  ],
};

export default StructuredData;
