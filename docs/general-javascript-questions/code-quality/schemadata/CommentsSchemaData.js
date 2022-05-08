const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you reduce the number of unnecessary comments in your code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The key to reducing unnecessary comments in your code is to write self-descriptive code. The best way to achieve this is to replace a chunk of code with a function.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are Good comments in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Good comments describe the architecture and lean less toward explaining what the code is doing. Good comments provide the team with a high-level overview of the components and how they interact. Good comments give a bird's eye view of the code. Good comments include documenting function parameters and their usage as well.",
      },
    },
  ],
};

export default StructuredData;
