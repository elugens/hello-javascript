const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the memento design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We use the memento pattern to store and restore an object temporarily. The technology used to store the object's state gets determined by the needed persistence period, which can vary.",
      },
    },
    {
      '@type': 'Question',
      name: 'The Memento pattern belongs to which pattern category?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Memento pattern is a type of behavioral design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a suitable JavaScript use case for the Memento Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We can use the Memento pattern to create snapshots of an object's state to restore it to a previous state. The Memento pattern allows you to create complete copies of an object's state, including private fields, and store them independently from the object. While most people remember this pattern because of the \"undo\" use case, it's also helpful when dealing with transactions (i.e., if you need to roll back an operation on an error). We can also use this pattern when direct access to an object's fields/getters/setters violates its encapsulation. The Memento makes the object responsible for capturing a snapshot of its current state. Because no other object can read the snapshot, the original object's state data remains safe and secure.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the advantages of employing the Memento pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Benefits of the Memento Pattern: Without breaking the object's encapsulation, you can take snapshots of its state. You can simplify the originator's code by allowing the caretaker to keep track of the originator's state history.",
      },
    },
    {
      '@type': 'Question',
      name: "What are some of the Memento pattern's drawbacks?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Drawbacks of the Memento Pattern: If clients frequently create mementos, the program may consume a large amount of RAM/memory. To be able to destroy outmoded keepsakes, caregivers should track the originator's lifecycle. Most dynamic programming languages, such as JavaScript, cannot guarantee that the Memento's state remains unchanged.",
      },
    },
  ],
};

export default StructuredData;
