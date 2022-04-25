---
title: The "new" Operator
description: The "new" operator is used to create a new object instance.
sidebar_position: 5
sidebar_label: The "new" Operator
---

**Objects the Basics: The "new" Operator**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is the difference between a regular function and a constructor function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The conventional difference is that the constructor function name is capitalized and invoked with the "new" operator.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User('Jack');

alert(user.name); // Jack
alert(user.isAdmin); // false
```

  </div>
  </div>
</details>

---

### What steps are taken by a constructor function when it gets invoked in relation to the "this" keyword?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> First, a new object is created and assigned to "this", the function body executes. Usually, it modifies "this", adds new properties, and the value of this gets returned.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

// So let user = new User("Jack") gives the same result as:

let user = {
  name: 'Jack',
  isAdmin: false,
};
```

  </div>
  </div>
</details>

---

### What is the primary function of constructor functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The primary purpose of constructors is to act as the framework of object creation. It quickly allows the code to create new objects in its image. All functions that accept the arrow function can get used as a constructor.
</div>
  </div>
</details>

---

### What is the result when using an arrow function as a constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Any attempt to resolve "this" in an arrow function results in a type error. This behavior is especially notable when you try to use an arrow function as a constructor, resulting in a type error. A cardinal rule to remember in JavaScript development is that arrow functions have no "THIS".
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const Car = (color) => {
  this.color = color;
};

const redCar = new Car('red'); // TypeError: Car is not a constructor
```

  </div>
  </div>
</details>

---

### Can you omit the parentheses when you invoke a constructor function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, technically, when you have no arguments and this approach is permitted by the specification but not considered a good style. It would be best always to use the parentheses even when you have no arguments in your constructor.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// let user = new User; <-- no parentheses

// same as
// let user = new User(); <-- proper implementation
```

  </div>
  </div>
</details>

---

### What are the explicit rules on return statements in constructor functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Constructors often do not contain a return statement. Their role is to enter all relevant information into this, and it immediately becomes the outcome; nevertheless, if there is a return statement, the rule is straightforward.<br /><br />
  <ol>
    <li>If the return function gets used with an object, the object is returned instead of this.</li>
    <li>If the return function gets invoked with a primitive, it gets ignored.</li>
  </ol>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function BigUser() {
  this.name = 'John';

  return { name: 'Godzilla' }; // <-- returns this object
}

alert(new BigUser().name); // Godzilla, got that object
```

  </div>
  </div>
</details>

---
