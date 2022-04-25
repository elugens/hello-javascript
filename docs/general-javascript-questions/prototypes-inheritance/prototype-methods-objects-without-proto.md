---
title: Prototype Methods
description: Prototype Methods in JavaScript are a property of the prototype object. It is used to store the function's properties and methods.
sidebar_position: 4
sidebar_label: Prototype Methods
---

**Prototypes / Inheritance: Prototype Methods**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Is there a way to implement prototypal inheritance without calling proto accessor property (deprecated) in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Since, the proto property is deprecated based the JavaScript specification. There are three modern methods that can be used in prototypal inheritance including Object.create(obj), Object.getPrototypeOf(obj), and Object.setPrototypeOf(obj, proto).<br /><br /> The Object.create(obj) method is used to create an empty object with given proto as prototype and optional property descriptors. The Object.getPrototypeOf(obj) that returns the prototype of an object, and Object. Object.setPrototypeOf(obj, proto) which sets the prototyple of obj to proto.
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

### Explain the function and syntax of the Object.create(obj) method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Object.create() method creates a empty object, using an existing object as the prototype of the newly created object. It has two parameters, including the proto and the descriptors. The proto parameter is the object which should be the prototype of the newly created object. The descriptors get defined as an object whose enumerable properties specify property descriptors that get added to the newly created object.</div><br />
  <div><strong>Technical Response:</strong> The "Object.create()" function generates a new object by utilizing an existing object as the prototype. It contains two parameters: the prototype and the descriptors (propertiesObject in the specification). The proto parameter specifies the object that will serve as the prototype for the newly formed object. The descriptors (propertiesObject) are defined as an object whose enumerable own properties (those defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly created object, along with the corresponding property names, if specified and not undefined. These are the properties defined by the second parameter to Object.defineProperties(). Descriptors function similarly to property flags.
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
  <div><strong>Interview Response:</strong> The Object.getPrototypeOf(obj) method returns the prototype of the specified object. If there are no inherited properties, null gets returned.
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

:::warning
According to the MDN, its advised to use Object.create(obj) instead of this method.
:::

  </div>
</details>

---

### Can you change `[[Prototype]]` on existing objects, in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, however it is seen as a horrible idea. We have the ability to get/set [[Prototype]] at any moment. However, it is normally only set once at the time of object creation, and the object is not modified after that.</div><br />
  <div><strong>Technical Response:</strong> Technically, yes, but it is thought to be a horrible idea. We have the ability to get/set [[Prototype]] at any moment. However, it is normally only set once at the moment of object creation and is not changed again. Using Object to make "on-the-fly" changes to a prototype.  setPrototypeOf or obj. __proto__  = is a sluggish operation because it violates internal object property access optimizations. So, unless you know what you're doing or performance isn't important to you, we should avoid it.
  </div><br />

:::warning
According to the MDN, changing the prototype after creation is a slow operation and can affect performance.
:::

  </div>
</details>

---

### Why was `__proto__` replaced by the functions getPrototypeOf / setPrototypeOf?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> According to the MDN, it gets replaced with getPrototypeOf and setPrototypeOf, because of the performance issues related to its use.
</div><br />

:::note
If you care about performance, you should avoid setting the [[Prototype]] of an object. Instead, create a new object with the desired [[Prototype]] using Object.create().
:::

  </div>
</details>

---

### What do you prefer, class inheritance and prototypal inheritance in JavaScript? If so, why?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Instances inherit from classes when class inheritance gets used. Hierarchical class taxonomies get created as a result of this. In contrast, instances inherit from other objects through prototypal inheritance, and they can get formed from numerous objects. Because it is more straightforward and more versatile, I favor prototypal inheritance.
</div>
  </div>
</details>

---

### When is classical inheritance an appropriate choice?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The answer is never or rarely. Indeed, never more than one level. Multi-level class hierarchies are an anti-pattern, and it can lead to problems like method collision, which is not good.
</div><br />

:::note
I've been posing this issue for years, and the only responses I've ever received fall into one of three prevalent assumptions. The challenge typically gets received with silence.
:::

  </div>
</details>

---

### What is the difference between class inheritance and prototypal inheritance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Classes inherit from classes created in sub-classes using a hierarchical class taxonomy. Prototypal inheritance equates to a prototype functioning as an object instance, and objects inherit directly from each other. The difference is that class taxonomy is not a derivative of prototypal inheritance.</div><br />
  <div><strong>Technical Response:</strong><br /><br /> <strong>Class Inheritance:</strong> Instances inherit from classes (similar to a blueprint or a class description) and form sub-class relationships: hierarchical class taxonomies. Instances usually get created utilizing constructor functions that use the 'new' keyword. The ES6 'class' keyword may or may not be used for class inheritance.<br /><br /> <strong>Prototypal Inheritance:</strong> Instances get directly inherited from other objects. Instances often get created using factory methods or the 'Object.create()' method. Instances may be built up from various objects, allowing for simple selective inheritance.
  </div>
  </div>
</details>

---

### What is a factory function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Factory functions are similar to constructor functions/class functions, but instead of requiring new to create an object, factory functions simply create an object and return it. They are often used to create objects that are not classes. Factory functions also do not require the use of the 'this' keyword for inner values. A factory function is different from a regular function in that it always returns an object, with any method, value, etc. contained within it.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Function creating new objects
// without use of 'new' keyword
function createCat(name) {
  return {
    name: name,
    talk: function () {
      console.log('My name is ' + name + ', the cat in the hat.');
    },
  };
}

//Create a cat with name Fuzzy
const cat1 = createCat('Fuzzy');

cat1.talk();

// Create a cat with name Fuzzy 2.O Upgraded
const cat2 = createCat('Fuzzy 2.O Upgraded');

cat2.talk();
```

  </div>
  </div>
</details>

---
