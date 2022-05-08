const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does JavaScript manage memory manually or automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript automatically allocates memory when objects get created and clears the memory when the object no longer references it. (Garbage Collection) This automaticity is a potential source of confusion: it can give developers the false impression that they do not need to worry about memory management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the three steps of the memory life cycle in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The three steps in the memory life cycle include allocating memory, using the allocated memory, and releasing the allocated memory when it is no longer needed. The last part is more implicit in JavaScript than in low-level languages.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the central concept of memory management in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The central concept of memory management in JavaScript is reachability. Simply put, "reachable" means values that are accessible or usable somehow and are guaranteed to get stored in memory.',
      },
    },
    {
      '@type': 'Question',
      name: 'Concerning JavaScript memory management. What is a GC root?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A "root" is simply an object that the garbage collector assumes is reachable by default, which then has its references traced to find all other current objects that are reachable. Any object that is not reachable through any reference chain of any root objects is considered unreachable and eventually gets destroyed by the garbage collector.',
      },
    },
    {
      '@type': 'Question',
      name: 'A base set of inherently reachable values cannot get deleted for obvious reasons. Can you name at least one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript cannot delete Global variables directly, and the global variable must be set to null before the memory can be collected. However, the variable still exists and references null (nothingness).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can interlinked objects be garbage collected based on the nullification of a specific object on the GC root in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the deleted or nullified object gets garbage collected even if it is part of a GC root or one of its properties references another object.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible that all the interlinked objects in a GC root become unreachable and removed from memory?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is possible if the root gets nullified in the program.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the basic garbage-collection algorithm called in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The basic garbage collection algorithm is called mark-and-sweep.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain how the internal JavaScript garbage collector algorithm works?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The following "garbage collection" steps regularly get performed:</strong><br /><br />\r\n  <ol>\r\n    <li>The garbage collector takes roots and "marks" (remembers) them.</li>\r\n    <li>Then it visits and "marks" all references from them.</li>\r\n    <li>Then it visits marked objects and marks their references. The garbage collector remembers all visited objects so as not to visit the same object twice in the future.</li>\r\n    <li>And so on until every reachable (from the roots) reference is visited.</li>\r\n    <li>All objects except marked ones get removed.</li>\r\n  </ol>',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you name the three standard garbage collection optimizations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The three standard garbage collection optimizations include generalization, incremental, and idle-time collection. You should note that each engine implements different tweaks and techniques.',
      },
    },
  ],
};

export default StructuredData;
