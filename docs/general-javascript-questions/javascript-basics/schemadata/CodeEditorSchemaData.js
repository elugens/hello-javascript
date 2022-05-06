const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does IDE stand for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Integrated Development Environment, but developers also call it a code editor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an IDE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An IDE is a development environment (code editor) that allows developers to load, save, edit, manage, and delete projects or files written in different programming languages.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the primary difference between an IDE and a lightweight editor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In contrast to a lightweight code editor, an IDE works on the project level, so it loads more data when it starts and analyzes the project structure, if necessary. We can use a lightweight editor if we only need to edit one file.<br><strong>Additional Information<strong>: There is no strict boundary between a lightweight code editor and an integrated development environment since lightweight editors often have a good selection of plugins, such as directory-level syntax analyzers and auto-completers.',
      },
    },
  ],
};

export default StructuredData;
