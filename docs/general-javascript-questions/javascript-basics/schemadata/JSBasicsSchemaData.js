const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>JavaScript is a high-level, dynamically typed, interpreted scripting language used to create interactive effects in the browser or server.</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a high-level and low-level programming language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>A high-level language gets compiled without detailed knowledge of the underlying computer. For example, managing memory, knowing what processor is running, and keeping track of things like pointers are not necessary. High-level languages are more accessible to write and manage than low or mid-level programming languages because they are platform-independent. The major distinction between high-level and low-level languages is that programmers can readily grasp, interpret, and compile high-level languages when compared to machines. Machines, on the other hand, can interpret low-level language more readily than humans.</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'Is JavaScript an interpreted or compiled programming language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>In a compiled language, the target machine directly translates the program. The target machine does not translate the source code directly into an interpreted language. Instead, a different program, an interpreter, reads and executes the code. In simple terms: JavaScript is an interpreted language.</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the name of the JavaScript scripting language specification called?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>ECMAScript with a reference guide named ECMA-262.</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is it called JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>JavaScript was initially named <em>Live Script<em>, but because of the popularity of Java. It was renamed too JavaScript as a play on the notoriety of the Java programming language, but they are considerably different. JavaScript is a high-level programming language, and Java is a mid-level programming language.</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'On which platforms can we implement JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>Today, JavaScript can execute not only in the browser but also on the server or any device with a unique JavaScript engine like Node.js.</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the code names for Chrome, Opera, FireFox, IE, Edge, and Safari?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p><ol>\n<li>V8 - in Chrome and Opera</li>\n<li>Spider Monkey - in FireFox</li>\n<li>Chakra - in Internet Explorer</li>\n<li>Chakra Core - in Microsoft Edge</li>\n<li>Nitro / SquirrelFish - in Safari</li>\n</ol></p>',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is it good to remember code names for different JavaScript Engines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>The code names are good to remember because they get used in developer articles on the internet. For instance, if <em>V8 supports a feature X</em>, it probably works in Chrome and Opera.</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'What can in-browser JavaScript do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "<p>JavaScript's capabilities get heavily influenced by the environment in which it runs. Node.js, for example, includes methods that allow JavaScript to read/write arbitrary files and make network requests.\r\nIn-browser JavaScript can accomplish everything related to webpage alteration, user interaction, and webserver interaction via Ajax requests.\\n\nFor instance, in-browser JavaScript can:\r\n<ol>\n<li>Modify the existing text, add HTML, and design the page.</li>\n<li>Respond to user activities, such as mouse clicks, pointer movements, and keystrokes.</li>\n<li>Send network requests to distant servers and download and upload files (so-called AJAX and COMET technologies).</li>\n<li>Get and set cookies, ask the visitor questions, and display messages</li>\n<li>Track client-side data (local storage).</li>\n</ol></p>",
      },
    },
    {
      '@type': 'Question',
      name: "What CAN'T in-browser JavaScript do and why?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "<p>JavaScript's capabilities in the browser are limited to safeguard the user's safety. The purpose is to prevent a malicious website from acquiring private information or inflicting data damage to users.\nExamples of such constraints include:\n<ol><li>JavaScript permits us to read/write files directly on the hard disk, copy them, or run applications on a web page, however, it does not have direct access to OS functionality.</li><li>Modern browsers allow it to interact with files. Still, access is limited and only provided if the user performs specific actions, such as dropping a file into a browser window or choosing it through a tag.</li><li>Interacting with the camera/microphone and other devices is possible, but it requires the user's explicit consent. The JavaScript-enabled page may not secretly activate a web camera, examine its surroundings, and communicate the data.</li><li>JavaScript from one page may not be able to access JavaScript from another if they are from separate sites (from a different domain, protocol, or port).</li><li>JavaScript can easily connect with the server that serves the current page through the internet. However, its capacity to receive data from other sites domains is severely limited. Although feasible, it requires explicit agreement from the remote side (represented in HTTP headers).</li></ol>\n</p>",
      },
    },
    {
      '@type': 'Question',
      name: 'What makes JavaScript unique?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>JavaScript is unique because it fully integrates HTML and CSS, and all major browsers support it. JavaScript is the only browser technology that combines all three of these features. That distinguishes JavaScript and explains why it is the most widely used technology for designing browser interfaces.',
      },
    },
    {
      '@type': 'Question',
      name: 'Name some modern alternative languages that convert to JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>Several popular languages are trans-piled (converted) to JavaScript before running in the browser including Coffee Script, TypeScript, Flow, Brython, Dart, and Kotlin.\r\nExamples of such languages:\r\n<ol>\n<li>CoffeeScript is a <em>syntactic sugar</em> for JavaScript. It introduces shorter syntax, allowing us to write more transparent and more precise code—usually, Ruby devs like it.</li>\n<li>TypeScript concentrates on adding <em>strict data typing</em> to simplify the development and support of complex systems, and Microsoft develops it.</li>\n<li>Flow also adds data typing, but differently, and Facebook developed it.</li>\n<li>Dart is a standalone language with an engine that runs in non-browser environments (like mobile apps) and converts to JavaScript—developed by Google.</li>\n<li>Brython is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript.</li>\n<li>Kotlin is a modern, concise and safe programming language that can target the browser or Node.</li>\n</ol></p>',
      },
    },
  ],
};

export default StructuredData;
