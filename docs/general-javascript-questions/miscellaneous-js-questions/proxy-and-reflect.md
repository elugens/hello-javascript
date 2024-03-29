---
title: Proxy and Reflect
description: JavaScript Proxy and Reflect is a way to create a proxy object that can be used to intercept and change the behavior of an object. Frontend Interview Questions.
sidebar_position: 1
sidebar_label: Proxy and Reflect
keywords:
  - proxy and reflect
  - javascript proxy
  - proxy pattern
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - proxy and reflect
  - javascript proxy
  - proxy pattern
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ProxyReflectSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Proxy and Reflect | JavaScript Frontend Phone Interview</title>
</head>

**Miscellaneous: Proxy and Reflect**

---

<AdSense />

---

<CloseAllAnswers />

---

### What is a Proxy in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Proxy is an object in JavaScript that wraps another object, enabling you to intercept and customize operations performed on the wrapped object, such as property access, assignment, or function invocation.
</div><br/>
  <div><strong>Technical Response:</strong> A Proxy in JavaScript is a special object that is used to define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation, etc). The syntax to create a proxy in JavaScript is `new Proxy(target, handler)`, where `target` is the object which the proxy will virtualize and `handler` is an object that defines which operations will be intercepted and how to redefine intercepted operations.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a simple example of how a Proxy can be used to intercept the get operation on an object...

```javascript
let target = {
  message: 'hello, world'
};

let handler = {
  get: function(target, prop, receiver) {
    console.log(`GET was called for property ${prop}`);
    return Reflect.get(...arguments);
  }
};

let proxy = new Proxy(target, handler);

console.log(proxy.message); // logs: 'GET was called for property message' then logs: 'hello, world'
```

In this example, whenever a property is accessed on the `proxy` object, it logs a message to the console and then proceeds with the normal operation. The actual get operation is performed using `Reflect.get()`, which is a built-in function that performs a property access operation.

Proxies are a powerful tool that allow developers to control and redefine fundamental JavaScript operations. However, they should be used carefully, because they can greatly increase the complexity of your code and make debugging more difficult. They are best used for meta-programming tasks, or where you need to handle some complex object-access logic.

  </div>
  </div>
</details>

---

### What are some common use cases for Proxies?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Proxies are used for various purposes, including access control, data validation, object virtualization, performance optimization, and implementing custom behavior for object operations.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

**Data Validation:** Proxies can be used to validate incoming data before setting it to an object's properties.

```js
let handler = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value <= 0) {
                throw new RangeError('The age must be a positive integer');
            }
        }

        // The default behavior to store the value
        obj[prop] = value;

        // Indicate success
        return true;
    }
};

let person = new Proxy({}, handler);

person.age = 100;
console.log(person.age); // 100
```

  </div>
  </div>
</details>

---

### How do you create a Proxy in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To create a Proxy, we use the Proxy constructor, passing in the target object and a handler object containing traps for intercepting specific operations on the target. Creating a Proxy in JavaScript involves calling the Proxy constructor with two arguments: the target object and a handler object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's the basic syntax:

```javascript
let proxy = new Proxy(target, handler);
```

Here's a detailed example:

```javascript
let target = {
  name: "John"
};

let handler = {
  get: function(target, prop, receiver) {
    console.log(`Property "${prop}" has been read.`);
    return Reflect.get(...arguments);
  },
  set: function(target, prop, value, receiver) {
    console.log(`Property "${prop}" is being set to "${value}".`);
    return Reflect.set(...arguments);
  }
};

let proxy = new Proxy(target, handler);

proxy.name; // Outputs: Property "name" has been read.
proxy.age = 25; // Outputs: Property "age" is being set to "25".
```

In this example, the `handler` object defines two traps:

- The `get` trap is called when a property on the `proxy` object is read. It logs a message to the console and then uses the `Reflect.get()` method to perform the default get operation.
- The `set` trap is called when a property on the `proxy` object is set. It logs a message to the console and then uses the `Reflect.set()` method to perform the default set operation.

Note: `Reflect.get()` and `Reflect.set()` are built-in functions that perform the default get and set operations respectively.

  </div>
  </div>
