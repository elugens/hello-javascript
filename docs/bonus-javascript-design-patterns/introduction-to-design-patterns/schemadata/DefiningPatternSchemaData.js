const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a proto-pattern in terms of design patterns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pattern that has not yet passed "pattern"-ity tests is called a proto-pattern. Proto-patterns result from the work of someone that created a specific solution that is worthy of sharing but may not have yet had the opportunity to be qualified due to its newness.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do you name a description or fragment of a proto-pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A brief description or snippet of a pattern is known as patlet.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can we know if a design pattern is worth utilizing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Estimating a good design pattern.<br/><br/><ul>\r\n<li><strong>Solves a particular problem:</strong> Patterns are not designed to capture concepts or methods; instead, they are designed to capture solutions. This method is a necessary component of a successful design pattern.</li>\r\n<li></li>\r\n<li><strong>There is no clear answer to this problem:</strong> Problem-solving frequently seeks to deduce from well-known concepts. The best design patterns frequently give indirect answers to challenges \u2013 this approach is an essential strategy for the most challenging design problems.</li>\r\n<li><strong>The concepts must be proven solutions to a problem:</strong> Design patterns require proof that they function as described, and without this, we should not entertain their use.</li>\r\n<li><strong>It must describe or express a relationship:</strong> A pattern may represent a module type in some circumstances. While an implementation may appear this way, the formal design description must specify far deeper system structures and processes that explain how it connects to our code.</li>\r\n</ul>',
      },
    },
    {
      '@type': 'Question',
      name: 'What is "The Rule of Three" concerning design patterns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One of the additional requirements for a pattern to be valid is that they display some recurring phenomenon. We often qualify this approach in three key areas, known as the rule of three.<br/><br/>To show recurrence, one must demonstrate: <ol>\r\n<li><strong>Fitness of purpose:</strong> How is the pattern proven to be successful?</li>\r\n<li><strong>Usefulness:</strong> Why is the pattern considered good?</li>\r\n<li><strong>Applicability:</strong> Is the design worthy of being a pattern because it pliable? How we implement, the design pattern must be detailed. When reviewing or defining a design pattern, it is essential to keep the above in mind.</li>\r\n</ol>',
      },
    },
    {
      '@type': 'Question',
      name: 'Describe the process used to author a new design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The process used to create a new design pattern includes documentation of your intent, motivation, structural representation, and code examples. Intent covers the problems and solutions and describes what the design does. The motivation explains the problem in detail and how the pattern solves the problem. The structure includes a class and object diagram that depicts each aspect of the pattern and how they are connected. The author provides a code example to represent the design.',
      },
    },
  ],
};

export default StructuredData;
