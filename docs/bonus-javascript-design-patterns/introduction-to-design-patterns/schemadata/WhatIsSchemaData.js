const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Design Pattern in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A design pattern can be a template for solving a particular design problem. It is not a finished part of your application. But instead, it is a description or template that can give your ideas on how to approach a problem and inspire solutions. Thus, the code for the two different programming scenarios implementing the same pattern can differ.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you name one reason we use design patterns in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Design patterns provide us with a common vocabulary to describe solutions to problems within our applications. This approach can be significantly simpler than describing syntax and semantics when we are trying to show a way of structuring a proper solution in code form.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is one of the most important aspects of writing maintainable code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One of the most important aspects of writing maintainable code is noticing the recurring themes in the code and optimizing them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is managing written code so much more complicated than writing maintainable design patterns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The reason for this is that the code you write is not only used by other developers but also by your future self. To optimize your code, you need to be able to notice the patterns.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the acronym GoF stand for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GoF stands for Gang of Four, representing the four engineers, including Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, who published Design Patterns: Elements Of Reusable Object-Oriented Software.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is it important to understand patterns and be familiar with them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 't is important to understand design patterns because they provide users with a proven solution to a problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three main benefits of design patterns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Design patterns provide users with a solid approach to solving problems, act as an out-of-the-box solution, and can be expressive.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are design patterns an exact solution?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, design patterns are not an exact solution, but it is essential to remember that the role of a pattern is merely to provide us with a solution scheme. Patterns do not solve all design problems, nor do they replace good software designers; however, they support them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain one of the advantages of using design patterns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Advantages of using Design Patterns<br/><br/>\r\n<ul>\r\n<li><strong>Design patterns assist in preventing minor issues that can cause significant problems in the application development process.</strong> Code built on proven practices allows us to spend less time worrying about the structure of our code and more time focusing on quality solutions. Using patterns, we can code in a more structured and organized way, reducing the necessity of refactoring it later.</li>\r\n<li></li>\r\n<li><strong>Patterns enable generalized solutions to describe without being explicit about their application to a specific problem.</strong> Due to this generalized approach, we can use design patterns to improve the structure of our code regardless of the application (and, in many cases, the programming language) we are using.</li>\r\n<li></li>\r\n<li><strong>Specific patterns can decrease the overall file-size footprint of our code by avoiding repetition.</strong> Encouraging developers to look at their solutions closely can help reduce duplication. To reduce the overall size of our codebase, we can reduce the number of functions performing similar tasks in favor of a single generalized higher-order function. We should use an approach known as DRY coding. DRY coding is an approach that aims to make our code more readable.</li>\r\n<li></li>\r\n<li><strong>Patterns expand a developer's vocabulary, which makes communication faster.<strong></li>\r\n<li></li>\r\n<li><strong>Frequently used design patterns are improved over time by harnessing the knowledge of the many.<strong> Using design patterns gives back to the design pattern community and helps improve application development. In some cases, this leads to creating entirely new design patterns, while in others, it can lead to improved guidelines. This approach can ensure that pattern-based solutions continue to become more robust than ad-hoc solutions may be.</li>\r\n</ul>",
      },
    },
  ],
};

export default StructuredData;
