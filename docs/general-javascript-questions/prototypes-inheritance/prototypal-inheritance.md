---
title: Prototypal Inheritance
description: Prototypal Inheritance is a very common interview question. Prototypal Inheritance is a process in which an object inherits properties from another object.
sidebar_position: 1
sidebar_label: Prototypal Inheritance
keywords:
  - prototypal inheritance
  - javascript inheritance
  - functions
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
  - prototypal inheritance
  - javascript inheritance
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/PrototypalSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Prototypal Inheritance | JavaScript Frontend Phone Interview</title>
</head>

**Prototypes / Inheritance: Prototypal Inheritance**

<CloseAllAnswers />

---

### What does a prototype refer to in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A prototype in JavaScript is an object that other objects inherit properties and methods, enabling code reusability and efficient memory usage.
  </div><br />
  <div><strong>Technical Response:</strong> Objects in JavaScript feature a special hidden property called [[Prototype]] (as defined in the standard), which is either null or refers to another object. We refer to this object as a prototype. JavaScript objects inherit features from one another through the use of prototypes. Objects can have a prototype object, which acts as a template object from which it inherits methods and properties to provide inheritance. JavaScript commonly gets described as a prototype-based language.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Overview:</strong> Historical example using <strong>proto</strong>, which is now deprecated (no longer supported)<br /><br />

  <div></div>

```js
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // (*) __proto__ deprecated

// we can find both properties in rabbit now:
alert(rabbit.eats); // true (**)
alert(rabbit.jumps); // true
```

:::note
You should be familiar with the `__proto__` because you may see it in older code.
:::

  </div>
  </div>
</details>

---

### What exactly is a prototype in JavaScript when it comes to objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A prototype in JavaScript is an object serving as a blueprint for other objects to inherit properties and methods, promoting code reusability and memory efficiency.
</div><br />
  <div><strong>Technical Response:</strong> A prototype is a fixed entity called an object. When you declare a function, it generates a prototype related to it. Furthermore, the prototype object establishes a link to its function, resulting in a circular relationship. This behavior applies to any function. Objects get created in various ways in JavaScript, and the new keyword is one method. We apply an uppercase initial letter to the function name when we declare it if we intend on utilizing the "new" keyword. (a constructor function).
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Prototypal Inheritance
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User('Jack');

console.log(user.name); // Jack
console.log(user.isAdmin); // false
console.log(user instanceof User); // true
```

  </div>
  </div>
</details>

---

### In JavaScript prototypal inheritance, what is the value of the “this” keyword?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript prototypal inheritance, the "this" keyword refers to the instance of the object on which a method is called, enabling access to its properties and methods.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I am walking`);
    }
    console.log("I'm asleep!");
  },
  sleep() {
    this.isSleeping = true;
  },
};

animal.walk(); // returns 'I am walking'

let rabbit = {
  name: 'White Rabbit',
  __proto__: animal,
};

// modifies rabbit.isSleeping
rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined (no such property)
```

:::note

Prototypes do not affect "this", regardless of the method the location in an object or prototype. This structure is always the object before the dot in a method call.

:::

  </div>
  </div>
</details>

---

### Can you explain the difference between Object.create() and the new keyword in relation to prototypal inheritance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Object.create() creates a new object with a specified prototype, without invoking a constructor. The new keyword creates an object from a constructor, also setting its prototype to the constructor's prototype.<br />
  </div>
  </div>
</details>

---

### How does JavaScript implement inheritance compared to classical inheritance in other languages?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript implements inheritance through prototypal inheritance, where objects inherit properties and methods directly from other objects. Classical inheritance uses classes to define and inherit behavior.<br />
  </div>
  </div>
</details>

---

### What is the difference between a prototype and a constructor in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a prototype is an object used for inheritance, while a constructor is a function that creates new instances of objects and initializes their properties and methods.<br />
  </div>
  </div>
</details>

---

### What is the prototype chain, and how does it work in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The prototype chain in JavaScript is a series of linked prototypes from which objects inherit properties and methods. It enables property lookups through parent prototypes until found or undefined.<br />
  </div>
  </div>
</details>

---

### How can you create a new object that inherits from another object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can create a new object that inherits from another by using Object.create() with the desired object as the prototype or by setting the constructor's prototype.<br />
  </div>
  </div>
</details>

---

### Can you explain the role of the "this" keyword in prototypal inheritance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In prototypal inheritance, "this" refers to the instance object, allowing access to its properties and methods. It enables sharing and reuse of code across objects in a prototype chain.<br />
  </div>
  </div>
</details>

---

### How does the for-in loop handle inherited properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The for-in loop iterates over an object's enumerable properties, including inherited ones from its prototype chain. It doesn't differentiate between own and inherited properties, accessing all enumerable keys.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let decoration = {
  color: 'red',
};

let circle = Object.create(decoration);
circle.radius = 10;

for (const prop in circle) {
  console.log(prop);
}

// Returns radius, color
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> The Old __proto__<br /><br />

  <div></div>

```js
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}
```

  </div>
  </div>
</details>

---

### What are some advantages and disadvantages of using prototypal inheritance in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Advantages: flexibility, memory efficiency, easy object creation. Disadvantages: readability issues, inadvertent property/method sharing, and potential performance impact due to longer prototype chains.<br />
  </div>
  </div>
</details>

---

### How do you prevent an object from inheriting properties from its prototype?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To prevent inheritance, create an object with null as its prototype using Object.create(null). This results in an object without a prototype, so it won't inherit properties or methods from any prototype chain.<br />
  </div>
  </div>
</details>

---