</details>

---

### Can you explain the function of the proxy object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The function of a proxy object in JavaScript is to intercept and customize operations performed on a wrapped object, enabling fine-grained control over property access, assignment, function invocation, and more.
</div><br />
  <div><strong>Technical Response:</strong> You may use the Proxy object to establish a proxy for another object that can intercept and redefine core operations for that object. To function, a Proxy has two arguments. It has a target and a handler parameter to carry out its operations. The target is the original object that you desire to proxy. A handler is an object that describes which actions get intercepted and how intercepted operations get redefined. It runs if a matching trap is in the handler for a proxy action. The proxy gets an opportunity to handle it; otherwise, the operation gets executed on the target.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let proxy = new Proxy(target, handler);<br /><br />

  <div></div>

```js
let target = {};
let proxy = new Proxy(target, {}); // empty handler

proxy.test = 5; // writing to proxy (1)
console.log(target.test); // 5, the property appeared in target!

console.log(proxy.test); // 5, we can read it from proxy too (2)

for (let key in proxy) console.log(key); // test, iteration works (3)
```

  </div>
  </div>
</details>

---

### What is a trap in the context of a Proxy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A trap is a function in the handler object that gets called when a specific operation, like property access or function invocation, is performed on the target object wrapped by the Proxy.
  </div>
  </div>
</details>

---

### What can we intercept with a JavaScript proxy trap?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript proxy traps can intercept operations like property access, assignment, function invocation, object creation, property deletion, property enumeration, prototype modification, and object extensibility changes.</div><br />
  <div><strong>Technical Response:</strong> A so-called “internal method” in the JavaScript specification describes how it works at the lowest level for most operations on objects. For instance, [[Get]], the internal method to read a property, [[Set]] the internal method to write to a property, and so on. These methods get used in the specification, but we cannot explicitly refer to them by name. Proxy traps intercept invocations of these methods. For every internal method, there is a trap. For example, [[Get]] has a handler method of get() for reading a property.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Default value with “get” trap<br /><br />

  <div></div>

```js
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    // trapping [[Get]] internal method here
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // default value
    }
  },
});

console.log(numbers[1]); // 1
console.log(numbers[4]); // 0 (no such item)
```

  </div>
  </div>
</details>

---

### Does the proxy overwrite the variable when you implement a proxy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, implementing a proxy doesn't overwrite the original variable. Instead, the proxy wraps the original variable, intercepting operations on it while leaving the original object unchanged.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> dictionary = new Proxy(dictionary, ...);<br /><br />

  <div></div>

```js
let dictionary = {
  Hello: 'Hola',
  Bye: 'Adiós',
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    // intercept reading a property from dictionary
    if (phrase in target) {
      // if we have it in the dictionary
      return target[phrase]; // return the translation
    } else {
      // otherwise, return the non-translated phrase
      return phrase;
    }
  },
});

// Look up arbitrary phrases in the dictionary!
// At worst, they're not translated.
console.log(dictionary['Hello']); // Hola
console.log(dictionary['Welcome to Proxy']); // Welcome to Proxy (no translation)
```

---

:::tip
Note: You should ever make a reference to the target object after it has been proxied. Otherwise, it can be easy to make mistakes and harder to debug.
:::

  </div>
  </div>
</details>

---

### Can you explain the function of the proxy set method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Technical Response:</strong> The proxy set method intercepts property assignments on the wrapped object, allowing you to customize the behavior or validate the value before setting the property on the target object.
</div><br />
  <div><strong>Technical Response:</strong> Proxies have a handler.set() method used as a trap for setting a property value. There are four arguments to the set method: target, property, value, and receiver. The object we are aiming toward is known as the target. The name or symbol of the property set is the property, and the value is the newly set value of the property. The object the assignment initially gets set is known as the target. This object is usually the proxy itself. But a set() handler can also be called indirectly via the prototype chain or other ways.
</div><br />
  <div><strong className="codeExample">Syntax:</strong><br /><br />

  <div></div>

