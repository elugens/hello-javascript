const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What two events can we use to track the loading of external resources?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The browser allows us to track the loading of external resources – scripts, iframes, pictures, and much more. We can use two events to track external resources' loading, onload and onerror. The onload event occurs when an object loads and the onerror event is triggered if an error occurs while loading an external file (e.g., a document or an image).",
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to load a function specified within an external script?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can use the script.onload event, to handle the invocation of the function. It triggers after the script is completely loaded and executed. So, in onload we can use script variables, run functions, and other implementations.',
      },
    },
    {
      '@type': 'Question',
      name: "How are errors that occur during a script's loading tracked?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'rrors that occur during the loading of the script can be tracked in an error event using the script.onerror property. In the case of HTTP errors, we do not know if it was an error 404 or 500 or something else, just that the loading has failed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any limitations to the onload/onerror event properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, events onload/onerror is limited to tracking only the load outcome. Errors that may occur during script processing and execution are out of scope for these events. The onload event triggers if a script is successfully loaded, even with programming mistakes. We can use the window.onerror global handler to track script errors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are the load and error events limited to internal scripts, or do they work with other external resources?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The load and error events also work for other resources, basically for any resource that has an external src. There are some limitations in functionality based on the type of source getting loaded. Most resources start loading when they load in the document. But &#8249;img&#8250; is an exception. It starts loading when it retrieves a src (*). For &#8249;iframe&#8250;, the iframe.onload event triggers when the iframe loading finishes, both for successful load and in case of an error. That is for historical purposes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what a cross-origin policy is in front-end development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "There is a rule: scripts from one site cannot access the other site's contents. So, a script at https://facebook.com cannot read the user’s mailbox at https://gmail.com. Or, to be more precise, one origin (domain/port/protocol triplet) cannot access the content from another one. So even if we have a subdomain or just another port, these are different origins with no access to each other.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any limitations in cross-origin error handling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, the details differ depending on the browser, but the concept is the same: all information about a script's internals, including error stack traces, is concealed because it comes from a different domain or sub-domain.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why do we need error details?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are many services (and we can build our own) that listen for global errors using window.onerror, save errors, and provide an interface to access and analyze them. That is great, as we can see actual errors triggered by our users. But if a script comes from another origin, then there is not much information about its errors, as we’ve just seen.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three levels of cross-origin access?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are three levels of cross-origin access including no cross-origin attribute, crossorigin = "anonymous", and crossorigin = "use-credentials". In the first level, no cross-origin attribute does not allow or strictly prohibits cross-origin access. The second level is access allowed if the server responds with the header Access-Control-Allow-Origin with * or our origin. The browser does not send authorization information and cookies to the remote server. The last level of cross-origin use credentials that allow access if the server returns the headers Access-Control-Allow-Origin with our origin and Access-Control-Allow-Credentials: true. The browser communicates with the remote server by sending authorization information and cookies.',
      },
    },
  ],
};

export default StructuredData;
