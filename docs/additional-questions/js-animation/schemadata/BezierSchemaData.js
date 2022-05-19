const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Bezier curve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bezier curves are used in computer graphics to draw shapes, CSS animation, or other implementations. They are a straightforward thing, worth studying once, and then feel comfortable in the world of vector graphics and advanced animations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum number of control points a Bezier curve can have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bezier curves can have 2, 3, 4, or more control points, but the minimum number is 2.',
      },
    },
  ],
};

export default StructuredData;
