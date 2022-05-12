const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a JavaScript Class in Object-Oriented Programming (OOP)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes and have the same syntax and semantics that do not get shared with ES5 class-like semantics. Classes are, in fact, "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between function declarations and class declarations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A significant difference between a function declaration and a class declaration is that a function declaration gets hoisted, and class declarations are not. Another difference is that those function declarations get declared at any point in your code.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Class expression in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. (it can be retrieved through the class's (not an instance) name property, though). In a named class expression, it is visible inside the class only.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to construct a Class in JavaScript on the fly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is accomplished by returning a class from a function and using the new operator to obtain a new class.',
      },
    },
    {
      '@type': 'Question',
      name: 'In your opinion, is classical inheritance ever the right choice? If so, when? If not, why?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Classical inheritance is rarely the best solution, and we can utilize it for a single levels in rare situations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you implement computed names in JavaScript classes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'es, you can implement computed names in JavaScript classes in the same fashion as in Object literals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Class fields are a new addition to JavaScript. Can you explain their implementation in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, class fields are a syntax that allows us to add properties to a class. It is implemented by adding a name property to a class and assigning a value to that property. The critical difference between class fields is that we set them on individual objects, not Class.prototype.',
      },
    },
    {
      '@type': 'Question',
      name: 'JavaScript classes are known to allow complex expressions and function calls in named class fields. Is there a way to create bound methods to classes without losing (this) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, there are two approaches to “binding a method” to its class. They include passing a wrapper function such as setTimeout() or binding the method to the object constructor. We could use other options such as regular function declarations if necessary.',
      },
    },
  ],
};

export default StructuredData;
