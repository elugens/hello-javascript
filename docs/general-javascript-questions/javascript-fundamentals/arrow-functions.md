---
title: Arrow Functions
description: Arrow functions are a concise way to write functions.
sidebar_position: 19
sidebar_label: Arrow Functions
---

**JavaScript Fundamentals: Arrow Functions**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What is the definition of an arrow function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An arrow function expression is a compact alternative to a traditional function expression, but it is limited and should not get used in all situations.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Arrow Function
let sayHello = (name) => 'Hello, ' + name;
console.log(sayHello('JavaScript!'));

// Function Expression
let sayHello = function (name) {
  return 'Hello, ' + name;
};

console.log(sayHello('JavaScript!'));
```

  </div>
  </div>
</details>

---

### What are the differences and limitations between Arrow Functions and Function Expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An arrow function does not have bindings to this or super and should not get used as a method or constructor. Also, it is not suitable for the call, apply, and bind methods.</div><br />
  <div><strong>Technical Response:</strong><br /><br /><strong>Differences & Limitations:</strong><br /><br />
  <ol>
    <li>It does not have its binding to this or super and should not get used as a method.</li>
    <li>It does not have arguments or new.target keywords.</li>
    <li>Not suitable for the call, apply and bind methods, which generally rely on establishing a scope.</li>
    <li>It cannot get used as a constructor.</li>
    <li>It cannot use yield within its body.</li>
  </ol>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
'use strict';

var obj = {
  // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
```

  </div>
  </div>
</details>

---

### If there are no arguments in an arrow function, do you need to add the parentheses?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, if there are no arguments, then the parentheses should be present in your arrow function. Otherwise, it throws a syntax error.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Arrow Function with no argument
let sayHi = () => alert('Hello!');

sayHi(); // returns Hello!
```

  </div>
  </div>
</details>

---

### Can you dynamically create a function with an arrow function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it is possible to create an arrow function in JavaScript dynamically. An example is a ternary statement that returns two anonymous arrow functions.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let age = prompt('What is your age?', 18);

let welcome = age < 18 ? () => alert('Hello') : () => alert('Greetings!');

welcome();
```

  </div>
  </div>
</details>

---

### What is the difference between a single and multiline statement in an arrow function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A multiline statement must get enclosed in curly brackets, but we can omit the curly brackets in a single-line statement.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let sum = (a, b) => {
  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return”.
};

alert(sum(1, 2)); //

// Single Line
let sum = (a, b) => a + b;
console.log(sum(3, 6)); // returns 9
```

  </div>
  </div>
</details>

---
