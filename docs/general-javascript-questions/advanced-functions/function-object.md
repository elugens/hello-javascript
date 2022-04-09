---
title: Function object / NFE
description: Function object / NFE is a very common interview question.
sidebar_position: 6
sidebar_label: Function object / NFE
---

**Advanced Functions: Function object / NFE**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### In JavaScript, what type is a function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, all functions are objects. A good way to imagine functions is as callable “action objects”. We can not only call them, but also treat them as objects. add/remove properties, pass by reference etc.
</div>
  </div>
</details>

---

### Explain, why are functions Objects in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are Function objects.
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
  <div><strong>Interview Response:</strong> The function name-assigning logic in JavaScript is smart. It also assigns the correct name to a function even if it is created without one. It also works if the assignment is done via a default value. In the specification, this feature is called a “contextual name”. If the function does not provide one, then in an assignment it is figured out from the context.
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
  <div><strong>Interview Response:</strong> The function length property returns the number of function parameters (arguments). The function length property does not count rest parameters. The length property is sometimes used for introspection in functions that operate on other functions.
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
  <div><strong>Interview Response:</strong> No, A property assigned to a function does not define as a local variable inside it. We can treat a function as an object, store properties in it, but that has no effect on its execution. Variables are not function properties and vice versa.
</div>
  </div>
</details>

---

### Explain, what a named function expression is in JavaScript (NFE)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Named Function Expression, or NFE, is a term for Function Expressions that have a name. The named function acts as a value of it is assigned variable. This isolates it to the variable it has been assigned to. You can call the named function inside of the expression, but any attempts to call it outside of the function itself will result in an error.
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

### What is the actual purpose of the named function expression (NFE)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are times when a regular function expression will not meet our needs. A named function expression gives us access to the components of a function even if the reference is nullified on the main variable.
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
It should be noted that a regular function declaration can also be used to achieve the same result.
:::

  </div>
  </div>
</details>

---
