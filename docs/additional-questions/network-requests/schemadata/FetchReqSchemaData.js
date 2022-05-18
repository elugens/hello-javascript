const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are some of the use cases related to network requests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript can send network requests to the server and load new information whenever needed. For example, we can use a network request to submit an order, load user information, and receive periodic updates from a server.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the differences between an XMLHttpRequest and Fetch API?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Fetch API is a modern JavaScript alternative to XMLHttpRequest, and it also performs the same task, network requests. The Fetch API also gets incorporated into the browser. However, not all browsers support this, particularly older versions such as Internet Explorer 7 and 8. (which can be polyfilled).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the JavaScript Fetch method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network. The fetch() method starts fetching a resource from the network, returning a promise that gets fulfilled once the response is available. Fetch has two arguments, including the URL and optional options object. The URL is the URL getting accessed on the server, and the options object holds an array of parameters, including method, headers, and other options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the first stage of the response process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First, the promise, returned by fetch, resolves with an object of the built-in Response class as soon as the server responds with headers. At this stage, we can check HTTP status to see whether it is successful and check headers, but we do not have the body yet. The promise rejects if the fetch could not make HTTP-request, e.g., network problems, or there’s no such site. We should note that abnormal HTTP statuses, such as 404 or 500, do not cause an error. We can check the response and status by using the response properties response.ok and response.status.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the second stage of the response process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Second, starts the process of getting the response body. We need to use an additional method call to retrieve the response. The response provides multiple promise-based methods to access the body in various formats, including text, JSON, formData, blob, and ArrayBuffer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the max number of fetch responses we can read simultaneously? Can we extract a text and JSON network response, for example?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "o, we can only use one type of body reading. For example, if we've previously received the answer using response.text(), response.json() fails since the body content has already been processed or consumed.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you briefly explain the response header Object in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The response headers are available in an iterable Map-like header object in response.headers. It is not precisely a Map, but it has similar methods to retrieve individual headers by name or iterate over them.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should a request header be implemented or set in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use the headers option in fetch to set a request header, and it has an object with incoming and outgoing headers. There are several restrictions on what we may access in the HTTP header.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an example of a banned HTTP header name?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A forbidden header name is the name of an HTTP header that cannot be modified programmatically; specifically, an HTTP request header name (in contrast with a Forbidden response header name). Modifying such headers is forbidden because the user agent (browser) retains complete control over them. Names starting with `Sec-` are reserved for creating new headers safe from APIs using Fetch that grant developer control over headers, such as XMLHttpRequest.',
      },
    },
    {
      '@type': 'Question',
      name: 'To make a post request, what modern JS method should we use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To make a POST request or a request with another method option, we need to use the fetch method. For example, when we want to use a method post with JSON. We have to set the header and body inside the Fetch options. We are not limited to just post requests as a method option, and we also have access to HTTP requests and others. If the request body is a string, the Content-Type header gets set to text/plain;charset=UTF-8 by default.',
      },
    },
  ],
};

export default StructuredData;
