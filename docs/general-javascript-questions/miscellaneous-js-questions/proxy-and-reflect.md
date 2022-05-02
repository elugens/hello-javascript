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

<head>
  <title>Proxy and Reflect | JavaScript Frontend Phone Interview</title>
</head>

**Miscellaneous: Proxy and Reflect**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is a proxy object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Proxy object surrounds another object and intercepts activities such as reading/writing properties and others, processing them optionally on its own or transparently letting the object handle them. Many libraries and browser frameworks make use of proxies.
</div>
  </div>
</details>

---

### Explain the function and syntax of the proxy object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You may use the Proxy object to establish a proxy for another object that can intercept and redefine core operations for that object. To function, a Proxy has two arguments. It has a target and a handler parameter to carry out its operations. The target is the original object that you desire to proxy. A handler is an object that describes which actions get intercepted and how intercepted operations get redefined. It runs if a matching trap is in the handler for a proxy action. The proxy gets an opportunity to handle it; otherwise, the operation gets executed on the target.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let proxy = new Proxy(target, handler);<br /><br />

  <div></div>

```js
let target = {};
let proxy = new Proxy(target, {}); // empty handler

proxy.test = 5; // writing to proxy (1)
alert(target.test); // 5, the property appeared in target!

alert(proxy.test); // 5, we can read it from proxy too (2)

for (let key in proxy) alert(key); // test, iteration works (3)
```

  </div>
  </div>
</details>

---

### What can we intercept with a JavaScript proxy trap?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In a proxy trap, we can intercept invocation of internal methods like the get and set internal methods. For every internal method, there is a trap. For example, [[Get]] has a handler method of get() for reading a property, [[Set]] the internal method to write to a property, and so on. These methods get explicitly used in the specification, and we cannot call them directly by name.</div><br />
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

alert(numbers[1]); // 1
alert(numbers[4]); // 0 (no such item)
```

  </div>
  </div>
</details>

---

### Does the proxy overwrite the variable when you implement a proxy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the proxy should always replace the target object, and no one should ever make a reference to the target object after it has been proxied. Otherwise, it is simple to make mistakes and debug.
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
alert(dictionary['Hello']); // Hola
alert(dictionary['Welcome to Proxy']); // Welcome to Proxy (no translation)
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the proxy set method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Proxies have a handler.set() method used as a trap for setting a property value. There are four arguments to the set method: target, property, value, and receiver. The object we are aiming toward is known as the target. The name or symbol of the property set is the property, and the value is the newly set value of the property. The object the assignment initially gets set is known as the target. This object is usually the proxy itself. But a set() handler can also be called indirectly via the prototype chain or other ways.
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
alert('Length is: ' + numbers.length); // 2

numbers.push('test'); // TypeError ('set' on proxy returned false)

alert('This line is never reached (error in the line above)');
```

  </div>
  </div>
</details>

---

### What is meant by invariants in JavaScript proxies?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Semantics that remain unchanged when implementing custom operations are called invariants. If you violate the invariants of a handler, a TypeError gets thrown.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, proxy invariants are a condition that the internal methods and traps must fulfill. In most cases, this refers to return values. The internal [[Set]] method must return true if the value gets successfully written. Otherwise false. Most of the internal methods require a specific return value. Traps can intercept these operations, but they must follow these rules. Invariants ensure correct and consistent behavior of language features. The complete invariants list is in the specification. You probably won’t violate them if you are not doing something weird.
  </div><br /><br />

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
for (let key in user) alert(key); // name, then: age

