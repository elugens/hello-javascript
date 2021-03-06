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
  <div><strong>Interview Response:</strong> The only difference between call and apply is what they accept as parameters; call() expects all parameters passed individually, whereas apply() expects an array of parameters.
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
  <div><strong>Interview Response:</strong> When are CPU-heavy functions return the same result consistently. You can use transparent caching to reduce the user's browser or server load by implementing a decorator. The decorator handles the function's result to determine if the result gets cached or not. Transparent caching also reduces the bandwidth necessary to perform tasks and can significantly improve application performance. One of the main benefits of creating decorators is the ability to re-use cached results.
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

### Can you explain what a decorator function/method is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A decorator is a function that modifies the function's behavior or method passed to it by returning a new function. You can implement decorators in any language that supports functions as first-class citizens. You can bind a function to a variable or pass it as an argument to another function.
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

### Explain the function and syntax of the function call() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The call method allows a function belonging to one object to be assigned and called for a different object. The call method provides a new "this" value to the function. You can use the "call" method to write a method once and then inherit it in another object without having to rewrite the method for the new object. The call method expects a list of parameters, whereas the apply method expects an array of arguments.</div><br />
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

### Can you explain the function and syntax of the function apply() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The apply method calls a function with a given "this" value and arguments provided as an array or an array-like object. While the syntax of this function is almost identical to that of the call method. The fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
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
  <div><strong>Interview Response:</strong> Method borrowing allows us to use the methods of one object on a different object without having to make a copy of that method and maintain it in two separate places. It is performed by using .call(), .apply(), or.bind(), which are all available to explicitly set ???this??? on the method we are borrowing.
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
