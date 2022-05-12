const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the (extends) keyword used in JavaScript classes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The extends keyword is used in class declarations or class expressions to create a class of a child of another class. We can use the "extends" keyword for subclassing bespoke classes and built-in objects such as the Date object and methods that return a class.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use an expression after the extends keyword in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can use an expression after the extends keyword. We can use the extends keyword to subclass custom classes and built-in objects such as the Date object and procedures meant to yield a class.',
      },
    },
    {
      '@type': 'Question',
      name: 'In JavaScript, is it possible to override a method in a subclass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can override a method in a subclass by calling super on the method inside the method we want to override. This approach gives us access to the parent method, but we can still apply additional methods in conjunction with the `super.method` syntax.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does super behave inside of arrow functions JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arrow functions have no super; if it is accessed, it gets taken from the outer function context.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a class extends another class without an explicit constructor in the child class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to the specification, if a class extends another class and has no constructor, then the parent class constructor is generated in the child class, passing the child all the arguments in the parent. This behavior happens if we do not write a constructor of our own.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you override a parent constructor in an inheriting class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Inheriting classes must call super in their constructor before using this, or it results in an error. We use the super keyword to access and call functions on an object's parent. When used in a constructor, the super keyword appears alone, and we must use it before this keyword. The super keyword gets used to call functions on a parent object.",
      },
    },
    {
      '@type': 'Question',
      name: 'In JavaScript, is there a way to override class fields in parent classes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can override not only methods but also class fields. The main thing to remember is that the parent constructor always uses its field value, not the overridden one. To fix issues with overriding class fields, we can create a method to display the information needed in the inheriting class.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain how super works under the hood as [[HomeObject]]?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While one might expect Obj.method() to reach up and call into Obj.prototype.method, this is not the case. To find super.method(), the called function uses its home object, a value created when it was initially defined and one that does not get changed when the method gets reassigned. When a function gets specified as a class or object method, its [[HomeObject]] property becomes that object. Then super uses it to resolve the parent prototype and its methods.',
      },
    },
  ],
};

export default StructuredData;
