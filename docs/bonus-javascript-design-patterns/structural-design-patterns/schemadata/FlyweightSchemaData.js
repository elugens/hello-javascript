const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the flyweight design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It allows you to fit more objects into the available RAM by sharing parts of state between multiple objects rather than keeping all of the data in each object.',
      },
    },
    {
      '@type': 'Question',
      name: 'The Flyweight pattern belongs to which pattern family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Flyweight pattern gets classified as a Structural design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of objects are involved in the Flyweight Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Client, FlyweightFactory, and Flyweight are all part of the Flyweight pattern. To obtain flyweight objects, the Client invokes FlyweightFactory. If a flyweight object is requested but does not exist, the FlyweightFactory generates and manages it. It spawns one and saves newly generated flyweights for future use. Stores intrinsic data that gets shared throughout the program.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should the Flyweight Pattern be used?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We should use this pattern when our application has many objects that consume the same data or when memory storage costs are high. JavaScript uses this pattern to distribute a list of immutable strings throughout the program. This pattern most commonly gets found in network programs or word processors, and it can be used in internet browsers to prevent the same images from loading. The flyweight pattern enables image caching. As a result, only new images are loaded from the Web when a web page loads, while existing ones get extracted from the cache.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the advantages of employing the Flyweight pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your software has a lot of similar objects, you can save much memory.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the disadvantages of employing the Flyweight pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Drawbacks of the Flyweight Pattern. When certain context data needs to be regenerated each time a flyweight method gets called, you may be sacrificing RAM for CPU cycles. The code becomes noticeably more complex with the Flyweight Pattern. New colleagues get perplexed as to why an entity's state gets partitioned.",
      },
    },
  ],
};

export default StructuredData;
