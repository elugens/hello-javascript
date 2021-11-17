---
title: Function Expressions
sidebar_position: 16
---

# Function Expressions

**JavaScript Fundamentals: Function Expressions**

<head>
  <title>Function Expressions - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Is a function a function, object, or both?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Both, In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In simple terms, they are Function objects.
</div>
  </div>
</details>

---

### What is the difference between function declaration and function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Function declarations load immediately and function expressions load when the interpreter has passed them on the right side of the expression.</div><br />
  <div><strong>Technical Response:</strong> Function declarations load before any code is executed while Function expressions load only when the interpreter passed the right side of the expression. A global Function Declaration is visible in the whole script, no matter where it is.<br /><br />
  Function Declarations are functions, declared as a separate statement, in the main code flow.<br /><br />
  Function Expressions are functions, created inside an expression or inside another syntax construct.
  </div>
  </div>
</details>

Code Example: Function Declaration

```js
sayHi('John'); // Hello, John
function sayHi(name) {
  alert(`Hello, ${name}`);
}
```

Code Example: Function Expression

```js
sayHi('John'); // error!
let sayHi = function (name) {
  // (*) no magic any more

  alert(`Hello, ${name}`);
};
```

---

### What is hoisting and how does it affect function declarations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Hoisting is the default behavior of moving all hoist-able declarations to the top of the current scope.</div><br />
  <div><strong>Technical Response:</strong> Hoisting refers to the availability of function declarations and variables (with var) “at the top” of your code, as opposed to only after they are created. The function objects are initialized at immediately and available everywhere in your code.
  </div>
  </div>
</details>

---

### What is the difference in use of a function declaration verses function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Function declarations are used to create a function in the global scope. A function expression is used to limit where function can be used, keep your global scope light, and maintain a clean syntax.</div><br />
  <div><strong>Technical Response:</strong> You should use function declarations when you want to create a function on the global scope and make it available throughout your code. Use function expressions to limit where the function is available, keep your global scope light, and maintain clean syntax.
  </div>
  </div>
</details>

---

### Describe a function expressions code structure and behavior?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The function expression structure creates and assigns a variable to the function explicitly. A function name can be omitted making it an anonymous function. If a name is assigned, the name is localized to the function itself. The function expression can also assign parameters, if necessary. The expression body, like regular functions, encloses the actions that will be performed by the function.
</div>
  </div>
</details>

Code Example: Function Expression

```js
const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4)); // returns 12
```

---

### Are functions values in JavaScript? If Yes, explain

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a function is a value, so we can deal with it as a value. You can copy a function by reference to create a new copy like you would with a regular variable and value.
</div>
  </div>
</details>

Code Example: Function Value

```js
function sayHi() {
  // (1) create
  alert('Hello');
}

let func = sayHi; // (2) copy
func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello  ...this still works too (why wouldn't it)

// This will work for every function that is considered a value
```

---

### Why is there a semicolon at the end of a function expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The reason a function expression uses a semi-colon is that it is declared by assignment. All assignments must use a semi-colon to terminate the statement.</div><br />
  <div><strong>Technical Response:</strong> A Function Expression is used inside a statement as a value. It is not a code block, but rather an assignment. The semicolon ( ; ) is recommended at the end of statements, no matter what the value is. So, the semicolon is not related to the Function Expression itself, it just terminates the statement.
  </div>
  </div>
</details>

:::note

Note: There’s no need for a semicolon ( ; ) at the end of code blocks and syntax structures that use them like if { ... }, for { }, function f { } etc.

:::

Example:

```js
let sayHi = function () {
  // ...
}; // <-- semicolon here closes out the statement.
```

---

### What is a callback function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete a routine or action.
</div>
  </div>
</details>

Code Example: Callback Function

```js
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');

  callback(name);
}

processUserInput(greeting); // function is calling the greeting.
```

---

### Can a function declaration be isolated or moved out of the global scope? Is a function expression a better way to handle the needed action or behavior?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, in strict mode, when a Function Declaration is within a code block, it is visible everywhere inside that block. But not outside of it. CAUTION: This can lead to erroneous outcomes.<br /><br /> 
  A function expression is a better alternative to implement code in this fashion, because a function expression can be initialized and invoked in the global scope regardless of where the function statement is located. A function declaration does not have the benefit of that feature.
</div>
  </div>
</details>

Code Example: Erroneous Function Declaration

```js
let age = prompt("What is your age?", 18);

// conditionally declare a function

if (age < 18) {

function welcome() {

  alert("Hello!");

}

} else {

function welcome() {

  alert("Greetings!");

}

}

// ...use it later

welcome(); // Error: welcome is not defined

Example: Proper Implementation

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

welcome = function() {

  alert("Hello!");

};

} else {

welcome = function() {

  alert("Greetings!");

};

}

welcome(); // ok now
```

---

### Can a function declaration be called earlier than it is defined?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a global Function Declaration is visible in the whole script, no matter where it is. As soon as it is initialized, it is available.</div><br />
  <div><strong>Technical Response:</strong>  Yes, a global Function Declaration is visible in the whole script, no matter where it is. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”. And after all Function Declarations are processed, the code is executed. So, it has access to these functions. Function expressions do not have this capability and it is an important factor when choosing between the two.
  </div>
  </div>
</details>

Code Example: Function Declaration, it works…

```js
sayHi('John'); // Function invoked before it is defined: returns Hello, John.
function sayHi(name) {
  alert(`Hello, ${name}`);
}
```

Code Example: Function Expression, ah man we broke it…

```js
sayHi('John'); // error: we called it too early.
let sayHi = function (name) {
  // no magic any more

  alert(`Hello, ${name}`);
};
```

---

### When is the best time to use Function Declaration vs a Function Expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should consider is Function Declaration syntax first. It gives more freedom in how to organize our code and we can call it when it is initialized. A function expression should be used when a function declaration does not suit our needs, or we need conditional declaration.</div><br />
  <div><strong>Technical Response:</strong>  As a rule of thumb, when we need to declare a function, the first to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.<br /><br />

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.<br /><br />

…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration, then Function Expression should be used.

  </div>
  </div>
</details>

---
