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
  <div><strong>Interview Response:</strong> Prototypes are the mechanism by which JavaScript objects inherit features from one another. JavaScript is often described as a prototype-based language that is used to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”. Prototypes are the mechanism by which JavaScript objects inherit features from one another. JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Overview:</strong> Historical example using **proto** which is now deprecated (no longer supported)<br /><br />

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

### What is a prototype in relation to objects in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A prototype is an object. When you declare a function, a prototype is created and linked to that function. In addition, the prototype object forms a link with its function creating a circular relationship. This is true for any function. In JavaScript, we can create objects several different ways. One of the ways is the new keyword. When we declare a function with the intent of using new (a constructor function), we capitalize the first letter of the function name.
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
  <div><strong>Interview Response:</strong> The answer is simple: "this" is not affected by prototypes at all. No matter where the method is found in an object or its prototype. In a method call, "this" is always the object before the dot.
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

### What behavior does the for-in loop use when it iterates over inherited properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When you loop over properties of an object that inherits from another object, for...in statement goes up in the prototype chain and enumerates over the inherited properties as well.
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