```js
const p = new Proxy(target, {
  set: function (target, property, value, receiver) {},
});
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let numbers = [];

numbers = new Proxy(numbers, {
  // (*)
  set(target, prop, val) {
    // to intercept property writing
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  },
});

numbers.push(1); // added successfully
numbers.push(2); // added successfully
console.log('Length is: ' + numbers.length); // 2

numbers.push('test'); // TypeError ('set' on proxy returned false)

console.log('This line is never reached (error in the line above)');
```

  </div>
  </div>
</details>

---

### What is meant by invariants in JavaScript proxies?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Semantics that remain unchanged when implementing custom operations are called invariants. Invariants in JavaScript proxies refer to rules enforced by the language that must be followed when implementing proxy traps, ensuring consistency and preventing unexpected behavior or errors in the code. If you violate the invariants of a handler, a TypeError gets thrown.
 </div><br />
  <div><strong>Technical Response:</strong> In the context of JavaScript Proxies, "invariants" refer to rules that JavaScript's internal methods must follow. These rules help maintain the consistency and predictability of the language. The Proxy API is designed to respect these invariants. That means, when you define a handler for a Proxy, it's expected that your handler logic will also respect these invariants. If it doesn't, JavaScript will throw a TypeError to prevent the invariant violation.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here are a few examples of such invariants:

**1. Non-configurable, non-writable properties**: If an object has a property that's non-configurable and non-writable, the `set` trap for a Proxy must not change the value of that property, or else JavaScript will throw a TypeError.

```javascript
let target = {};
Object.defineProperty(target, 'prop', {
    value: 1,
    writable: false,
    configurable: false
});

let handler = {
    set: function(target, prop, value, receiver) {
        target[prop] = value;
        return true;
    }
};

let proxy = new Proxy(target, handler);
proxy.prop = 2; // TypeError
```

**2. Non-extensibility and defining properties**: If an object is non-extensible, you can't add new properties to it. Hence, the `defineProperty` trap for a Proxy should not successfully add new properties to a non-extensible target object, or else JavaScript will throw a TypeError.

```javascript
let target = {};
Object.preventExtensions(target);

let handler = {
    defineProperty: function(target, prop, descriptor) {
        return Reflect.defineProperty(target, prop, descriptor);
    }
};

let proxy = new Proxy(target, handler);
Object.defineProperty(proxy, 'prop', { value: 1 }); // TypeError
```

**3. Property descriptors and non-configurability**: If a property is non-configurable on a target object, then the `getOwnPropertyDescriptor` trap must return a descriptor that says the property is non-configurable. If it says the property is configurable, JavaScript will throw a TypeError.

These are just a few examples. The main point is that JavaScript expects certain rules to be respected in the implementation of Proxy handlers, and if these rules are not respected, a TypeError will be thrown.

  </div>
  </div>
</details>

---

### Is there a way to iterate over an object’s keys using a method that uses the [[OwnPropertyKeys]] internal method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Object.keys, for..in loop and most other methods that iterate over object properties use [[OwnPropertyKeys]] internal method to retrieve a list of properties.</div><br />
  <div><strong>Technical Response:</strong> Yes, Object.keys, for..in loop and most other methods that iterate over object properties use [[OwnPropertyKeys]] internal method to extract a list of properties. Object.keys/values() returns non-symbol keys/values with enumerable flag (property flags were explained in the article Property flags and descriptors). You can view others in the specification, such as getOwnPropertyNames and getOwnPropertySymbols that use the [[OwnPropertyKeys]] internal method.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  age: 30,
  _password: '***',
};

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith('_'));
  },
});

// "ownKeys" filters out _password
for (let key in user) console.log(key); // name, then: age

// same effect on these methods:
console.log(Object.keys(user)); // name,age
console.log(Object.values(user)); // John,30
```

  </div>
  </div>
</details>

---

### Do private (#) properties and methods require proxies in a class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Private properties and methods in a class don't require proxies. They're built-in language features, prefixed with #, that provide encapsulation, limiting access to class instances and preventing external manipulation.
</div><br/>
  <div><strong>Technical Response:</strong> No, private properties and methods in JavaScript classes do not require proxies. They are a feature of the JavaScript language itself, and their privacy is enforced by the language. Private class fields, both properties and methods, are defined by prefixing the name of the field with a `#` character. This makes them private to the class, meaning they can only be accessed or called from methods within the same class.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class MyClass {
  #privateField = 'Hello, world';

  #privateMethod() {
    return 'Private method has been called';
  }

  callPrivateMethod() {
    return this.#privateMethod();
  }

  getPrivateField() {
    return this.#privateField;
  }
}

