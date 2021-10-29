---
title: Proxy and Reflect
sidebar_position: 1
---

# Proxy and Reflect - Q&A

**Miscellaneous: Proxy and Reflect**

**Question:** **What is a proxy object in JavaScript?**

**Interview Answer:** A Proxy object wraps another object and intercepts operations, like reading/writing properties and others, optionally handling them on its own, or transparently allowing the object to handle them. Proxies are used in many libraries and some browser frameworks.

Source: <https://javascript.info/proxy>

**Question:** **Explain the function and syntax of the proxy object in JavaScript?**

**Interview Answer:** The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object. A Proxy is created with two parameters to function. It has a target and a handler parameter used to perform its tasks. The target is defined as the original object which you intend to proxy. The handler is an object that defines which operations will be intercepted and how to redefine intercepted operations. For operations on proxy, if there is a corresponding trap in handler, then it runs, and the proxy has a chance to handle it, otherwise the operation is performed on target.

**Syntax:** let proxy = new Proxy(target, handler)

Example:

```js
let target = {};

let proxy = new Proxy(target, {}); // empty handler
proxy.test = 5; // writing to proxy (1)
alert(target.test); // 5, the property appeared in target!
alert(proxy.test); // 5, we can read it from proxy too (2)
for (let key in proxy) alert(key); // test, iteration works (3)
```

Source: <https://javascript.info/proxy#proxy>

**Question:** **What can we intercept with a JavaScript proxy trap?**

**Interview Answer:** In a proxy trap we can intercept invocation of internal methods like the get and set internal methods. For every internal method, there is a trap. For example, [[Get]] has a handler method of get() for reading a property[[Set]], the internal method to write a property, and so on. These methods are only used in the specification, we cannot call them directly by name.

**Technical Answer:** For most operations on objects, there is a so-called “internal method” in the JavaScript specification that describes how it works at the lowest level. For instance [[Get]], the internal method to read a property, [[Set]], the internal method to write a property, and so on. These methods are only used in the specification, we cannot call them directly by name. Proxy traps intercept invocations of these methods. For every internal method, there is a trap. For example, [[Get]] has a handler method of get() for reading a property.

Example: Default value with “get” trap

```js
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    // trapping [[Get]] internal method here

    if (prop in target) {
      return target[prop];
    } else {
      return 0; // default value
    }
  },
});

alert(numbers[1]); // 1
alert(numbers[4]); // 0 (no such item)
```

Source: <https://javascript.info/proxy#proxy>

**Question:** **When you implement a proxy, does the proxy overwrite the variable?**

**Interview Answer:** Yes, the proxy should totally replace the target object everywhere. No one should ever reference the target object after it got proxied. Otherwise, it is easy to mess up.

Example: dictionary = new Proxy(dictionary, ...);

```js
let dictionary = {
  Hello: 'Hola',

  Bye: 'Adiós',
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    // intercept reading a property from dictionary

    if (phrase in target) {
      // if we have it in the dictionary

      return target[phrase]; // return the translation
    } else {
      // otherwise, return the non-translated phrase

      return phrase;
    }
  },
});

// Look up arbitrary phrases in the dictionary!

// At worst, they're not translated.

alert(dictionary['Hello']); // Hola
alert(dictionary['Welcome to Proxy']); // Welcome to Proxy (no translation)
```

Source: <https://javascript.info/proxy#default-value-with-get-trap>

**Question:** **Explain, the function and syntax of the proxy set method?**

**Interview Answer:** Proxies have a handler.set() method used as a trap for setting a property value. The set method has four parameters including the target, property, value, and receiver. The target is the object we are targeting. The property is the name or Symbol of the property set. The value is the new value of the property to set. The receiver is the object to which the assignment was originally directed. This is usually the proxy itself. But a set() handler can also be called indirectly, via the prototype chain or various other ways.

**Syntax:**

```js
const p = new Proxy(target, {
  set: function (target, property, value, receiver) {},
});
```

Example:

