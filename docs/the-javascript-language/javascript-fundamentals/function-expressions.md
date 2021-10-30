---
title: Function Expressions
sidebar_position: 16
---

# JS Function Expressions - Q&A

**JavaScript Fundamentals: FUNCTION EXPRESSIONS**

### Is a function a function, object, or both?

**Interview Answer:** Both, In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In simple terms, they are Function objects.

Source: <https://javascript.info/function-basics>

### What is the difference between function declaration and function expression?

**Interview Answer:** Function declarations load immediately and function expressions load when the interpreter has passed them on the right side of the expression.

**Technical Answer:** Function declarations load before any code is executed while Function expressions load only when the interpreter passed the right side of the expression. A global Function Declaration is visible in the whole script, no matter where it is.

Function Declarations are functions, declared as a separate statement, in the main code flow.

Function Expressions are functions, created inside an expression or inside another syntax construct.

Example: Function Declaration

```js
sayHi('John'); // Hello, John
function sayHi(name) {
  alert(`Hello, ${name}`);
}
```

Example: Function Expression

```js
sayHi('John'); // error!
let sayHi = function (name) {
  // (*) no magic any more

  alert(`Hello, ${name}`);
};
```

Source: <https://javascript.info/function-expressions>

### What is hoisting and how does it affect function declarations?

**Interview Answer:** Hoisting is the default behavior of moving all hoist-able declarations to the top of the current scope.

**Technical Answer:** Hoisting refers to the availability of function declarations and variables (with var) “at the top” of your code, as opposed to only after they are created. The function objects are initialized at immediately and available everywhere in your code.

Source: <https://javascript.info/function-basics>

### What is the difference in use of a function declaration verses function expression?

**Interview Answer:** Function declarations are used to create a function in the global scope. A function expression is used to limit where function can be used, keep your global scope light, and maintain a clean syntax.

**Technical Answer:** You should use function declarations when you want to create a function on the global scope and make it available throughout your code. Use function expressions to limit where the function is available, keep your global scope light, and maintain clean syntax.

Source: <https://javascript.info/function-expressions>

### Describe a function expressions code structure and behavior?

**Interview Answer:** The function expression structure creates and assigns a variable to the function explicitly. A function name can be omitted making it an anonymous function. If a name is assigned, the name is localized to the function itself. The function expression can also assign parameters, if necessary. The expression body, like regular functions, encloses the actions that will be performed by the function.

Example:

```js
const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4)); // returns 12
```

Source: <https://javascript.info/function-expressions>

### Are functions values in JavaScript? If Yes, explain

**Interview Answer:** Yes, a function is a value, so we can deal with it as a value. You can copy a function by reference to create a new copy like you would with a regular variable and value.

Example:

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

Source: <https://javascript.info/function-expressions>

### Why is there a semicolon at the end of a function expression?

**Interview Answer:** The reason a function expression uses a semi-colon is that it is declared by assignment. All assignments must use a semi-colon to terminate the statement.

**Technical Answer:** A Function Expression is used inside a statement as a value. It is not a code block, but rather an assignment. The semicolon ( ; ) is recommended at the end of statements, no matter what the value is. So, the semicolon is not related to the Function Expression itself, it just terminates the statement.

Note: There’s no need for a semicolon ( ; ) at the end of code blocks and syntax structures that use them like if { ... }, for { }, function f { } etc.

Example:

```js
let sayHi = function () {
  // ...
}; // <-- semicolon here closes out the statement.
```

Source: <https://javascript.info/function-expressions>

### What is a callback function in JavaScript?

**Interview Answer:** A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete a routine or action.

Example:

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

Source: <https://javascript.info/function-expressions#callback-functions>

### Can a function declaration be isolated or moved out of the global scope? Is a function expression a better way to handle the needed action or behavior?

**Answer:** Yes, in strict mode, when a Function Declaration is within a code block, it is visible everywhere inside that block. But not outside of it. CAUTION: This can lead to erroneous outcomes.

A function expression is a better alternative to implement code in this fashion, because a function expression can be initialized and invoked in the global scope regardless of where the function statement is located. A function declaration does not have the benefit of that feature.

Example: Erroneous Use

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

Source: <https://javascript.info/function-expressions#function-expression-vs-function-declaration>

### Can a function declaration be called earlier than it is defined?

**Technical Answer:** Yes, a global Function Declaration is visible in the whole script, no matter where it is. As soon as it is initialized, it is available.

**Technical Answer:** Yes, a global Function Declaration is visible in the whole script, no matter where it is. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”. And after all Function Declarations are processed, the code is executed. So, it has access to these functions. Function expressions do not have this capability and it is an important factor when choosing between the two.

Example: Function Declaration, it works…

```js
sayHi("John"); // Function invoked before it is defined: returns Hello, John.

function sayHi(name) {

alert( `Hello, ${name}` );

}

Example: Function Expression, ah man we broke it…

sayHi("John"); // error: we called it too early.

let sayHi = function(name) {  // no magic any more

alert( `Hello, ${name}` );

};
```

Source: <https://javascript.info/function-expressions#function-expression-vs-function-declaration>

### When is the best time to use Function Declaration vs a Function Expression?

**Interview Answer:** We should consider is Function Declaration syntax first. It gives more freedom in how to organize our code and we can call it when it is initialized. A function expression should be used when a function declaration does not suit our needs, or we need conditional declaration.

**Technical Answer:** As a rule of thumb, when we need to declare a function, the first to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.

…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration, then Function Expression should be used.

Source: <https://javascript.info/function-expressions#function-expression-vs-function-declaration>
