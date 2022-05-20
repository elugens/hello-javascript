const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Could you please explain the proxy design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Proxy Pattern, as the name suggests, functions as a proxy or placeholder for another object to manage access, decrease cost, and simplify the code. The proxy could connect to almost anything – a network connection, a large object in memory, a file, or another resource that would have been expensive or impossible to recreate.',
      },
    },
    {
      '@type': 'Question',
      name: 'The Proxy pattern belongs to which pattern family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Proxy pattern is a type of structural design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good use case for the Proxy Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The proxy pattern attempts to lighten the load on the target object. It is useful when dealing with large applications that make many network requests. Because delays may occur when responding to such requests, using a proxy pattern prevents the target object from becoming overburdened with requests. HTTP requests are a real-world example. Because these are costly operations, the proxy pattern aids in reducing the number of requests forwarded to the target.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the advantages of employing the Proxy pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits of the Proxy Pattern: You have control over the service object without the client being aware of it. You can control the lifecycle of the service object even if your clients do not care. The proxy functions even if the service object is not ready or unavailable. Open/Closed Principle. Users can add new proxies without interrupting the service or clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the disadvantages of employing the Proxy pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Drawbacks of the Proxy Pattern: Because you'll be introducing many new classes, the code may become more complicated. The service's response time may be delayed or hindered.",
      },
    },
  ],
};

export default StructuredData;
