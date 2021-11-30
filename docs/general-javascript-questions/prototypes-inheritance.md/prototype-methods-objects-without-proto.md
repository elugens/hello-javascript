---
title: Prototype Methods
sidebar_position: 4
---

# Prototype Methods

**Prototypes / Inheritance: Prototype Methods**

<head>
  <title>Prototype Methods - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Is there a way to implement prototypal inheritance without calling proto accessor property (deprecated) in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Since, the proto property is deprecated based the JavaScript specification. There are three modern methods that can be used in prototypal inheritance including Object.create(obj), Object.getPrototypeOf(obj), and Object.setPrototypeOf(obj, proto).<br /><br /> The Object.create(obj) method which is used to create an empty object with given proto as prototype and optional property descriptors. The Object.getPrototypeOf(obj) that returns the prototype of an object, and Object. Object.setPrototypeOf(obj, proto) which sets the prototyple of obj to proto.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let animal = {
  eats: true,
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal);

console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

console.log(Object.getPrototypeOf(rabbit) === animal); // false
```

  </div>
  </div>
</details>

---

### Explain, what is the function and syntax of the Object.create(obj) method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. It has two parameters including the proto and the descriptors. The proto parameter is the object which should be the prototype of the newly created object. The descriptors are defined as an object whose enumerable properties specify property descriptors to be added to the newly created object.</div><br />
  <div><strong>Technical Response:</strong> The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. It has two parameters including the proto and the descriptors (propertiesObject in the specification). The proto parameter is the object which should be the prototype of the newly created object. The descriptors (propertiesObject) are defined as, if specified and not undefined, an object whose enumerable own properties (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly created object, with the corresponding property names. These properties correspond to the second argument of Object.defineProperties(). Basically, the descriptors are like property flags.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Object.create(proto, [descriptors]);<br /><br />

  <div></div>

```js
let animal = {
  eats: true,
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true,
  },
});

alert(rabbit.jumps); // true
```

  </div>
  </div>
</details>

---

### What is the function and syntax of the Object.getPrototypeOf() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Object.getPrototypeOf(obj) method returns the prototype of the specified object. If there are no inherited properties, null is returned.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Object.getPrototypeOf(obj);<br /><br />

  <div></div>

```js
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// expected output: true
```

  </div>
  </div>
</details>

---

### What is the function and syntax of the Object.setPrototypeOf(obj, proto) method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Object.setPrototypeOf() method sets the prototype of a specified object to another object or null.
</div><br />

<strong>Syntax: </strong> Object.setPrototypeOf(obj, proto);<br /><br />

:::note
According the MDN, it has been advised to use Object.create(obj) instead of this method.
:::

  </div>
</details>

---

### Can you change `[[Prototype]]` on existing objects, in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, but it is considered a bad idea. We can get/set [[Prototype]] at any time. But usually, we only set it once at the object creation time and not modify it after that time.</div><br />
  <div><strong>Technical Response:</strong> Technically Yes, but it is considered a bad idea. We can get/set [[Prototype]] at any time. But usually, we only set it once at the object creation time and not modify it after that time. Changing a prototype “on-the-fly” with Object.setPrototypeOf or obj.__proto__= is a slow operation as it breaks internal optimizations for object property access operations. So, we should avoid it unless you know what you are doing, or JavaScript speed totally does not matter for you.
  </div><br />

:::warning
According to the MDN changing the prototype after creation is a slow operation and can cause an effect on performance.
:::

  </div>
</details>

---

### Why was `__proto__` replaced by the functions getPrototypeOf / setPrototypeOf?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> According to the MDN, it was replaced with getPrototypeOf and setPrototypeOf, because of the performance issues related to its use.
</div><br />

:::note
If you care about performance, you should avoid setting the [[Prototype]] of an object. Instead, create a new object with the desired [[Prototype]] using Object.create().
:::

  </div>
</details>

---

### Do you have a preference between class inheritance and prototypal inheritance in JavaScript? If so, why?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When using class inheritance, instances inherit from classes. This creates hierarchical class taxonomies. On the other hand, with prototypal inheritance, instances inherit from other objects, and they can be created from multiple objects. I prefer prototypal inheritance because it is easier and much more flexible.
</div>
  </div>
</details>

---

### When is classical inheritance an appropriate choice?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The answer is never, or almost never. Certainly, never more than one level. Multi-level class hierarchies are an anti-pattern. It can lead to problems like method collision, which is not good.
</div><br />

:::note
I have been issuing this challenge for years, and the only answers I have ever heard fall into one of several common misconceptions. More frequently, the challenge is met with silence.
:::

  </div>
</details>

---

### What is the difference between class inheritance and prototypal inheritance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Classes inherit from classes created in sub-classes using a hierarchical class taxonomy. Prototypal inheritance is based on a prototype working as an object instance where objects inherit directly from other objects. The difference is that class taxonomy is not a derivative of prototypal inheritance.</div><br />
  <div><strong>Technical Response:</strong><br /><br /> <strong>Class Inheritance:</strong> Instances inherit from classes (like a blueprint or a description of the class) and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6.<br /><br /> <strong>Prototypal Inheritance:</strong> Instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance.
  </div>
  </div>
</details>

---