let instance = new MyClass();
console.log(instance.callPrivateMethod()); // logs: 'Private method has been called'
console.log(instance.getPrivateField()); // logs: 'Hello, world'
```

In this example, `#privateField` and `#privateMethod` are private to instances of `MyClass`. They can't be accessed or called from outside the class. The public methods `callPrivateMethod` and `getPrivateField` provide a way to interact with the private field and method.

Proxies could be used if you wanted to customize the behavior of property access or method invocation on an object, including private properties or methods. However, please note that as of my knowledge cutoff in September 2021, private fields are not accessible or interceptable by JavaScript proxies, as per the language design. The main use case of a Proxy is to define custom behavior for fundamental operations on objects, such as property lookups or function invocations.

  </div>
  </div>
</details>

---

### What is the benefit of using a Proxy vs. a wrapper function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Proxies offer more fine-grained control and customization over object operations, while wrapper functions mainly intercept and modify function invocations, making Proxies more versatile for complex use cases.
</div><br />
  <div><strong>Technical Response:</strong> Proxy is much more powerful, as it forwards everything to the target object. A wrapper function does not forward property read/write operations. After the wrapping, the access gets lost to properties of the original functions, such as name, length, and others.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    }
  });
}

function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

sayHi = delay(sayHi, 3000);

console.log(sayHi.length);  // this would be 0 if we used a wrapper function

// return 1 (*) proxy forwards "get length" operation to the target

sayHi("John"); // Hello, John! (after 3 seconds)
```

  </div>
  </div>
</details>

---

### What is the Reflect API in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Reflect API is a built-in JavaScript object that provides methods for performing low-level operations on objects, making it easier to create dynamic and extensible code, often used in conjunction with Proxies.
  </div>
  </div>
</details>

---

### Can you explain the function of the Reflect built-in JavaScript object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Reflect built-in JavaScript object provides methods for low-level operations on objects, enabling dynamic and extensible code, often used in conjunction with Proxies for customization and interception.
</div><br />
  <div><strong>Technical Response:</strong> Reflect is a built-in object that simplifies the creation of a Proxy. Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of proxy handlers. Reflect is not a function object, so it is not constructible. You cannot use it with a new operator or invoke the Reflect object as a function. All properties and methods of Reflect are static (just like the Math object). For every internal method, trappable by Proxy, there is a corresponding method in Reflect, with the same name and arguments as the Proxy trap.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Reflect get and set methods<br /><br />

  <div></div>

```js
// Reflect get() method
const object1 = {
  x: 1,
  y: 2,
};

console.log(Reflect.get(object1, 'x'));
// expected output: 1

const array1 = ['zero', 'one'];

console.log(Reflect.get(array1, 1));
// expected output: "one"

// Reflect set() method
let user = {};

Reflect.set(user, 'name', 'John');

console.log(user.name); // John
```

  </div>
  </div>
</details>

---

### What are some common methods provided by the Reflect API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Some common Reflect methods include get(), set(), apply(), has(), deleteProperty(), and construct(), which correspond to object operations like property access, assignment, function invocation, and object creation.
  </div>
  </div>
</details>

---

### How does the Reflect API relate to Proxies in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Reflect API and Proxies are often used together, as Reflect methods can be used within Proxy traps to perform the default behavior of intercepted operations, while allowing customization or additional logic.
  </div><br/>
  <div><strong>Technical Response:</strong> The Reflect API in JavaScript is closely related to Proxies because it provides a set of methods that correspond to the JavaScript language's internal methods. Each method in the Reflect API corresponds to a specific kind of operation that can be performed on a JavaScript object, which is exactly what Proxies intercept and customize. In simple terms, Proxies let you intercept and customize operations on an object, and the Reflect API provides a way to carry out those operations with their default behavior.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let target = {
  message: 'hello, world'
};

let handler = {
  get: function(target, prop, receiver) {
    console.log(`GET was called for property ${prop}`);
    return Reflect.get(...arguments); // Use Reflect API to perform the default operation
  }
};

let proxy = new Proxy(target, handler);

console.log(proxy.message); // logs: 'GET was called for property message' then logs: 'hello, world'
```

