---
title: The "new" Operator
sidebar_position: 5
---

# The "new" Operator

**Objects the Basics: The "new" Operator**

<head>
  <title>Constructors - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is the difference between a regular function and a constructor function.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The conventional differences is the constructor function name is capitalized and it should be invoked with the “new” operator.
</div>
  </div>
</details>

Code Example:

```js
function User(name) {
  this.name = name;

  this.isAdmin = false;
}

let user = new User('Jack');

alert(user.name); // Jack
alert(user.isAdmin); // false
```

---

### What steps are taken by a constructor function when it is invoked, in relation to the “this” keyword?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> First, a new object is created and assigned to “this”, the function body executes. Usually it modifies “this”, adds new properties, and the value of this is returned.
</div>
  </div>
</details>

Code Example:

```js
function User(name) {
  // this = {};  (implicitly)

  // add properties to this

  this.name = name;

  this.isAdmin = false;

  // return this;  (implicitly)
}

// So let user = new User("Jack") gives the same result as:

let user = {
  name: 'Jack',

  isAdmin: false,
};
```

---

### What is the main purpose of constructor functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main purpose of constructors is to act as the framework of an object creation. It quickly allows the code to create new objects in its image. All functions accept the arrow function can be used as a constructor.
</div>
  </div>
</details>

---

### What is the result when you try to use an arrow function as a constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Any attempt to resolve this in an arrow function will result in a type error. This is especially notable when you try to use an arrow function as a constructor. It will result in a type error. A cardinal rule to remember in JavaScript development is that arrow functions have no “THIS”.
</div>
  </div>
</details>

Code Example:

```js
const Car = (color) => {
  this.color = color;
};

const redCar = new Car('red'); // TypeError: Car is not a constructor
```

---

### Can you omit the parentheses when you invoke a constructor function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>Yes, it is technically possible when you have no arguments and permitted by the specification, but it is not considered a good style. You should always use the parentheses even when you have no arguments in your constructor.
</div>
  </div>
</details>

Code Example:

```js
let user = new User(); // <-- no parentheses
// same as

let user = new User(); // <-- proper implementation
```

---

### What are the explicit rules on return statements in constructor functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result, but if there is a return statement, then the rule is simple.<br /><br />
  <ol>
    <li>If return is called with an object, then the object is returned instead of this.</li>
    <li>If return is called with a primitive, it is ignored.</li>
  </ol>
</div>
  </div>
</details>

Code Example:

```js
function BigUser() {
  this.name = 'John';

  return { name: 'Godzilla' }; // <-- returns this object
}

alert(new BigUser().name); // Godzilla, got that object
```

---