```js
let numbers = [];

numbers = new Proxy(numbers, {
  // (\*)

  set(target, prop, val) {
    // to intercept property writing

    if (typeof val == 'number') {
      target[prop] = val;

      return true;
    } else {
      return false;
    }
  },
});

numbers.push(1); // added successfully
numbers.push(2); // added successfully
alert('Length is: ' + numbers.length); // 2
numbers.push('test'); // TypeError ('set' on proxy returned false)
alert('This line is never reached (error in the line above)');
```

Source: <https://javascript.info/proxy#validation-with-set-trap>

**Question:** **What is meant by invariants in JavaScript proxies?**

**Interview Answer:** Semantics that remain unchanged when implementing custom operations are called invariants. If you violate the invariants of a handler, a TypeError will be thrown.

**Technical Answer:** In JavaScript proxy invariants refers to a condition that must be fulfilled by the internal methods and traps. In most cases, this is referring to return values. The internal [[Set]] method must return true if the value was written successfully, otherwise false. Most of the internal methods require a specific return value. Traps can intercept these operations, but they must follow these rules. Invariants ensure correct and consistent behavior of language features. The full invariants list is in the specification. You probably will not violate them if you are not doing something weird. Specification: <https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots>

Source: <https://javascript.info/proxy#proxy>

**Question:** **Is there a way to iterate over an object’s keys using a method that uses the [[OwnPropertyKeys]] internal method?**

**Interview Answer:** Yes, Object.keys, for..in loop and most other methods that iterate over object properties use [[OwnPropertyKeys]] internal method to get a list of properties.

**Technical Answer:** Yes, Object.keys, for..in loop and most other methods that iterate over object properties use [[OwnPropertyKeys]] internal method to get a list of properties. Object.keys/values() returns non-symbol keys/values with enumerable flag (property flags were explained in the article Property flags and descriptors). There are others that you can view in the specification such as getOwnPropertyNames and getOwnPropertySymbols that use the [[OwnPropertyKeys]] internal method.

Example:

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

// "ownKeys" filters out \_password

for (let key in user) alert(key); // name, then: age
// same effect on these methods:

alert(Object.keys(user)); // name,age
alert(Object.values(user)); // John,30
```

Source: <https://javascript.info/proxy#iteration-with-ownkeys-and-getownpropertydescriptor>

**Question:** **Do private (#) properties and methods require proxies in a class?**

**Interview Answer:** No, Modern JavaScript engines natively support private properties in classes, prefixed with # and no are proxies required. Such properties have their own issues though. They are not inherited by child classes.

Source: <https://javascript.info/proxy#protected-properties-with-deleteproperty-and-other-traps>

**Question:** **What is the benefit of using a Proxy vs a wrapper function?**

**Interview Answer:** Proxy is much more powerful, as it forwards everything to the target object. A wrapper function does not forward property read/write operations or anything else. After the wrapping, the access is lost to properties of the original functions, such as name, length, and others.

Example:

```js
function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    },
  });
}

function sayHi(user) {
  alert(`Hello, ${user}!`);
}

sayHi = delay(sayHi, 3000);

alert(sayHi.length);
ß; // this would be 0 if we used a wrapper function
// return 1 (\*) proxy forwards "get length" operation to the target

sayHi('John'); // Hello, John! (after 3 seconds)
```

Source: <https://javascript.info/proxy#proxy-apply>

**Question:** **Explain the function of the Reflect built-in JavaScript object.**

**Interview Answer:** Reflect is a built-in object that simplifies creation of Proxy. Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of proxy handlers. Reflect is not a function object, so it is not constructible. You cannot use it with a new operator or invoke the Reflect object as a function. All properties and methods of Reflect are static (just like the Math object). For every internal method, trappable by Proxy, there is a corresponding method in Reflect, with the same name and arguments as the Proxy trap.

Example: Reflect get and set methods

```js
// Reflect get() method

const object1 = {
  x: 1,

  y: 2,
};

console.log(Reflect.get(object1, 'x'));

// expected output: 1

const array1 = ['zero', 'one'];

console.log(Reflect.get(array1, 1));

// expected output: "one"

// Reflect set() method

let user = {};

Reflect.set(user, 'name', 'John');