In this example, the `handler` object defines a `get` method that intercepts all get operations on the `proxy` object. It logs a message and then uses `Reflect.get()` to perform the default get operation.

Because every method in the Reflect API corresponds to a Proxy handler method, you can use the Reflect API to easily fallback to the default behavior within a Proxy handler.

Furthermore, using Reflect methods in Proxy handlers helps to maintain the invariants of the JavaScript language, preventing possible TypeErrors that could be thrown if these invariants are violated.

  </div>
  </div>
</details>

---

### Does the JavaScript proxy built-in object have any limitations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript proxies have limitations, such as not being able to intercept access to private class properties/methods and increased performance overhead due to the additional layer of indirection.</div><br />
  <div><strong>Technical Answer:</strong> Yes, Proxies provide a unique way to alter or tweak the behavior of the existing objects at the lowest level. Still, it is not perfect. There are limitations. Many built-in objects, for example, Map, Set, Date, Promise, and others, make use of so-called “internal slots”. These are like properties but reserved for internal, specification-only purposes. For instance, Map stores items in the internal slot [[MapData]]. Built-in methods access them directly, not via [[Get]] / [[Set]] internal methods. So, Proxy cannot intercept that. The proxy does not have these internal slots after a built-in object gets proxied, so the built-in methods fail.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let map = new Map();

let proxy = new Proxy(map, {});

proxy.set('test', 1); // Error
```

---

:::note Notable Exception:
Built-in Array does not use internal slots. That is for historical reasons, as it appeared so long ago. So, there is no such problem when proxying an array.
:::

  </div>
  </div>
</details>

---

### Is it possible to proxy an inherited class with private fields in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It is possible to proxy an inherited class, but proxies cannot directly intercept access to private fields. The interception will only work on public properties and methods of the class.
</div><br />
  <div><strong>Technical Response:</strong> Yes, but typically if you attempt to proxy private fields, the class proxy breaks after proxying. The reason is that private fields get implemented using internal slots. JavaScript does not use [[Get]]/[[Set]] when accessing them. A common fix for this is to bind the value to the target.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Problem & Solution<br /><br />

  <div></div>

```js
// Example: Problem
class User {
  #name = 'Guest';

  getName() {
    return this.#name;
  }
}

let user = new User();

user = new Proxy(user, {});

console.log(user.getName()); // Error

// Example: Solution
class User {
  #name = 'Guest';

  getName() {
    return this.#name;
  }
}

let user = new User();

user = new Proxy(user, {
  get(target, prop, receiver) {
    let value = Reflect.get(...arguments);
    return typeof value == 'function' ? value.bind(target) : value;
  },
});

console.log(user.getName()); // Guest
```

---

:::note
The solution has drawbacks. It exposes the original object to the method, potentially allowing it to be passed further and breaking other proxied functionality.
:::

  </div>
  </div>
</details>

---

### Can proxies intercept an object used in a strict equality test?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, proxies cannot intercept strict equality tests, as these tests directly compare the object references. Proxies don't modify the reference, but wrap the target object for intercepted operations.
</div><br/>
  <div><strong>Interview Response:</strong> No, proxies may intercept a wide range of operations, including new (with construct), in (with has), delete (with deleteProperty), and so on. A strict equality test for objects, on the other hand, cannot be intercepted. An item has no other value and is precisely equal to itself. As a result, every operation or built-in class that compares objects for equality distinguishes between the object and the proxy. There is no obvious substitute here.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let target = { message: 'hello, world' };

let handler = {
  get: function(target, prop, receiver) {
    console.log(`GET was called for property ${prop}`);
    return Reflect.get(...arguments);
  }
};

let proxy = new Proxy(target, handler);

console.log(proxy === target); // logs: false
```

