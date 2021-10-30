---
title: Async/await
sidebar_position: 8
---

# Async/await - Q&A

**Promises, async/await: Async/await**

### Is there another option, other than explicit promises, to handle asynchronous code in JavaScript?

**Interview Answer:** Yes, there is a special syntax to work with promises in a more comfortable fashion, called “async/await”. It is surprisingly easy to understand and use.

Example:

```
async function f() {

    return 1;

}
```

Source: <https://javascript.info/async-await>

### Can you explain the syntax and function of an async function?

**Answer:** An async function is a function declared with the async keyword, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains. Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they are synchronous by suspending the code execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

**Syntax:** `async function name([param[, param[, ...param]]]) { statements }`

Example:

```js
async function f() {
  return 1;
}

f().then(alert); // 1
// explicitly return a promise

async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

Source: [https://javascript.info/async-await#async-functions\](https://javascript.info/async-await#async-functions" )

### What does the await keyword do in asynchronous JavaScript code?

**Interview Answer:** The await keyword makes JavaScript wait until that promise settles and returns its result. It can only be used inside an async function within regular JavaScript code; however, it can be used on its own with JavaScript modules.

**Syntax:** let value = await promise

Example:

```js
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  let result = await promise; // wait until the promise resolves (\*)
  alert(result); // "done!"
}

f();
```

Source: <https://javascript.info/async-await#await>

### Is it possible to use the await keyword with regular functions?

**Interview Answer:** No, the await keyword cannot be used in conjunction with regular functions. If we try to use await in non-async function, there would be a syntax error.

**Note:** We may get this error if we forget to put async before a function. As said, await only works inside an async function.

Example:

```js
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  let result = await promise; // wait until the promise resolves (\*)
  alert(result); // "done!"
}

f();
```

Source: <https://javascript.info/async-await#await>

### How does the await keyword work on top-level code?

**Interview Answer:** The await keyword should not be used directly in top-level code, because it is syntactically incorrect and will result in an error. In order make it work properly, we can optionally wrap it in an anonymous async function.

Note: It should be noted that a new feature of the V8 engine allows top-level await in JS modules, but this should not be mistaken for a fix.

Example:

```js
// syntax error in top-level code

let response = await fetch('/article/promise-chaining/user.json');

let user = await response.json();

// wrap it into an anonymous async function, like this:

(async () => {
  let response = await fetch('/article/promise-chaining/user.json');

  let user = await response.json();

  // ..
})();
```

Source: <https://javascript.info/async-await#await>

### Does await accept JavaScript thenables?

**Interview Answer:** Yes, like promise.then, await allows us to use thenable objects (those with a callable then method). The idea is that a third-party object may not be a promise, but promise-compatible: if it supports .then, that’s enough to use it with await.

Example:

```js
class Thenable {

    constructor(num) {

      this.num = num;

    }

    then(resolve, reject) {

      console.log(resolve);

      // resolve with this.num\*2 after 1000ms

      setTimeout(() => resolve(this.num \* 2), 1000); // (\*)

    }

}

async function f() {

    // waits for 1 second, then result becomes 2

    let result = await new Thenable(1);

    console.log(result);

}

f();
```

Source: <https://javascript.info/async-await#await>

### Do classes allow asynchronous class methods?

**Interview Answer:** Yes, to declare an async class method, just prepend it with async. The meaning is the same: it ensures that the returned value is a promise and enables await.

Code Example:

```js
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,

      last,
    };

    this.age = age;

    this.gender = gender;

    this.interests = interests;
  }

  async greeting() {
    return await Promise.resolve(`Hi! I'm ${this.name.first}`);
  }

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);

han.greeting().then(console.log); // returns Hi! I'm Han
```

Source: <https://javascript.info/async-await#await>

### If a promise resolves normally, then await promise returns the result. What happens in the case of a rejection?

**Interview Answer:** In the case of a rejection, it throws the error, just as if there were a throw statement at that line. In real situations, the promise may take some time before it rejects. In that case there will be a delay before await throws an error.

Example:

```js
async function f() {
  await Promise.reject(new Error('Whoops!'));
}

// …is the same as this:

async function f() {
  throw new Error('Whoops!');
}
```

Source: <https://javascript.info/async-await#error-handling>

### Is there a way to catch errors dynamically in async functions beside explicitly throwing an error?

**Interview Answer:** Yes, there are two approaches that can be used including try…catch method commonly used with promises. We can catch that error using try..catch, the same way as a regular throw. In the case of an error, the control jumps to the catch block.

We can also wrap multiple lines to ensure handling of multiple error handling. If we don’t have try..catch, then the promise generated by the call of the async function f() becomes rejected. We can append .catch to handle it. We can also catch such errors using a global unhandledrejection event handler.

Example:

```js
// Try...Catch

async function f() {
  try {
    let response = await fetch('/no-user-here');

    let user = await response.json();
  } catch (err) {
    // catches errors both in fetch and response.json

    alert(err);
  }
}

f();

// Appending catch to an async function

async function f() {
  let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise

f().catch(alert); // TypeError: failed to fetch // (\*)
```

Source: <https://javascript.info/async-await#error-handling>

### When we need to wait for multiple (array) promises, what can we wrap them into to ensure proper handling (resolve/reject)?

**Interview Answer:** When we need to wait for multiple (array) promises, we can wrap them in Promise.all and then await. In the case of an error, it propagates as usual, from the failed promise to Promise.all, and then becomes an exception that we can catch using try..catch around the call.

Example:

```js
// wait for the array of results

let results = await Promise.all([

    fetch(url1),

    fetch(url2),

    ...

]);
```

Source: <https://javascript.info/async-await>
