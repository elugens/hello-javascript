const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the two types of object property keys in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By specification, object property keys may be a string or symbol type. These two types are not numbers, not Booleans, only strings or symbols.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain what a Symbol is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The data type symbol is a primitive data type. The Symbol() object returns a value of type symbol, and it has static properties that expose several members of built-in objects. It also has static methods that expose the global symbol registry and resembles a built-in object class. A "symbol" represents a unique identifier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Symbol function get registered in the global symbol registry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, the Symbol object does not create a global symbol available in your whole codebase. To create symbols available across files and even across realms (each of which has its global scope), use the methods Symbol.for() and Symbol.keyFor() to set and retrieve symbols from the global symbol registry.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can two Symbol descriptions be identical in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The description can be identical, but the value is unique and returns false if both values get compared.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Symbols auto-convert to strings in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most values in JavaScript support implicit conversion to a string, but a symbol is rare and unique, and it does not auto-convert to a string. This behavior is an intentional "language guard" against messing up because strings and symbols are fundamentally different and should not accidentally convert one into another.',
      },
    },
    {
      '@type': 'Question',
      name: 'To explicitly convert a Symbol to a string, what built-in method should we use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We should explicitly call the toString() method to convert a Symbol to a string.',
      },
    },
    {
      '@type': 'Question',
      name: 'If you want to show the Symbol description, what property should you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To get and show a symbol description, we should use the description property and dot notation to access the value.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can the Symbol object act as a property safeguard in objects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Symbols can create hidden object properties that cannot be overwritten or accidentally accessed. Unique properties like ids can conflict with ids from external libraries. A Symbol can act as a hidden property and reduce the likelihood of property conflicts and bugs in our application.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the benefit of using Symbol("id") over a string "id"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Symbols allow us to create secured properties of an object so that no other part of code is accidentally accessed or overwritten. If a user object, for example, belongs to another codebase, and that code also works with the same user properties, we shouldn’t just add any fields to it, and that’s unsafe. If we use a Symbol(), the external library cannot accidentally access its property. In fact, the third-party library probably won’t even see it, so it’s probably all right to do. The benefit is a cloak created by Symbol to reduce object property conflicts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use a Symbol in an object literal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can achieve this by wrapping the property in square brackets. This approach allows the property to be a key and not a string.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you return a Symbol in a for…in loop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, you can access it directly, but for…in loop does not return the property. That is a part of the safeguarding of symbolic properties in principle. If another script or a library loops over our object, it will not unexpectedly access a symbolic property.',
      },
    },
    {
      '@type': 'Question',
      name: 'JavaScript hides Symbol properties for a reason. Is there a way to copy all the properties, including the symbolic ones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, symbolic properties can be cloned in an object by using object.assign to copy both the string and symbol properties. This behavior ensures that all the properties, strings, and symbols, are copied into the newly cloned object.',
      },
    },
    {
      '@type': 'Question',
      name: 'Sometimes, you need to have the same-named symbols to be the same entities. Is there a way to read or create a symbol from the registry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can use the Symbol.for(key) to check the global registry and return it if available. Otherwise, it creates a new symbol Symbol(key) and stores it in the global registry by the given key. Symbols inside the registry are called global symbols.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Symbol.for(key) and Symbol.keyFor(sym) in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Symbol.for(key) returns a symbol by name, and Symbol.keyFor(sym) returns a name by a global symbol.',
      },
    },
    {
      '@type': 'Question',
      name: 'The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol. Does it work for non-global symbols?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Symbol.for(key) returns a symbol by name, and Symbol.keyFor(sym) returns a name by a global symbol. If the symbol is not global, it does not find it and returns undefined. Notably, we must remember that all symbols, including non-global symbols, can return a description.',
      },
    },
  ],
};

export default StructuredData;
