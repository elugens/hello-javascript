const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a way to implement prototypal inheritance without calling proto accessor property (deprecated) in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Since, the proto property is deprecated based the JavaScript specification. There are three modern methods that can be used in prototypal inheritance including Object.create(obj), Object.getPrototypeOf(obj), and Object.setPrototypeOf(obj, proto).<br /><br /> The Object.create(obj) method is used to create an empty object with given proto as prototype and optional property descriptors. The Object.getPrototypeOf(obj) that returns the prototype of an object, and Object. Object.setPrototypeOf(obj, proto) which sets the prototype of obj to proto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Object.create(obj) method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Object.create() method creates a empty object, using an existing object as the prototype of the newly created object. It has two parameters, including the proto and the descriptors. The proto parameter is the object which should be the prototype of the newly created object. The descriptors get defined as an object whose enumerable properties specify property descriptors that get added to the newly created object.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the function and syntax of the Object.getPrototypeOf() method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Object.getPrototypeOf(obj) method returns the prototype of the specified object. If there are no inherited properties, null gets returned.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the function and syntax of the Object.setPrototypeOf(obj, proto) method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Object.setPrototypeOf() method sets the prototype of a specified object to another object or null.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you change [[Prototype]] on existing objects, in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically, yes, but it is thought to be a horrible idea. We have the ability to get/set [[Prototype]] at any moment. However, it is normally only set once at the moment of object creation and is not changed again. Using Object to make "on-the-fly" changes to a prototype.  setPrototypeOf or obj. __proto__  = is a sluggish operation because it violates internal object property access optimizations. So, unless you know what you\'re doing or performance isn\'t important to you, we should avoid it. According to the MDN, changing the prototype after creation is a slow operation and can affect performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why was __proto__ replaced by the functions getPrototypeOf / setPrototypeOf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to the MDN, the creators replaced it with getPrototypeOf and setPrototypeOf, because of the performance issues related to its use. If you care about performance, you should avoid setting the [[Prototype]] of an object. Instead, create a new object with the desired [[Prototype]] using Object.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do you prefer, class inheritance and prototypal inheritance in JavaScript? If so, why?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Instances inherit from classes when we use class inheritance, and Hierarchical class taxonomies get created due to this. In contrast, instances inherit from other objects through prototypal inheritance, and they get formed from several objects. Because it is more straightforward and more versatile, I favor prototypal inheritance.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is classical inheritance an appropriate choice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The answer is never or rarely. Indeed, never more than one level. Multi-level class hierarchies are an anti-pattern, and it can lead to problems like method collision, which is not good.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between class inheritance and prototypal inheritance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Classes inherit from classes created in sub-classes using a hierarchical class taxonomy. Prototypal inheritance equates to a prototype functioning as an object instance, and objects inherit directly from each other. The difference is that class taxonomy is not a derivative of prototypal inheritance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a factory function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Factory functions are similar to constructor functions/class functions, but instead of requiring new to create an object, factory functions simply create an object and return it. They are often used to create objects that are not classes. Factory functions also do not require the use of the 'this' keyword for inner values. A factory function is different from a regular function in that it always returns an object, with any method, value, etc. contained within it.",
      },
    },
  ],
};

export default StructuredData;
