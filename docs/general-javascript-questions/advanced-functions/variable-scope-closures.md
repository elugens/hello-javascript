---
title: Variable Scope / Closures
description: Variable Scope / Closures is a very common interview question.
sidebar_position: 3
sidebar_label: Variable Scope / Closures
---

**Advanced Functions: Variable Scope / Closures**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What are the three types of variable declarations in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are three types of variable declarations in JavaScript, including let, const, and the var legacy variable.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Declaration<br /><br />

  <div></div>

```js
let arr = [1, 2, 3];

const str = 'Hello';

var num = 1;
```

  </div>
  </div>
</details>

---

### What is a code block or block statement (compound statement) in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A block statement or compound statement gets used to group zero or more statements encapsulated in curly brackets.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Code Block<br /><br />

  <div></div>

```js
// do some job with local variables that should not be seen outside
{
  let message = 'Hello'; // only visible in this block

  alert(message); // Hello
}

alert(message); // Error: message is not defined

// We can use this to isolate a piece of code
{
  // show message
  let message = 'Hello';
  alert(message); // returns Hello
}

{
  // show another message
  let message = 'Goodbye';
  alert(message); // returns Goodbye
}
```

  </div>
  </div>
</details>

---

### What are the benefits of a JavaScript code block or block statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main benefit is isolating a portion of your code, which improves control and reduces errors in your application.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> No code block control results in an error<br /><br />

  <div></div>

```js
// show message
let message = 'Hello';
alert(message);

// show another message
let message = 'Goodbye'; // Error: variable already declared
alert(message);
```

  </div>
  </div>
</details>

---

### Does JavaScript support nested functions? How do they work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, nested functions have interesting scoping rules in JavaScript. A nested function can access any variables and parameters of their outer parent function(s). This behavior allows us to give the parent function additional dynamic features.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function sayHiBye(firstName, lastName) {
  // helper nested function to use below
  function getFullName() {
    return firstName + ' ' + lastName;
  }

  alert('Hello, ' + getFullName());
  alert('Bye, ' + getFullName());
}
```

:::note

Nested functions are pretty standard in JavaScript because of their dynamic abilities, which allow an extension of the originating function.

:::

  </div>
  </div>
</details>

---

### Explain what the Lexical Environment is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Lexical Environment is a theoretical specification object, and it gets used to describe how things work. The Lexical Environment object consists of two parts, including the environment record and a reference to the outer lexical environment.</div><br />
  <div><strong>Technical Response:</strong> "Lexical Environment" is a specification object: it only exists "theoretically" in the language specification to describe how things work. We cannot get this object in our code and manipulate it directly. JavaScript engines may also optimize it, discard unused variables to save memory, and perform other internal tricks if the visible behavior remains as described. The Lexical Environment object consists of two parts, including the environment record and a reference to the outer lexical environment. The Environment Record is an object that stores local variables as its properties (and some other information like the value of this).
  </div><br/><br/>

:::note

The Environment Record is an object that stores all local variables as its properties and some other information like the value of this.

:::

  </div>
</details>

---

### Explain, How a variable works in the context of a JavaScript engine?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A variable is just a property of the special internal object called the Environment Record. To get or change a variable means to get or change a property of that object.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let word = 'Hello';
// Lexical Environment Record --> property = word: "Hello"; outer --> null

// ENGINE EXECUTION

// execution start --> word: <uninitialized> - outer --> null
let word; // word: undefined
word = 'Hello'; // word: "Hello"
```

  </div>
  </div>
</details>

---

### What is the distinction between a function declaration and a variable declaration?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A function is also a value, like a variable. The difference is that a Function Declaration is fully initialized when the script loads. When a Lexical Environment gets created, a Function Declaration immediately becomes a ready-to-use function.
</div><br />

:::note
You should be aware that this only applies to function declarations, not function expressions.
:::

  </div>
</details>

---

### In JavaScript, what is a closure?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A closure is a function that remembers its outer variables and can access them. In JavaScript, all functions are naturally Closures (there is only one exception, The "new Function" syntax). Functions automatically remember where they get created using a hidden [[Environment]] property, and then their code can access outer variables.</div><br />
  <div><strong>Technical Response:</strong> A closure is a function that remembers its outer variables and can access them. In some languages, that is impossible, or a function should get written in a special way to make it happen. In JavaScript, all functions are naturally Closures (there is only one exception, The "new Function" syntax). Functions automatically remember where they get created using a hidden [[Environment]] property, and then their code can access outer variables.
  </div><br />

:::note
This should not be confused with a code block.
:::

  </div>
</details>

---

### How does garbage collection work with the Lexical Environment and nested functions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Usually, a Lexical Environment is removed from memory with all the variables after the function call finishes. That is because there are no references to it. As with any JavaScript object, it is only kept in memory while it is reachable. A Lexical Environment object dies when it becomes unreachable (like any other object). In other words, it exists while there is at least one nested function referencing it.</div><br />
  <div><strong>Technical Response:</strong> After the function call completes, a Lexical Environment typically gets erased from memory and all variables. This behavior is because there are no references to it, and it is only retained in memory while it is accessible, just like any other JavaScript object. If a nested function gets reached after the end of a function, it contains the [[Environment]] attribute, which refers to the lexical environment. In such a situation, the Lexical Environment is still available even after the function gets completed, therefore, it remains alive. When a Lexical Environment object becomes inaccessible, it dies (like any other object). In other words, it persists as long as there is at least one nested function that refers to it.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function f() {
  let value = 123;

  return function () {
    alert(value);
  };
}

let g = f(); // g.[[Environment]] stores a reference to the Lexical Environment
// of the corresponding f() call

function f() {
  let value = 123;

  return function () {
    alert(value);
  };
}

let g = f(); // while g function exists, the value stays in memory

g = null; // ...and now the memory is cleaned up
```

  </div>
  </div>
</details>

---
