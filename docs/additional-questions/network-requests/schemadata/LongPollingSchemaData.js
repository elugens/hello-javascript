const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Could you describe what long polling means in network requests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Long polling is the simplest way of having a persistent connection with the server that does not use any specific protocol like WebSocket or Server-Side Events. It is relatively easy to implement and good enough in many cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between long and regular polling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main difference is that long polling is a much better way to poll the server because it is relatively easy to implement and delivers messages without delays. Regular polling can suffer from delays between requests of up to 10 seconds, and the server is bombed with a request every 10 seconds, leaving regular polling as a less than equitable way of polling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the steps in the long polling process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The lengthy polling procedure begins with a request to the server. The server does not disconnect until a message is ready to be sent. The server answers the request when the notice shows, and the browser instantly initiates a new request. The circumstance in which the browser issued a request and has a pending connection with the server is standard. The connection only restores itself (reconnects) when a message is delivered. If the connection disintegrates due to a network fault, the browser instantly makes a new request.',
      },
    },
  ],
};

export default StructuredData;
