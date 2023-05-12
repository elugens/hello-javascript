---
title: Function Expressions - JavaScript Questions
description: Function expressions are a way to create a function on the fly. Describe a function expression’s code structure and behavior? Frontend Interview Questions
sidebar_position: 18
sidebar_label: Function Expressions
keywords:
  - function expression
  - function expressions
  - function declarations
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - dynamic function
  - interview questions
  - interview answers
  - js
tags:
  - function expression
  - function expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FuncExpressionSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Function Expressions | JavaScript Frontend Phone Interview</title>
</head>

**JavaScript Fundamentals: Function Expressions**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/H5OSgbtqwWU"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### Can a function be classified as a function, an object, or both?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a function is both a function and an object. It can be called and passed around like any other object.
</div>
<div><strong>Technical Response:</strong> In JavaScript, functions are first-class objects because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions get called. In simple terms, they are Function objects.
</div>
  </div>
</details>

---

### What is the purpose of using a function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A function expression is used to assign a function to a variable, allowing for encapsulation and reuse of the function.
</div>
  </div>
</details>

---

### How do you declare a named function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To declare a named function expression in JavaScript, assign a function to a variable using the function keyword followed by a name.
</div>
  </div>
</details>

---

### How do you declare an anonymous function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can declare an anonymous function expression by assigning a function to a variable without giving the function a name.

</div>
  </div>
</details>

---

### What distinguishes using a function declaration from a function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A function declaration is a statement that declares a function in the current scope, while a function expression defines a function as a value assigned to a variable or property.</div><br />
  <div><strong>Technical Response:</strong> Function declarations load before any code executes, while Function expressions load only when the interpreter passes the right side of the expression. A global Function Declaration is visible in the whole script, no matter where.<br /><br />
  Function Declarations are functions declared as a separate statement in the main code flow.<br /><br />
  Function Expressions are functions created inside an expression or another syntax construct.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Function Declaration<br /><br />

  <div></div>

```js
sayHi('John'); // Hello, John

function sayHi(name) {
  alert(`Hello, ${name}`);
}
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Function Expression<br /><br />

  <div></div>

```js
sayHi('John'); // error!

let sayHi = function (name) {
  // (*) no magic any more
  alert(`Hello, ${name}`);
};
```

  </div>
  </div>
</details>

---

### How do function declarations and function expressions differ in terms of page loading behavior in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Function declarations are loaded before any code is executed, while function expressions are only loaded when their defining line is reached.</div><br/>
  </div>
</details>

---

### What is hoisting, and how does it affect function declarations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Hoisting is the default behavior of moving all hoist-able declarations to the top of the current scope.</div><br />
  <div><strong>Technical Response:</strong> Hoisting refers to the availability of function declarations and variables (with var) “at the top” of your code instead of only after they get created. The function objects are initialized immediately and available everywhere in your code.
  </div>
  </div>
</details>

---

### What is the difference between using a function declaration versus a function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use function declarations to create a function in the global scope. A function expression limits where a function gets used, keeps your global scope light, and maintains a clean syntax.</div><br />
  <div><strong>Technical Response:</strong> You should use function declarations when you want to create a function on the global scope and make it available throughout your code. Use function expressions to limit where the function is available, keep your global scope light, and maintain clean syntax.
  </div>
  </div>
</details>

---

### What is the difference between a named and anonymous function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Named function expressions have identifiers, providing benefits like recursion and improved debugging through clear naming. Anonymous function expressions lack names, offering shorter, self-contained code and preventing unintended name conflicts in the scope.
  </div>
  </div>
</details>

---

### Describe a function expression’s code structure and behavior?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Function expressions are anonymous or named functions assigned to variables. They accept parameters, execute code within a body, and are invoked upon calling the variable. They also enable modularity and support functional programming paradigms.
</div><br />
  <div><strong>Technical Response:</strong> The function expression structure explicitly creates and assigns a variable to the function. A function name can get omitted, making it an anonymous function. If a name is assigned, the name gets localized to the function. The function expression can also assign parameters, if necessary. The expression body, like regular functions, encloses the actions that the function performs.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Function Expression<br /><br />

  <div></div>

```js
const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4)); // returns 12
```

  </div>
  </div>
</details>

---

### Are functions values in JavaScript? If yes, can you explain?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, functions can be considered or termed as values in JavaScript, because they can be assigned to variables, passed as arguments, and returned from other functions.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function sayHi() {
  // (1) create
  alert('Hello');
}

let func = sayHi; // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //  <- this still works too (why wouldn't it)

// This will work for every function that is considered a value
```

  </div>
  </div>
</details>

---

