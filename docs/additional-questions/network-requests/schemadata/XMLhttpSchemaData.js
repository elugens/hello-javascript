const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you briefly explain the purpose of the XMLHttpRequest object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XMLHttpRequest is a built-in browser object that allows JavaScript to make HTTP requests. Even though it has the term "XML" in its name, it can work on any data, not just those in XML format. We can upload and download files, track progress, and perform a variety of other things. There is currently another, more recent method fetch, which partly deprecates XMLHttpRequest. Developers utilize XMLHttpRequest in modern web development for one of three reasons. One of the more historical reasons is that we need to maintain existing scripts using XMLHttpRequest or that we need to support ancient browsers without polyfills. We want something that fetch does not currently provide, such as tracking upload progress.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the two modes of operation that an XMLHttpRequest supports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XMLHttpRequest uses both synchronous and asynchronous modes of operation. This mode of operation invokes both, synchronously or asynchronously, using the XMLHttpRequest open method. The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.  If you want to run your request in async, then the async parameter should be set to true; otherwise, false for the default behavior. We should note that an open call, contrary to its name, does not open the connection. It only configures the request, but the network activity only starts with the call of send.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you open a connection and send a XMLHttpRequest to the server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we want to open a connection and send a XMLHttpRequest to a server, we must invoke the send method to send the message body. Some request methods like GET do not have a body. And some of them, like POST use the body to send the data to the server.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three events most widely used in XMLHttpRequests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most widely used events in XMLHttpRequest are the load, error, and progress events. The load event happens when the request is complete (even if HTTP status is like 400 or 500), and the response fully downloads. The error event happens when the request could not transmit, e.g., network down or invalid URL. The progress event triggers periodically while the response is downloaded and reports how much has gotten downloaded.',
      },
    },
    {
      '@type': 'Question',
      name: 'What properties can we use to access the results of a XMLHttpRequest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The properties we can use to access the results of an XMLHttpRequest include the status, statusText, and response properties. We can also specify a timeout using the timeout property. If the request fails or does not return within the given time, it cancels, triggering a timeout event.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the states of the XMLHttpRequest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "XMLHttpRequest changes between states as it progresses include unsent (0), opened (1), headers_received (2), loading (3), and done (4). A numeric value marks each. Unsent refers to the XMLHttpRequest client creation, but the open() method hasn't gotten called yet. Opened is when the open() method invokes. During this state, the request headers are set using the setRequestHeader() method, and the send() method is called, which initiates the fetch. The headers_received state refers to the send() method, and the response headers fully transmit. The loading state refers to the response body being received. The final state completes, defining that the data transfer has gotten completed or something went wrong during the transfer (e.g., infinite redirects). The current state is accessible as xhr.readyState. An XMLHttpRequest object travels them in the order 0 → 1 → 2 → 3 → … → 3 → 4. State 3 repeats every time a data packet is received over the network.",
      },
    },
    {
      '@type': 'Question',
      name: 'What method do we use to terminate a XMLHttpRequest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can terminate the request at any time. The call to xhr.abort() triggers the abort event, and xhr.status becomes 0 (unset state or has not been initialized).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the mode if the open() methods async parameter sets to false?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the open method\'s third async parameter is set to false. The request is made in a synchronous manner. To put it another way, JavaScript execution pauses at send() and continues when the response is received. Similar to alert or prompt instructions. While synchronous calls appear to be a good idea, they are rarely used since they restrict in-page JavaScript from being run until the loading is complete. In some browsers, scrolling gets difficult. If the synchronous call takes too long, the browser may advise that the "hanging" webpage be closed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you send custom headers via an XMLHttpRequest to a server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XMLHttpRequest allows both to send custom headers and read headers from the response.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the setRequestHeader method do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The setRequestHeader sets the request header with the given name and value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there any restriction on the Headers in an XMLHttpRequest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several headers are managed exclusively by the browser, e.g., Referrer and Host. XMLHttpRequest is not allowed to change them for user safety and the correctness of the request. Another peculiarity of XMLHttpRequest is that one cannot undo setRequestHeader. Once the header sets, additional calls add information to the header but do not overwrite it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you give an example the function and syntax of the getResponseHeader() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The XMLHttpRequest method getResponseHeader() returns the string containing the text of a particular or single header's value. If there are multiple response headers with the same name, their values return as a single concatenated string, where each value is separated from the previous one by a pair of commas and a space. The getResponseHeader() method returns the value as a UTF byte sequence. It retrieves the response header with the given name (except Set-Cookie and Set-Cookie2).",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the getResponseHeader() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The XMLHttpRequest method getResponseHeader() returns the string containing the text of a particular or single header's value. If there are multiple response headers with the same name, their values return as a single concatenated string, where each value is separated from the previous one by a pair of commas and a space. The getResponseHeader() method returns the value as a UTF byte sequence. It retrieves the response header with the given name (except Set-Cookie and Set-Cookie2).",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the getAllResponseHeader() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The XMLHttpRequest method getAllResponseHeaders() returns all the response headers, separated by CRLF, as a string or returns null if no response transmits. If a network error happens, an empty string returns. It returns all response headers, except Set-Cookie and Set-Cookie2.',
      },
    },
    {
      '@type': 'Question',
      name: 'What built-in object can we use to make a POST request?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To make a POST request, we can use the built-in FormData object. We can create it, optionally fill it from the form, and append more fields if needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to track upload progress with an XMLHttpRequest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we upload something big, we are undoubtedly more interested in tracking the upload progress. But we should be aware that the xhr.onprogress doesn’t help here. We use the xhr.upload method to track upload progress, and it generates events similar to xhr, but xhr.upload triggers them solely on uploading.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do cross-origin request function in relation to XMLHttpRequest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XMLHttpRequest can make cross-origin requests using the same CORS policy as fetch. Like fetch, it does not send cookies and HTTP authorization to another origin by default. To enable them, set xhr.withCredentials to true.',
      },
    },
  ],
};

export default StructuredData;
