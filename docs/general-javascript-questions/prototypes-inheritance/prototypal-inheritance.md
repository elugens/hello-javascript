---
title: Prototypal Inheritance
description: Prototypal Inheritance is a very common interview question. Prototypal Inheritance is a process in which an object inherits properties from another object.
sidebar_position: 1
sidebar_label: Prototypal Inheritance
---

**Prototypes / Inheritance: Prototypal Inheritance**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What does a prototype refer to in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript objects inherit features from one another through prototypes. JavaScript sometimes gets defined as a prototype-based language that gets used to offer inheritance; objects can have a prototype object that serves as a template object from which it inherits methods and attributes.</div><br />
  <div><strong>Technical Response:</strong> Objects in JavaScript feature a special hidden property called [[Prototype]] (as defined in the standard), which is either null or refers to another object. This item gets referred to as a prototype. JavaScript objects inherit features from one another through the use of prototypes. Objects can have a prototype object, which acts as a template object from which it inherits methods and properties to provide inheritance. JavaScript commonly gets described as a prototype-based language.
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
  <div><strong>Interview Response:</strong> A prototype is a fixed entity called an object. When you declare a function, it generates a prototype related to that function. Furthermore, the prototype object establishes a link to its function, resulting in a circular relationship. This behavior applies to any function. Objects get created in various ways in JavaScript, and the new keyword is one method. We uppercase the initial letter of the function name when we declare if we intend on utilizing the "new" keyword. (a constructor function).
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
  <div><strong>Interview Response:</strong> The answer is simple: prototypes do not affect "this", regardless of the method the location in an object or prototype. This structure is always the object before the dot in a method call.
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

  </div>
  </div>
</details>

---

### How does the for-in loop behave when iterating through inherited properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When you loop through the properties of an object that inherits from another, the for...in statement moves up the prototype chain and enumerates the inherited properties.
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
