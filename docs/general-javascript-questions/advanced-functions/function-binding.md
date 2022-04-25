---
title: Function Binding
description: Function Binding is a very common interview question. Binding is a process in which a function is bound to a value.
sidebar_position: 10
sidebar_label: Function Binding
---

**Advanced Functions: Function Binding**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### Explain the three types of binding techniques in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, there are three types of binding techniques Window, Implicit, and Explicit function binding.
</div>
  </div>
</details>

---

### Explain what explicit function binding is in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Window, Implicit, and Explicit function binding are JavaScript's three types of binding strategies. Explicit binding compels a function call to bind to a specific context object by utilizing call, apply, or bind. These predefined JavaScript methods get passed down to all functions via the function prototype. Functions have a method bind that allows us to fix "this." Binding is the ideal option for tying the context to the correct object and preventing "this" from being lost.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  firstName: 'John',
};

function func() {
  console.log(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the function bind() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The bind method generates a new function that, when called, sets the "this" keyword to the provided value, with a specified sequence of arguments preceding any arguments provided when the new function gets invoked. Bind creates a new function that may be called later in the code while keeping the desired context binding.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]]);<br /><br />

  <div></div>

```js
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```

:::note
This is useful for passing functions into other functions, like setTimeout(), which later invokes and won't necessarily bind the invoked function to the correct object without being coerced. The first parameter is the context object, and all other parameters are individually listed, like the call method.
:::

  </div>
  </div>
</details>

---

### Can you explain what a partial function application is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A partial function application in JavaScript refers to the process of fixing several arguments to a function and, in the process producing another function of smaller arity.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function mul(a, b) {
  return a * b;
}

let triple = mul.bind(null, 3);

alert(triple(3)); // = mul(3, 3) = 9
alert(triple(4)); // = mul(3, 4) = 12
alert(triple(5)); // = mul(3, 5) = 15
```

  </div>
  </div>
</details>

---
