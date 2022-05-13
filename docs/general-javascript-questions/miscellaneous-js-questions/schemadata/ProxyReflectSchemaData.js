const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a proxy object in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Proxy object surrounds another object and intercepts activities such as reading/writing properties and others, processing them optionally on its own or transparently letting the object handle them. Many libraries and browser frameworks make use of proxies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the proxy object in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You may use the Proxy object to establish a proxy for another object that can intercept and redefine core operations for that object. To function, a Proxy has two arguments. It has a target and a handler parameter to carry out its operations. The target is the original object that you desire to proxy. A handler is an object that describes which actions get intercepted and how intercepted operations get redefined. It runs if a matching trap is in the handler for a proxy action. The proxy gets an opportunity to handle it; otherwise, the operation gets executed on the target.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can we intercept with a JavaScript proxy trap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a proxy trap, we can intercept invocation of internal methods like the get and set internal methods. For every internal method, there is a trap. For example, [[Get]] has a handler method of get() for reading a property, [[Set]] the internal method to write to a property, and so on. These methods get explicitly used in the specification, and we cannot call them directly by name.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the proxy overwrite the variable when you implement a proxy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the proxy should always replace the target object, and no one should ever make a reference to the target object after it has been proxied. Otherwise, it is simple to make mistakes and debug.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the proxy set method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proxies have a handler.set() method used as a trap for setting a property value. There are four arguments to the set method: target, property, value, and receiver. The object we are aiming toward is known as the target. The name or symbol of the property set is the property, and the value is the newly set value of the property. The object the assignment initially gets set is known as the target. This object is usually the proxy itself. But a set() handler can also be called indirectly via the prototype chain or other ways.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is meant by invariants in JavaScript proxies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, proxy invariants are a condition that the internal methods and traps must fulfill. In most cases, this refers to return values. The internal [[Set]] method must return true if the value gets successfully written. Otherwise false. Most of the internal methods require a specific return value. Traps can intercept these operations, but they must follow these rules. Invariants ensure correct and consistent behavior of language features. The complete invariants list is in the specification. You probably won’t violate them if you are not doing something weird.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to iterate over an object’s keys using a method that uses the [[OwnPropertyKeys]] internal method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Object.keys, for..in loop and most other methods that iterate over object properties use [[OwnPropertyKeys]] internal method to extract a list of properties. Object.keys/values() returns non-symbol keys/values with enumerable flag (property flags were explained in the article Property flags and descriptors). You can view others in the specification, such as getOwnPropertyNames and getOwnPropertySymbols that use the [[OwnPropertyKeys]] internal method.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do private (#) properties and methods require proxies in a class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, Modern JavaScript engines natively support private properties in classes, prefixed with #, and no proxies are required. However, such properties have their own  issues, and child classes do not inherit them.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the benefit of using a Proxy vs. a wrapper function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proxy is much more powerful, as it forwards everything to the target object. A wrapper function does not forward property read/write operations. After the wrapping, the access gets lost to properties of the original functions, such as name, length, and others.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function of the Reflect built-in JavaScript object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reflect is a built-in object that simplifies the creation of a Proxy. Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of proxy handlers. Reflect is not a function object, so it is not constructible. You cannot use it with a new operator or invoke the Reflect object as a function. All properties and methods of Reflect are static (just like the Math object). For every internal method, trappable by Proxy, there is a corresponding method in Reflect, with the same name and arguments as the Proxy trap.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the JavaScript proxy built-in object have any limitations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Proxies provide a unique way to alter or tweak the behavior of the existing objects at the lowest level. Still, it is not perfect. There are limitations. Many built-in objects, for example, Map, Set, Date, Promise, and others, make use of so-called “internal slots”. These are like properties but reserved for internal, specification-only purposes. For instance, Map stores items in the internal slot [[MapData]]. Built-in methods access them directly, not via [[Get]] / [[Set]] internal methods. So, Proxy cannot intercept that. The proxy does not have these internal slots after a built-in object gets proxied, so the built-in methods fail.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to proxy an inherited class with private fields in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but typically if you attempt to proxy private fields, the class proxy breaks after proxying. The reason is that private fields get implemented using internal slots. JavaScript does not use [[Get]]/[[Set]] when accessing them. A common fix for this is to bind the value to the target.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can proxies intercept an object used in a strict equality test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, proxies may intercept a wide range of operations, including new (with construct), in (with has), delete (with deleteProperty), and so on. A strict equality test for objects, on the other hand, cannot be intercepted. An item has no other value and is precisely equal to itself. As a result, every operation or built-in class that compares objects for equality distinguishes between the object and the proxy. There is no obvious substitute here.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a revocable JavaScript proxy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A revocable proxy is a proxy that can be disabled. If at any point we want to revoke access to it. What we can do is wrap it into a revocable proxy, without any traps. Such a proxy forwards operations to an object, and we can disable it at any moment. The call returns an object with the proxy. A call to revoke() removes all internal references to the target object from the proxy, so they are no longer connected.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why would you use a WeakMap when attempting to revoke a proxy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we create a WeakMap that has proxy as the key and the corresponding revoke as the value, we can easily find the revoke for a proxy. We use WeakMap instead of Map since it does not interfere with trash collection. If a proxy object becomes "unreachable" (e.g., no variable refers to it anymore), WeakMap allows it to get erased from memory and whatever data it contains.',
      },
    },
  ],
};

export default StructuredData;