alert(user.name); // John
```

Source: <https://javascript.info/proxy#reflect>

**Question:** **Does the JavaScript proxy built-in object have any limitations?**

**Interview Answer:** Yes, Built-in objects like Map, Set, Date, and Promise get proxied, the proxy does not have access to their internal slots, so built-in methods will fail.

**A notable exception:** Built-in Array does not use internal slots. That is for historical reasons, as it appeared so long ago. So, there is no such problem when proxying an array.

**Technical Answer:** Yes, Proxies provide a unique way to alter or tweak the behavior of the existing objects at the lowest level. Still, it is not perfect. There are limitations. Many built-in objects, for example Map, Set, Date, Promise and others make use of so-called “internal slots”. These are like properties, but reserved for internal, specification-only purposes. For instance, Map stores items in the internal slot [[MapData]]. Built-in methods access them directly, not via [[Get]]/[[Set]] internal methods. So, Proxy cannot intercept that. After a built-in object like that gets proxied, the proxy does not have these internal slots, so built-in methods will fail.

Example:

```js
let map = new Map();

let proxy = new Proxy(map, {});

proxy.set('test', 1); // Error
```

Source: <https://javascript.info/proxy#built-in-objects-internal-slots>

**Question:** **Is it possible to proxy an inherited class with private fields in JavaScript?**

**Interview Answer:** Yes, but typically if you attempt to proxy private fields the class proxy will break after proxying. The reason is that private fields are implemented using internal slots. JavaScript does not use [[Get]]/[[Set]] when accessing them. A common fix for this is to bind the value to the target.

**Note:** The solution has drawbacks it exposes the original object to the method, potentially allowing it to be passed further and breaking other proxied functionality.

**Problem & Solution Example:**

// Example: Problem

```js
class User {
  #name = 'Guest';

  getName() {
    return this.#name;
  }
}

let user = new User();

user = new Proxy(user, {});

alert(user.getName()); // Error
// Example: Solution

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

alert(user.getName()); // Guest
```

Source: <https://javascript.info/proxy#private-fields>

**Question:** **Can proxies intercept an object that used in a strict equality test?**

**Interview Answer:** No, Proxies can intercept many operators, such as new (with construct), in (with has), delete (with deleteProperty) and so on. But there is no way to intercept a strict equality test for objects. An object is strictly equal to itself only, and no other value. So, all operations and built-in classes that compare objects for equality will differentiate between the object and the proxy. No transparent replacement here.

Source: <https://javascript.info/proxy#proxy-target>

**Question:** **What is a revocable JavaScript proxy?**

**Interview Answer:** A revocable proxy is a proxy that can be disabled. Basically, if at any point we want to revoke access to it. What we can do is to wrap it into a revocable proxy, without any traps. Such a proxy will forward operations to object, and we can disable it at any moment. The call returns an object with the proxy and revoke function to disable it. A call to revoke() removes all internal references to the target object from the proxy, so they are no longer connected.

**Syntax:** `let {proxy, revoke} = Proxy.revocable(target, handler)`

Example:

```js
let object = {
  data: 'Valuable data',
};

let { proxy, revoke } = Proxy.revocable(object, {});

// pass the proxy somewhere instead of object...

alert(proxy.data); // Valuable data
// later in our code

revoke();

// the proxy isn't working any more (revoked)

alert(proxy.data); // Error
```

Source: <https://javascript.info/proxy#revocable-proxies>

**Question:** **Why would you use a WeakMap when you are attempting to revoke a proxy?**

**Interview Answer:** If, we create a WeakMap that has proxy as the key and the corresponding revoke as the value, that allows us to easily find revoke for a proxy. We use WeakMap instead of Map here because it will not block garbage collection. If a proxy object becomes “unreachable” (e.g. no variable references it any more), WeakMap allows it to be wiped from memory together with its revoke that we won’t need any more.

Example:

```js
let revokes = new WeakMap();

let object = {
  data: 'Valuable data',
};

let { proxy, revoke } = Proxy.revocable(object, {});

revokes.set(proxy, revoke);

// ..somewhere else in our code..

revoke = revokes.get(proxy);

revoke();

alert(proxy.data); // Error (revoked)
```

Source: <https://javascript.info/proxy#revocable-proxies>