// same effect on these methods:
alert(Object.keys(user)); // name,age
alert(Object.values(user)); // John,30
```

  </div>
  </div>
</details>

---

### Do private (#) properties and methods require proxies in a class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, Modern JavaScript engines natively support private properties in classes, prefixed with #, and no proxies are required. However, such properties have their own  issues, and child classes do not inherit them.
</div>
  </div>
</details>

---

### What is the benefit of using a Proxy vs. a wrapper function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Proxy is much more powerful, as it forwards everything to the target object. A wrapper function does not forward property read/write operations. After the wrapping, the access gets lost to properties of the original functions, such as name, length, and others.
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
  alert(`Hello, ${user}!`);
}

sayHi = delay(sayHi, 3000);

alert(sayHi.length);  // this would be 0 if we used a wrapper function

// return 1 (*) proxy forwards "get length" operation to the target

sayHi("John"); // Hello, John! (after 3 seconds)
```

  </div>
  </div>
</details>

---

### Explain the function of the Reflect built-in JavaScript object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Reflect is a built-in object that simplifies the creation of a Proxy. Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of proxy handlers. Reflect is not a function object, so it is not constructible. You cannot use it with a new operator or invoke the Reflect object as a function. All properties and methods of Reflect are static (just like the Math object). For every internal method, trappable by Proxy, there is a corresponding method in Reflect, with the same name and arguments as the Proxy trap.
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

alert(user.name); // John
```

  </div>
  </div>
</details>

---

### Does the JavaScript proxy built-in object have any limitations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Built-in objects like Map, Set, Date, and Promise get proxied, the proxy does not have access to their internal slots, so built-in methods fail.</div><br />
  <div><strong>Technical Answer:</strong> Yes, Proxies provide a unique way to alter or tweak the behavior of the existing objects at the lowest level. Still, it is not perfect. There are limitations. Many built-in objects, for example, Map, Set, Date, Promise, and others, make use of so-called “internal slots”. These are like properties but reserved for internal, specification-only purposes. For instance, Map stores items in the internal slot [[MapData]]. Built-in methods access them directly, not via [[Get]]/[[Set]] internal methods. So, Proxy cannot intercept that. The proxy does not have these internal slots after a built-in object gets proxied, so the built-in methods fail.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let map = new Map();

let proxy = new Proxy(map, {});

proxy.set('test', 1); // Error
```

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
  <div><strong>Interview Response:</strong> Yes, but typically if you attempt to proxy private fields, the class proxy breaks after proxying. The reason is that private fields get implemented using internal slots. JavaScript does not use [[Get]]/[[Set]] when accessing them. A common fix for this is to bind the value to the target.
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

alert(user.getName()); // Error

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

alert(user.getName()); // Guest
```

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
  <div><strong>Interview Response:</strong> No, proxies may intercept a wide range of operations, including new (with construct), in (with has), delete (with deleteProperty), and so on. A strict equality test for objects, on the other hand, cannot be intercepted. An item has no other value and is precisely equal to itself. As a result, every operation or built-in class that compares objects for equality distinguishes between the object and the proxy. There is no obvious substitute here.
</div>
  </div>
</details>

---

### What is a revocable JavaScript proxy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A revocable proxy is a proxy that can be disabled. If at any point we want to revoke access to it. What we can do is wrap it into a revocable proxy, without any traps. Such a proxy forwards operations to an object, and we can disable it at any moment. The call returns an object with the proxy. A call to revoke() removes all internal references to the target object from the proxy, so they are no longer connected.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let &#123;proxy, revoke&#125; = Proxy.revocable(target, handler);<br /><br />

  <div></div>

```js
let object = {
  data: 'Valuable data',
};

let { proxy, revoke } = Proxy.revocable(object, {});

// pass the proxy somewhere instead of object...
alert(proxy.data); // Valuable data

// later in our code
revoke();

// the proxy isn't working any more (revoked)
alert(proxy.data); // Error
```

  </div>
  </div>
</details>

---

### Why would you use a WeakMap when attempting to revoke a proxy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we create a WeakMap that has proxy as the key and the corresponding revoke as the value, we can easily find the revoke for a proxy. We use WeakMap instead of Map since it does not interfere with trash collection. If a proxy object becomes "unreachable" (e.g., no variable refers to it anymore), WeakMap allows it to get erased from memory and whatever data it contains.
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

alert(proxy.data); // Error (revoked)
```

  </div>
  </div>
</details>

---
