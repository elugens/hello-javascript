---
title: Variable Scope / Closures
sidebar_position: 3
---

# Variable Scope / Closures

**Advanced Functions: Variable Scope / Closures**

<head>
  <title>Variable Scope / Closures - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What are the three types of variable declarations in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are three types of variable declarations in JavaScript including let, const, the var legacy variable.
</div>
  </div>
</details>

Example: declaration

```js
let arr = [1, 2, 3];

const str = 'Hello';

var num = 1;
```

Source: <https://javascript.info/closure>

### What is a code block or block statement (compound statement) in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A block statement or compound statement is used to group zero or more statements encapsulated in curly brackets.
</div>
  </div>
</details>

Example: code block

```js
// do some job with local variables that should not be seen outside
{
  let message = 'Hello'; // only visible in this block
  alert(message); // Hello
}

alert(message); // Error: message is not defined
// We can use this to isolate a piece of code

{
  // show message

  let message = 'Hello';

  alert(message); // returns Hello
}

{
  // show another message

  let message = 'Goodbye';

  alert(message); // returns Goodbye
}
```

Source: <https://javascript.info/closure#code-blocks>

### What are the benefits of using a code block or block statement in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main benefit is the ability to isolate a portion of your code. This improves control and reduces errors in your application.
</div>
  </div>
</details>

Code Example: no code block control, results in an error

```js
// show message

let message = 'Hello';

alert(message);

// show another message

let message = 'Goodbye'; // Error: variable already declared
alert(message);
```

Source: <https://javascript.info/closure#code-blocks>

### Does JavaScript support nested functions? How do they work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, nested functions have interesting scoping rules in JavaScript. A nested function can access any variables and parameters of their outer parent function(s). This allows us to give the parent function additional dynamic features.
</div>
  </div>
</details>

:::note
Nested functions are quite common in JavaScript, because of their dynamic abilities which allows an extension of the originating function.
:::

Example:

```js
function sayHiBye(firstName, lastName) {
  // helper nested function to use below

  function getFullName() {
    return firstName + ' ' + lastName;
  }

  alert('Hello, ' + getFullName());

  alert('Bye, ' + getFullName());
}
```

Source: <https://javascript.info/closure#nested-functions>

### Explain, what the Lexical Environment is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Lexical Environment is a theoretical specification object. It is used to describe how things work. The Lexical Environment object consists of two parts including the environment record and a reference to the outer lexical environment.</div><br />
  <div><strong>Technical Response:</strong> “Lexical Environment” is a specification object: it only exists “theoretically” in the language specification to describe how things work. We cannot get this object in our code and manipulate it directly. JavaScript engines also may optimize it, discard variables that are unused to save memory and perform other internal tricks, if the visible behavior remains as described. The Lexical Environment object consists of two parts including the environment record and a reference to the outer lexical environment. The Environment Record is an object that stores all local variables as its properties (and some other information like the value of this).
  </div>
  </div>
</details>

:::note
The Environment Record is an object that stores all local variables as its properties and some other information like the value of this.
:::

Source: <https://javascript.info/closure#lexical-environment>

### Explain, How a variable works in the context of a JavaScript engine?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A variable is just a property of the special internal object called the Environment Record. To get or change a variable means to get or change a property of that object.
</div>
  </div>
</details>

Example:

```js
let word = 'Hello';

// Lexical Environment Record --> property = word: "Hello"; outer --> null

// ENGINE EXECUTION

// execution start --> word: <uninitialized> - outer --> null

let word; // word: undefined
word = 'Hello'; // word: "Hello"
```

Source: <https://javascript.info/closure#lexical-environment>

### What is the difference between function and variable declaration?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A function is also a value, like a variable. The difference is that a Function Declaration is fully initialized when the script loads. When a Lexical Environment is created, a Function Declaration immediately becomes a ready-to-use function.
</div>
  </div>
</details>

:::note
You should aware that this only applies to function declarations and not function expressions.
:::

Source: <https://javascript.info/closure#step-2-function-declarations>

### What is a closure in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A closure is a function that remembers its outer variables and can access them. In JavaScript, all functions are naturally Closures (there is only one exception, The "new Function" syntax). Functions automatically remember where they were created using a hidden `[[Environment]]` property, and then their code can access outer variables.</div><br />
  <div><strong>Technical Response:</strong> A closure is a function that remembers its outer variables and can access them. In some languages, that is not possible, or a function should be written in a special way to make it happen. In JavaScript, all functions are naturally Closures (there is only one exception, The "new Function" syntax). Functions automatically remember where they were created using a hidden `[[Environment]]` property, and then their code can access outer variables.
  </div>
  </div>
</details>

:::note
This should not be confused with a code block.
:::

Source: <https://javascript.info/closure#step-2-function-declarations>

### How does garbage collection work with the Lexical Environment and nested functions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Usually, a Lexical Environment is removed from memory with all the variables after the function call finishes. That is because there are no references to it. As any JavaScript object, it is only kept in memory while it is reachable. A Lexical Environment object dies when it becomes unreachable (just like any other object). In other words, it exists only while there is at least one nested function referencing it.</div><br />
  <div><strong>Technical Response:</strong> Usually, a Lexical Environment is removed from memory with all the variables after the function call finishes. That is because there are no references to it. As any JavaScript object, it is only kept in memory while it is reachable. However, if there is a nested function that is still reachable after the end of a function, then it has `[[Environment]]` property that references the lexical environment. In that case the Lexical Environment is still reachable even after the completion of the function, so it stays alive. A Lexical Environment object dies when it becomes unreachable (just like any other object). In other words, it exists only while there is at least one nested function referencing it.
  </div>
  </div>
</details>

Example:

```js
function f() {
  let value = 123;

  return function () {
    alert(value);
  };
}

let g = f(); // g.[[Environment]] stores a reference to the Lexical Environment
// of the corresponding f() call

function f() {
  let value = 123;

  return function () {
    alert(value);
  };
}

let g = f(); // while g function exists, the value stays in memory
g = null; // ...and now the memory is cleaned up
```

Source: <https://javascript.info/closure#garbage-collection>
