const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a JavaScript module?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A module is just a file where the script resides. Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one. The export keyword labels variables and functions that should be accessible from outside the current module, and import allows the import of functionality from other modules.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do JavaScript modules work with the standard local file:// protocol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, if you try to open a web page locally, via file:// protocol, you find that import/export directives do not work.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is different in modules compared to regular scripts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Core features are valid for both browser and server-side JavaScript. Modules always use strict by default. So, assigning to an undeclared variable gives an error. <br /><br />\r\n  Each module has a separate top-level scope. Top-level variables, methods, and functions from a module, in general, are not visible in other scripts.<br /><br />\r\n  The import.meta object contains information about the current module. The surroundings determine its content. The browser includes the URL of the script or if it is inside HTML, the URL of the current webpage.<br /><br />\r\n  In top-level modules, this is undefined.<br /><br />\r\n  Module scripts always defer, same as the defer property for external and inline scripts.<br /><br />\r\n  For non-module scripts, the async attribute only works on external scripts. Async scripts run immediately when ready, independently of other scripts or the HTML document. For module scripts, it works on inline scripts as well.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use undeclared variables in JavaScript modules?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, because JavaScript always “use strict”, by default, e.g., assigning to an undeclared variable gives an error.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does module-level scope mean in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It means that each module has its top-level scope. Top-level variables, methods, and functions from a module, in general, are not visible in other scripts. Modules expect to exportation. They want to be accessible from the outside and import what they need. In the browser, independent top-level scope also exists for each &#8249;script type="module"&#8250;.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a module imported into multiple places re-evaluated each time it gets imported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, if the same module gets imported into multiple other places, its code is executed only the first time, then exports are given to all importers. If executing a module code brings side effects, like showing a message, then importing it multiple times triggers it only once – the first time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the JavaScript import.meta object do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The import.meta object exposes context-specific metadata to a JavaScript module. It contains information about the module, like the module's URL. The syntax consists of the keyword import, a dot, and the identifier meta. Typically the left-hand side of the dot is the object on which property access gets performed, but here the import is not an object.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there anything specific that we should remember about the “this” keyword in JavaScript modules?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, in a module, top-level “this” is undefined. Compared to non-module scripts, where "this" is a global object.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are module scripts loaded in the browser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Module scripts always defer, the same effect as the defer attribute for external and inline scripts. In other words, downloading external module scripts &#8249;script type="module" src="..."&#8250; does not block HTML processing, they load in parallel with other resources. The module scripts wait until the HTML document is fully ready (even if they are tiny and load faster than HTML), and then run. The relative order of scripts gets preserved: scripts that appear first in the document executes first. Module scripts, as a consequence, always "view" the fully loaded HTML document, including HTML components beneath them.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between inline asynchronous scripts and a module?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For non-module scripts, the async attribute only works on external scripts. Async scripts run immediately, independently of other scripts or the HTML document. For module scripts, it works on inline scripts as well. That is good for functionality that does not depend on counters, ads, or document-level event listeners.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain how external scripts with type="module" are different from scripts without it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'External scripts with the type="module" attribute differ in two ways. For starters, external scripts with the same src only run once. Second, Cross-Origin Requests, external scripts that get requested from a different origin (for example, another site) require CORS headers.',
      },
    },
    {
      '@type': 'Question',
      name: 'In node.js bare modules are common, are bare modules allowed in browser imports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, The import must be given a relative or absolute URL in the browser. Modules that do not have a url path getting defined as "bare" modules, and such modules get blocked for import.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the fallback script type for older browsers for JavaScript modules?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Old browsers do not understand type="module". Scripts of an unknown type just get ignored. For them, it is possible to provide a fallback using the nomodule attribute.',
      },
    },
  ],
};

export default StructuredData;
