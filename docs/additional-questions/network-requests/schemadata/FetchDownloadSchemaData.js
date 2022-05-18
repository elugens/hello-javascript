const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can we track download progress in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, we can use the fetch method to track download progress. We should note that there is currently no way for fetch to track upload progress. For that purpose, we should use the XMLHttpRequest. To track download progress, we can use response.body property. It is ReadableStream – a special object that provides body chunk-by-chunk as it comes. We can find the Readable streams description in the Streams API specification standard. Unlike response.text(), response.json() and other methods, response.body gives control over the reading process, and we can count the consumption level at any moment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the result of the await reader.read() JavaScript method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'e result await reader.read() call is an object with two properties, including done and value. The done property returns true when the reading is complete. Otherwise false. The value is a typed array of bytes, Uint8Array. Additional Info: Streams API also describes asynchronous iteration over ReadableStream with for await..of loop, but it’s not yet widely supported so that we can use while loop.',
      },
    },
  ],
};

export default StructuredData;
