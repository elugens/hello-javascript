---
title: Call and Apply
sidebar_position: 9
---

# Decorators and forwarding, call/apply

**Advanced-JS Functions: Call and Apply**

<head>
  <title>Call and Apply - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is the main difference between the call and apply JavaScript methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The only difference between call and apply is what they accept as parameters, call() expects all parameters to be passed in individually, whereas apply() expects an array of parameters.
</div>
  </div>
</details>

Example:

```js
let pokemon = {
  firstName: 'Pika',

  lastName: 'Chu ',

  getPokeName: function () {
    let fullName = this.firstName + ' ' + this.lastName;

    return fullName;
  },
};

let pokemonName = function (snack, hobby) {
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

// Call Method

pokemonName.call(pokemon, 'sushi', 'algorithms');
// returns Pika Chu loves sushi and algorithms

// Apply Method

pokemonName.apply(pokemon, ['sushi', 'algorithms']);

// returns Pika Chu loves sushi and algorithms
```

Source: <https://javascript.info/call-apply-decorators>

### Explain, how does transparent caching works in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use transparent caching to reduce the load on the user’s browser or server by implementing a decorator. The decorator handles the functions result in a manner to determine if the result has been cached or not. Transparent caching also reduces the amount of bandwidth necessary to perform tasks and can greatly improve application performance. One of the main benefits of creating decorators is the ability to re-use cached results.
</div>
  </div>
</details>

Example:

```js
function slow(x) {
  // there can be a heavy CPU-intensive job here

  alert(`Called with ${x}`);

  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // if there's such key in cache

      return cache.get(x); // read the result from it
    }

    let result = func(x); // otherwise call func
    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

alert(slow(1)); // slow(1) is cached and the result returned
alert('Again: ' + slow(1)); // slow(1) result returned from cache
alert(slow(2)); // slow(2) is cached and the result returned
alert('Again: ' + slow(2)); // slow(2) result returned from cache
```

Source: <https://javascript.info/call-apply-decorators#transparent-caching>

### Explain, what a decorator function/method is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A decorator is a function that modifies the behavior of the function or method passed to it by returning a new function. You can implement decorators in any language that supports functions as first-class citizens, where you can bind a function to a variable or pass it as an argument to another function.
</div>
  </div>
</details>

Code Example:

```js
function doSomething(name) {
  console.log('Hello, ' + name);
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

// Hello, Graham

wrapped('Graham');

// Starting

// Hello, Graham

// Finished
```

Source: <https://javascript.info/call-apply-decorators#using-func-call-for-the-context>

Code: <https://www.sitepoint.com/javascript-decorators-what-they-are/>

### Explain, the function and syntax of the function call() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The call method allows a function belonging to one object to be assigned and called for a different object. The call method provides a new value of “this” to the function. With call, you can write a method once and then inherit it in another object, without having to rewrite the method for the new object. The call method expects a list of arguments verses an array of arguments in the apply method.</div><br />
  <div><strong>Technical Response:</strong> The call() method allows for a function/method belonging to one object to be assigned and called for a different object. The call() method provides a new value of this to the function/method. With call(), you can write a method once and then inherit it in another object, without having to rewrite the method for the new object. While the syntax of this function is almost identical to that of apply(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
  </div>
  </div>
</details>

**Syntax:** func.call([thisArg[, arg1, arg2, ...argN]])

Example:

```js
function Person(firstName, lastName) {
  this.firstName = firstName;

  this.lastName = lastName;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

function Man(firstName, lastName) {
  Person.call(this, firstName, lastName); // calling Person firstName, lastName

  this.gender = 'Man';
}

const eric = new Man('Eric', 'Wilson');

console.log(eric.firstName + ' ' + eric.lastName); // returns Eric + Wilson

console.log(eric.getFullName()); // method call returns Full Name: Eric Wilson
```

Source: <https://javascript.info/call-apply-decorators#using-func-call-for-the-context>

### Explain, the function and syntax of the function apply() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The apply method calls a function with a given “this” value, and arguments provided as an array or an array-like object. While the syntax of this function is almost identical to that of the call method. The fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
</div>
  </div>
</details>

**Syntax:** func.apply(thisArg, [ argsArray])

Example:

```js
let customer1 = { name: 'Leo', email: 'leo@gmail.com' };

let customer2 = { name: 'Nat', email: 'nat@hotmail.com' };

function greeting(text, text2) {
  console.log(`${text} ${this.name}, ${text2}`);
}

greeting.apply(customer1, ['Hello', 'How are you?']);
// output Hello Leo, How are you?

greeting.apply(customer2, ['Hello', 'How are you?']);

// output Hello Nat How are you?
```

Source: <https://javascript.info/call-apply-decorators#func-apply>

### How does method borrowing work in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Method borrowing allows us to use the methods of one object on a different object without having to make a copy of that method and maintain it in two separate places. It is accomplished through the use of .call(), .apply(), or .bind(), all of which exist to explicitly set this on the method we are borrowing.
</div>
  </div>
</details>

Example:

```js
let bird = {
  name: 'Lark',

  do: function (greet) {
    console.log('I am a ' + this.name + ', I ' + greet + '!');
  },
};

bird.do('tweet');

let butterFly = {
  name: 'Swallowtail',
};

bird.do.call(butterFly, 'flutter'); // Borrowing the do method from bird

// Returns:

// I am a Lark, I tweet!

// I am a Swallowtail, I flutter!
```

Source: <https://javascript.info/call-apply-decorators#func-apply>