### Why is there a semicolon at the end of a function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A function expression uses a semi-colon because we declare it by assignment, and all assignments must use a semi-colon to terminate the statement.</div><br />
  <div><strong>Technical Response:</strong> A Function Expression gets used inside a statement as a value, and it is not a code block but rather an assignment. The semicolon ( ; ) is recommended at the end of statements, no matter what the value is. So, the semicolon is not related to the Function Expression itself, and it just terminates the statement.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let sayHi = function () {
  // ...
}; // <-- semicolon here closes out the statement.
```

:::note
There’s no need for a semicolon ( ; ) at the end of code blocks and syntax structures that use them like if { ... }, for { }, function f { } etc.
:::

  </div>
  </div>
</details>

---

### What is a callback function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A callback function gets passed into another function as an argument; it gets invoked inside the outer function to complete a routine or action.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Callback Function<br /><br />

  <div></div>

```js
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting); // function is calling the greeting.
```

  </div>
  </div>
</details>

---

### Can a function declaration be removed from the global scope, or would a function expression be better suited for managing the intended tasks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Function declarations cannot be isolated from the global scope by default. However, using function expressions within an Immediately Invoked Function Expression (IIFE), a module, or inside block-scoped constructs provides better encapsulation, scope control, and prevents global scope pollution, offering a more suitable approach.
</div><br />
  <div><strong>Technical Response:</strong> Yes, in strict mode, when a Function Declaration is within a code block, it is visible everywhere inside that block. But not outside of it. CAUTION: This can lead to erroneous outcomes.<br /><br />
  A function expression is a better alternative to implementing code in this fashion because a function expression can be initialized and invoked in the global scope regardless of where the function statement resides. A function declaration does not have the benefit of that feature.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Erroneous Use<br /><br />

  <div></div>

```js
let age = prompt('What is your age?', 18);

// conditionally declare a function
if (age < 18) {
  function welcome() {
    alert('Hello!');
  }
} else {
  function welcome() {
    alert('Greetings!');
  }
}

// ...use it later
welcome(); // Error: welcome is not defined
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Proper Implementation<br /><br />

  <div></div>

```js
let age = prompt('What is your age?', 18);

let welcome;

if (age < 18) {
  welcome = function () {
    alert('Hello!');
  };
} else {
  welcome = function () {
    alert('Greetings!');
  };
}

welcome(); // ok now
```

  </div>
  </div>
</details>

---

### Can a function declaration be called earlier than it is defined?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a global Function Declaration is visible in the whole script, no matter where it is. As soon as it initializes, it is available.</div><br />
  <div><strong>Technical Response:</strong> Yes, a global Function Declaration is visible in the whole script, no matter where it is. When JavaScript prepares to run the script, it first looks for global Function Declarations and creates the functions. We can think of it as an “initialization stage”. And after all Function Declarations are processed, the code is executed. So, it has access to these functions. Function expressions do not have this capability, which is an important factor when choosing between the two.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Function Declaration, it works…<br /><br />

  <div></div>

```js
sayHi('John'); // Function invoked before it is defined: returns Hello, John.

function sayHi(name) {
  alert(`Hello, ${name}`);
}
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Function Expression, ah man we broke it…<br /><br />

  <div></div>

```js
sayHi('John'); // error: we called it too early.

let sayHi = function (name) {
  // no magic any more
  alert(`Hello, ${name}`);
};
```

  </div>
  </div>
</details>

---

### Can you call a function expression before it is defined?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, you cannot call a function expression before it's defined, as they are not hoisted like function declarations, resulting in a reference error if attempted.</div><br/>
  </div>
</details>

---

### When should you use a Function Declaration vs. a Function Expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should consider a function declaration syntax first because it gives us more freedom in organizing our code, and we can call it when it initializes. We use a function expression when a function declaration does not suit our needs or for encapsulation.</div><br />
  <div><strong>Technical Response:</strong> When we need to declare a function, the first thing to examine is the Function Declaration syntax. It allows us to structure our code more freely because we may call such functions before they are declared.<br /><br />
That's also better for readability because function f(...); is more straightforward to find in the code than let f = function(...);. Function declarations are more visually appealing.<br /><br />
...However, if a Function Declaration is not appropriate for whatever reason, or if a conditional declaration is required, a Function Expression should be utilized.

  </div>
  </div>
</details>

---

### Can you pass a function expression as an argument to another function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can pass a function expression as an argument to another function, enabling higher-order functions and promoting functional programming concepts such as callbacks and event handling.</div><br/>
  </div>
</details>

---

### What is the scope of a function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The scope of a function expression is determined by where it is defined, which can be in the global scope or inside another function.
</div><br/>
  </div>
</details>

---

### What is the scope of a function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The scope of a function expression is determined by where it is defined, which can be in the global scope or inside another function.
</div><br/>
  </div>
</details>

---

### How do you create a self-invoking function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can create a self-invoking function expression by wrapping a function expression in parentheses and immediately invoking it. Using self-invoking function expressions, also known as Immediately Invoked Function Expressions (IIFE), is a common approach for creating isolated scopes, preventing global scope pollution, and executing one-time setup tasks.
</div><br/>
  </div>
</details>

---

### What is the value of the 'this' keyword inside a function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The value of the 'this' keyword inside a function expression depends on how the function is called. If the function is called as a method of an object, 'this' refers to the object. Otherwise, 'this' refers to the global object or undefined, it all depends on the mode the function is being called.
</div><br/>
  </div>
</details>

---