In this example, the Proxy (`proxy`) is not strictly equal to the target object (`target`), and no message is logged to the console because the strict equality operation doesn't trigger the `get` trap.

Proxies can intercept a range of operations, including property lookup, assignment, function invocation, and more. However, some operations like strict equality check and identity (`===`) comparison can't be intercepted. It's worth noting that two distinct Proxy instances for the same target are also not strictly equal to each other, because they are different objects.

  </div>
  </div>
</details>

---

### What is a revocable JavaScript proxy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A revocable JavaScript proxy is a feature that allows you to create a proxy object that can be easily revoked, rendering it inactive and preventing further interaction with the original object.
</div><br />
  <div><strong>Technical Response:</strong> A revocable proxy is a proxy that can be disabled. If at any point we want to revoke access to it. What we can do is wrap it into a revocable proxy, without any traps. Such a proxy forwards operations to an object, and we can disable it at any moment. The call returns an object with the proxy. A call to revoke() removes all internal references to the target object from the proxy, so they are no longer connected.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let &#123;proxy, revoke&#125; = Proxy.revocable(target, handler);<br /><br />

  <div></div>

```javascript
const target = {
  name: "John",
  age: 30
};

const { proxy, revoke } = Proxy.revocable(target, {});

console.log(proxy.name); // Output: "John"
console.log(proxy.age); // Output: 30

revoke();

console.log(proxy.name); // Output: TypeError: Cannot perform 'get' on a proxy that has been revoked
console.log(proxy.age); // Output: TypeError: Cannot perform 'get' on a proxy that has been revoked
```

In the above example, we create a revocable proxy using `Proxy.revocable()`. The `proxy` variable represents the proxy object, which behaves like the `target` object. We can access its properties and methods. The `revoke()` function is used to revoke the proxy, making it inactive. Once revoked, any further access to the proxy will result in a `TypeError`.

  </div>
  </div>
</details>

---

### Why would you use a WeakMap when attempting to revoke a proxy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using a WeakMap to store revocable proxies ensures that when the original target object is garbage collected, the proxy and its associated data are also garbage collected, preventing memory leaks.
</div><br />
  <div><strong>Technical Response:</strong> If we create a WeakMap that has proxy as the key and the corresponding revoke as the value, we can easily find the revoke for a proxy. We use WeakMap instead of Map since it does not interfere with trash collection. If a proxy object becomes "unreachable" (e.g., no variable refers to it anymore), WeakMap allows it to get erased from memory and whatever data it contains.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let revokes = new WeakMap();

let object = {
  data: 'Valuable data',
};

let { proxy, revoke } = Proxy.revocable(object, {});

revokes.set(proxy, revoke);

// ..somewhere else in our code..
revoke = revokes.get(proxy);
revoke();

console.log(proxy.data); // Error (revoked)
```

  </div>
  </div>
</details>

---

### Can you use a Proxy to create a read-only object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use a Proxy to create a read-only object by intercepting the set trap and preventing any changes to the wrapped object's properties.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
const target = { message: 'Hello, world' };

const handler = {
  set: function(target, prop, value) {
    console.log(`Set operation is not allowed on property "${prop}"`);
    return true;
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.message); // Outputs: 'Hello, world'
proxy.message = 'Goodbye, world'; // Outputs: 'Set operation is not allowed on property "message"'
console.log(proxy.message); // Still outputs: 'Hello, world'
```

In this example, the `set` trap in the handler prevents changes to the target object. When you try to set the `message` property on the `proxy` object, it just logs a message to the console and does not change the property.

The `set` handler returns `true` to indicate that the assignment was "successful", even though it didn't actually change anything. If it returned `false` or threw an error, that would indicate that the assignment failed, which could cause issues if the Proxy is used in strict mode.

Remember, this will make all properties of the target object read-only through the proxy, even if they are writable on the target object itself. You can still change the target object directly, because the Proxy doesn't affect the actual target object, it only controls access to it.

  </div>
  </div>
</details>

---
