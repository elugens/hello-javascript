---
title: The "new" Operator
description: The "new" operator is used to create a new object instance. What is the difference between a regular function and a constructor function? Interview Question
sidebar_position: 5
sidebar_label: The "new" Operator
keywords:
  - the new operator
  - new operator
  - constructor function
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - constructors
  - interview questions
  - interview answers
  - js
tags:
  - the new operator
  - new operator
  - constructor function
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/TheNewOpSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>The new Operator | JavaScript Frontend Interview Questions</title>
</head>

**Objects the Basics: The "new" Operator**

<CloseAllAnswers />

---

### What is the new Operator used for in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The new "operator" in JavaScript creates a new object instance from a constructor function, invoking the function with the provided arguments and setting its prototype.<br /><br />
  </div>
  </div>
</details>

---

### What is the difference between a regular function and a constructor function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A regular function performs a task, while a constructor function initializes a new object instance with properties and methods, using the "new" keyword.
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
  <div><strong>Interview Response:</strong> A constructor function, upon invocation, creates an empty object, assigns this empty object to 'this', adds properties and methods via 'this', and implicitly returns 'this'.
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

// another example
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  // 'this' is implicitly returned
}

let myCar = new Car('Toyota', 'Corolla', 2005);
```

  </div>
  </div>
</details>

---

### What is the primary function of constructor functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The primary function of constructor functions is to initialize new object instances with specific properties and methods, establishing their structure and behavior.
</div><br/>
  </div>
</details>

---

### What is the result when using an arrow function as a constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  
  <div><strong>Interview Response:</strong> Using an arrow function as a constructor is not possible because arrow functions have no "this" binding and cannot be used with the "new" keyword, resulting in a TypeError.
</div><br />
  <div><strong>Technical Response:</strong> Any attempt to resolve "this" in an arrow function results in a type error. This behavior is especially notable when you try to use an arrow function as a constructor, resulting in a type error. A cardinal rule to remember in JavaScript development is that arrow functions have no "THIS".
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
  <div><strong>Interview Response:</strong> Technically, Yes, when you have no arguments and this approach is permitted by the specification but not considered a good style. It would be best always to use the parentheses even when you have no arguments in your constructor.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// let user = new User; <-- no parentheses

// same as
let user = new User(); // <-- proper implementation
```

  </div>
  </div>
</details>

---

### What are the explicit rules on return statements in constructor functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Technical Response:</strong> Constructors automatically return this (the new object). If you explicitly return an object, that's returned instead. Non-object explicit returns are ignored, this is returned.
  </div>
  <div><strong>Technical Response:</strong> Constructors often do not contain a return statement. Their role is to enter all relevant information into this, and it immediately becomes the outcome; nevertheless, if there is a return statement, the rule is straightforward.<br /><br />
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

console.log(new BigUser().name); // Godzilla, got that object
```

  </div>
  </div>
</details>

---

### What happens if a constructor function is called without the "new" operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a constructor is called without "new", "this" is not bound to the newly created object, it refers to the global or outer function scope, which can cause unintended side effects.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var myCar = Car('Toyota', 'Corolla', 2005); // 'this' not bound to a new object

console.log(myCar); // Outputs: undefined

console.log(window.make); // Outputs: 'Toyota', if in a browser environment
```

  </div>
  </div>
</details>

---

### How can you check if an object was created by a specific constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the `instanceof` operator in JavaScript. For example, if `obj` was created by `Constructor`, check with `obj instanceof Constructor`. It returns `true` if `obj` was created by `Constructor`.
<br /><br />
  </div>
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function MyConstructor() {
    // Constructor logic here
}

let obj = new MyConstructor();

if (obj instanceof MyConstructor) {
    console.log('obj was created by MyConstructor');
} else {
    console.log('obj was not created by MyConstructor');
}
```

  </div>
  </div>
</details>

---
