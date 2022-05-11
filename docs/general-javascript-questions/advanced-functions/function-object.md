---
title: Function object / NFE
description: All functions in JavaScript are objects. The concept of functions as callable
  "action objects" is an excellent approach to thinking about them.
sidebar_position: 6
sidebar_label: Function object / NFE
keywords:
  - function object
  - nfe
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - function object
  - functions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/GlobalSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Function Object | Frontend Phone Interview - JavaScript</title>
</head>

**Advanced Functions: Function object / NFE**

<CloseAllAnswers />

### In JavaScript, what type is a function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> All functions in JavaScript are objects. The concept of functions as callable "action objects" is an excellent approach to thinking about them. We can not only invoke them but also treat them as objects. The add/remove properties, pass by reference, and other implementations.
</div>
  </div>
</details>

---

### Can you explain why are functions Objects in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, functions are first-class objects because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions we call them. In brief, they are Function objects.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Functions are callable objects
function sayHi(myName) {
  console.log('Hi, ' + myName);
}

sayHi('JavaScript'); // Call sayHi() returns "Hi"

console.log(sayHi.name); // returns sayHi, using built-in name method.

console.log(sayHi.length); // length = 1, using build length method
```

  </div>
  </div>
</details>

---

### What kind of naming logic does JavaScript use for functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The function name-assigning logic in JavaScript is smart. It also assigns the correct name to a function even if it gets created without one. It also works if the assignment gets done via a default value. In the specification, this feature is called a "contextual name". If the function does not provide one, then it is figured out from the context of an assignment.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Regular Function
function sayHi() {
  alert('Hi');
}

alert(sayHi.name); // sayHi

// Anonymous Function Expression
let sayHi = function () {
  alert('Hi');
};

alert(sayHi.name); // sayHi (there's a name!)

// Named Function Expression
let sayHi = function saySomething() {
  console.log('Hi');
};

console.log(sayHi.name); // saySomething (there's a name!)

// Object methods have names too:
let user = {
  sayHi() {
    // method
    // ...
  },

  sayBye: function () {
    // method
    // ...
  },
};

alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye
```

:::note
You should not confuse this question with a question about how to name a function.
:::

  </div>
  </div>
</details>

---

### What does the function length property do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The function length property returns the number of function parameters (arguments). The function length property does not count rest parameters. The length property sometimes gets used for introspection in functions that operate on other functions.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2, rest parameter not counted
```

  </div>
  </div>
</details>

---

### Is a function property considered a variable in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, A property assigned to a function does not define as a local variable inside it. We can treat a function as an object and store properties in it, but that does not affect its execution, and variables are not properties and vice versa.
</div>
  </div>
</details>

---

### Can you explain what a named function expression is in JavaScript (NFE)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Named Function Expression, or NFE, is a term for function expressions with a name. The named function acts as a value of the allocated variable, isolating it from the assigned variable. You can call the named function inside the expression, but any attempts to call it outside the function result in an error.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func('Guest'); // use func to re-call itself
  }
};

sayHi(); // Hello, Guest

// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)
```

  </div>
  </div>
</details>

---

### What exactly is the purpose of a named function expression (NFE)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are times when a regular function expression does not meet our needs. A named function expression gives us access to the components of a function even if the reference gets nullified on the primary variable.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Named Function Expression
let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func('Guest'); // Now all fine
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (nested call works)

// Regular Function Declaration
function sayHi(name) {
  console.log('Hello, ' + name);
}

let welcome = sayHi;
sayHi = null;

welcome('JavaScript'); // Hello, JavaScript
```

:::note
You should note that a regular function declaration gets used to achieve the same result.
:::

  </div>
  </div>
</details>

---
