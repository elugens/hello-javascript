---
title: Decorators and forwarding, call/apply
description: The difference of call and apply is what they accept as args; call expects all
  parameters to passed individually, whereas apply expects an array of
  parameters.
sidebar_position: 9
sidebar_label: Call and Apply
keywords:
  - decorators
  - javascript
  - interview
  - questions
  - answers
  - forwarding
  - call
  - apply
  - interview questions
  - interview answers
  - call and apply
tags:
  - arrow function
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CallApplySchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Decorators and forwarding Frontend Interview Answers - JS</title>
</head>

**Advanced-JS Functions: Call and Apply**

<CloseAllAnswers />

### What is the primary distinction between the JavaScript methods call and apply?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The primary difference between call and apply is how arguments are passed to the function being called: call uses comma-separated arguments, while apply uses an array.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function () {
    let fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  },
};

let pokemonName = function (snack, hobby) {
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

// Call Method
pokemonName.call(pokemon, 'sushi', 'algorithms');
// returns Pika Chu loves sushi and algorithms

// Apply Method
pokemonName.apply(pokemon, ['sushi', 'algorithms']);
// returns Pika Chu loves sushi and algorithms
```

  </div>
  </div>
</details>

---

### Can you explain how transparent caching works in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Transparent caching in JavaScript is the automatic storage and retrieval of resources in the browser cache. It improves website performance by reducing network requests and page load times, without requiring additional code from the developer.
</div><br />
  <div><strong>Technical Response:</strong> When are CPU-heavy functions return the same result consistently. You can use transparent caching to reduce the user's browser or server load by implementing a decorator. The decorator handles the function's result to determine if the result gets cached or not. Transparent caching also reduces the bandwidth necessary to perform tasks and can significantly improve application performance. One of the main benefits of creating decorators is the ability to re-use cached results.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function slow(x) {
  // there can be a heavy CPU-intensive job here
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x); // otherwise call func

    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

alert(slow(1)); // slow(1) is cached and the result returned
alert('Again: ' + slow(1)); // slow(1) result returned from cache

alert(slow(2)); // slow(2) is cached and the result returned
alert('Again: ' + slow(2)); // slow(2) result returned from cache
```

  </div>
  </div>
</details>

---

### Can you explain what a decorator is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
   <div><strong>Interview Response:</strong> In JavaScript, a decorator is a design pattern that allows behavior to be added to an individual object or class without changing the object or class itself.
</div><br />
  <div><strong>Technical Response:</strong> A decorator is a function that modifies the function's behavior or method passed to it by returning a new function. You can implement decorators in any language that supports functions as first-class citizens. You can bind a function to a variable or pass it as an argument to another function.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function doSomething(name) {
  console.log('Hello, ' + name);
}

function loggingDecorator(wrapped) {
  // Decorator
  return function () {
    console.log('Starting');
    const result = wrapped.apply(this, arguments);
    console.log('Finished');
    return result;
  };
}

const wrapped = loggingDecorator(doSomething);

doSomething('Graham');
// Hello, Graham

wrapped('Graham');
// Starting
// Hello, Graham
// Finished
```

  </div>
  </div>
</details>

---

### Can you explain the function of the call() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The call() method in JavaScript invokes a function with a specific "this" value and arguments provided individually. It essentially calls a function and sets the "this" keyword to the first argument passed to the method, with subsequent arguments passed as comma-separated values.</div><br />
  <div><strong>Technical Response:</strong> The call() method allows for a function/method belonging to one object to be assigned and called for a different object. The call() method provides a new " this " value to the function/method. You can use the "call" method to write a method once and then inherit it in another object without having to rewrite the method for the new object. The call method expects a list of parameters, whereas the apply method expects an array of arguments.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> func.call([thisArg[, arg1, arg2, ...argN]]);<br /><br />

  <div></div>

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

function Man(firstName, lastName) {
  Person.call(this, firstName, lastName); // calling Person firstName, lastName
  this.gender = 'Man';
}

const eric = new Man('Eric', 'Wilson');
console.log(eric.firstName + ' ' + eric.lastName); // returns Eric + Wilson

console.log(eric.getFullName()); // method call returns Full Name: Eric Wilson
```

  </div>
  </div>
