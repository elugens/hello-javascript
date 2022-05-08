const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Explain what debugging is in JavaScript development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Debugging is finding and fixing errors within a script. Modern browsers and most other environments support debugging tools – a unique UI in developer tools makes debugging much more manageable. It also allows us to trace the code step by step to see what is going on.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you turn on/open developer tools in Chrome?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can turn on/open your chrome developer tools by pressing F12 or for Mac: (Cmd+Opt+I).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you open the left sidebar to access the vertical tabs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can use the toggler button to open the vertical tabs under the source tab.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three panes accessible via the Chrome Dev Tools source tab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The file navigator, code editor, and the JavaScript debugging pane.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can you find the file navigator pane and open it in the chrome developer tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The file navigator pane opens by clicking on the sources tab at the top of the developer tools. Once you click on the tab, you can click on the toggler button and view the file navigator pane.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the JavaScript debugging pane located in the chrome developer tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can find the JavaScript debugging pane on the right-hand side of the code editor, beneath the sources tab.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you toggle to enter and escape the console tab window?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can toggle the console tab-pane by using the escape "ESC" button.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some examples of things you can do with the developer console?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most notable things that you can do with the Chrome developer console include selecting DOM elements, converting your Browser into an editor, finding events associated with an element in the DOM, monitoring events, finding the time of execution of a block of code, arrange the values of a variable into a table, inspect an element in the DOM, list the properties of an element, retrieve the value of your last result, and clear the console and the memory.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a breakpoint in JavaScript debugging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A breakpoint is a line of code that causes the debugger to interrupt JavaScript execution. We may investigate current variables and run commands on the terminal while the program gets halted. To put it another way, we can debug it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you explicitly implement the debugger in most code editors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can pause the code using the (debugger;) command.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you reload the source page after setting your breakpoints in the Chrome developer console?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Windows, you can press F5 to reload the page; you must use Cmd+R on a MAC.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the watcher do in the chrome development tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The watcher displays the variable's current value as it gets added to an expression. If the variable does not get set or if you cannot find it, the value shows as &#60;Not Available&#62;.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you make a minified file readable in Chrome development tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can click on the format &#123;&#125; icon to make the minified files readable in DevTools.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Call Stack do in Chrome developer tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Call Stack shows the nested call chain in Chrome, Edge, and Safari.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the console part of the DOM or the BOM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The console is part of the window object supplied by the Browser.',
      },
    },
  ],
};

export default StructuredData;