</details>

---

### Can you explain the function of the apply() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>The apply() method in JavaScript is a way to invoke a function and set its "this" keyword explicitly to a specified object, with arguments provided as an array or array-like object.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> func.apply(thisArg, [ argsArray]);<br /><br />

  <div></div>

```js
let customer1 = { name: 'Leo', email: 'leo@gmail.com' };
let customer2 = { name: 'Nat', email: 'nat@hotmail.com' };

function greeting(text, text2) {
  console.log(`${text} ${this.name}, ${text2}`);
}

greeting.apply(customer1, ['Hello', 'How are you?']);
// output Hello Leo, How are you?

greeting.apply(customer2, ['Hello', 'How are you?']);
// output Hello Nat How are you?
```

  </div>
  </div>
</details>

---

### How does method borrowing work in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Method borrowing in JavaScript is a technique that allows an object to borrow methods from another object's prototype chain using the call() or apply() method, allowing for code reuse and avoiding duplication.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let bird = {
  name: 'Lark',
  do: function (greet) {
    console.log('I am a ' + this.name + ', I ' + greet + '!');
  },
};

bird.do('tweet');

let butterFly = {
  name: 'Swallowtail',
};

bird.do.call(butterFly, 'flutter'); // Borrowing the do method from bird

// Returns:
// I am a Lark, I tweet!
// I am a Swallowtail, I flutter!
```

  </div>
  </div>
</details>

---

### How do you use the call() method to invoke a function with a specific "this" value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the call() method by passing the object you want to set as the "this" value as the first argument, followed by the function arguments as comma-separated values.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {value: 10};

function multiply(n) {
    return this.value * n;
}

console.log(multiply.call(obj, 5)); // Output: 50
```

  </div>
  </div>
</details>

---

### Can you explain how to borrow methods from another object using the call() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Borrowing methods involves using call() to invoke a method from another object, with this set to your object, allowing the borrowed method to operate on your object.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let dog = {
  name: "Rover",
  sound: "Woof",
  makeSound: function() {
    console.log(this.sound);
  }
};

let cat = {
  name: "Whiskers",
  sound: "Meow"
};

// Borrowing the makeSound method from dog
dog.makeSound.call(cat); // Output: Meow
```

  </div>
  </div>
</details>

---

### What happens if you pass null or undefined as the first argument to the call() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If null or undefined is passed as the first argument to call(), JavaScript treats "this" as the global object in non-strict mode, or undefined in strict mode.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function greet() {
  console.log(this.message);
}

// Define a global variable
message = "Hello, World!";

// Call greet with null as the first argument
greet.call(null); // Output: "Hello, World!" in non-strict mode

// Now in strict mode
"use strict";
function greetStrict() {
  console.log(this.message);
}

greetStrict.call(null); // Throws TypeError: Cannot read properties of null (reading 'message') in strict mode
```

  </div>
  </div>
</details>

---

### How do you use the apply() method to invoke a function with a specific "this" value and arguments provided as an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To invoke a function with a specific "this" value and arguments as an array, use the apply() method, passing "this" value as the first argument and the array as the second.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {value: 10};

function multiply(n1, n2) {
    return this.value * n1 * n2;
}

console.log(multiply.apply(obj, [5, 2])); // Output: 100
```

  </div>
  </div>
</details>

---

### Can you explain how to borrow methods from another object using the apply() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Borrowing methods with apply() involves invoking a method from another object with this set to your object and an array of arguments, allowing operation on your object.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let dog = {
  name: "Rover",
  sound: "Woof",
  makeSound: function(times) {
    while(times--)
      console.log(this.sound);
  }
};

let cat = {
  name: "Whiskers",
  sound: "Meow"
};

// Borrowing the makeSound method from dog
dog.makeSound.apply(cat, [3]); // Output: Meow, Meow, Meow
```

  </div>
  </div>
</details>

---
