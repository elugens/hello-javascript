---
title: Functions
sidebar_position: 15
---

# JavaScript Functions

**JavaScript Fundamentals: JavaScript Functions**

<head>
  <title>JavaScript Functions - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What are the SEVEN types of functions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The seven types of functions include the function declaration, function expression, arrow function, shorthand methods, generators, constructor functions, and JS built-in methods.
</div>
  </div>
</details>

Code Examples:

```js
// 1. Function Declaration
function timesSelf(x) {
  return x * x;
}

console.log(timesSelf(5));

// expected output: 25

// 2. Function Expression
const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));

// expected output: 12

// 3. Arrow Function
const helloUser = (name) => 'Hello, ' + name;

console.log(helloUser('JavaScript'));

// expected output: Hello, JavaScript

// 4. Shorthand Methods - Function
const fruits = {
  items: [],

  add(...items) {
    this.items.push(...items);
  },

  get(index) {
    return this.items[index];
  },
};

fruits.add('mango', 'banana', 'guava'); // shortand method function
fruits.get(1); // banana

// 5. Generator - Function
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"
console.log(gen.next().value); // 1
console.log(generator().next().value); // 1
console.log(generator().next().value); // 1
```

---

### What is the definition of a JavaScript Function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A JavaScript function is a callable block of code designed to perform a particular task.</div><br />
  <div><strong>Technical Response:</strong> Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure — a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
function square(x) {
  return x * x;
}

square(10); // returns 100
```

---

### Describe the basic structure of a JavaScript function declaration?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A function declaration starts first with declaring the function keyword, then the function name, followed by a list of parameters between paratheses (comma-separated, or no parameters are okay) and finally the function body (code) inside of the curly brackets.
</div>
  </div>
</details>

Code Example:

```js
function name(parameters) {
    ...body...
}
```

---

### What is one of the main purposes of JavaScript functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main purpose of JS functions is to avoid code duplication.</div><br />
  <div><strong>Technical Response:</strong> The main purpose of functions is to avoid code duplication. If we ever need to change the message or the way it is shown, it is enough to modify the code in one place based on the function which outputs it.<br /><br />
  </div>
  </div>
</details>

Example:

```js
function showMessage(name) {
  alert('Hello, ' + name);
}

showMessage('John'); // John
showMessage('Jane'); // Jane
```

---

### Is there a limitation on variables declared inside a function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, they are only visible within the scope of the function and cannot be accessed from outside it.
</div>
  </div>
</details>

Code Example:

```js
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable
  alert(message);
}

showMessage(); // Hello, I'm JavaScript!
alert(message); //<-- Error! The variable is local to the function.
```

---

### Can functions access variables outside the function body?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Functions can access top level variables, variables inside of the function, and variables inside of a function that they are being called.</div><br />
  <div><strong>Technical Response:</strong> Global or variables outside of are accessible by functions because it is within its lexical scope. The function can also modify it as well. Functions also can access variables inside a function or the scope they are called.<br /><br />
  </div>
  </div>
</details>

Example:

```js
let userName = 'John';

function showMessage() {
  userName = 'Bob'; // (1) changed the outer variable
  let message = 'Hello, ' + userName;
  alert(message);
}

alert(userName); // John before the function call
showMessage(); // Hello, Bob modified through invocation

alert(userName); // Bob, the value was modified by the function
```

---

### What is a Global variable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Variables declared outside of any function or code block are called global. Global variables are visible from any function (unless shadowed by locals).
</div>
  </div>
</details>

---

### What is the Modern JavaScript rule for using Global Variables?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It is a good practice to minimize the use of global variables. Modern code has few or no global variables.</div><br />
  <div><strong>Technical Response:</strong> It is a good practice to minimize the use of global variables. Modern code has few or no global variables. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.<br /><br />
  </div>
  </div>
</details>

---

### Explain, how a parameter is used in functions.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Parameters (function arguments) are used to pass arbitrary data to functions.
</div>
  </div>
</details>

Example:

```js
function showMessage(from, text) {
  // arguments: from, text

  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (\*)
showMessage('Ann', "What's up?"); // Ann: What's up? (\*\*)
```

---

### What happens when a function parameter is not provided?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a parameter (function argument) and it has no default. The value becomes undefined.
</div>
  </div>
</details>

Example:

```js
function showMessage(from, text) {
  // arguments: from, text
  alert(from + ': ' + text);
}

showMessage('Ann'); // "Ann: undefined"
```

---

### How is a default function parameter evaluated in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.
</div>
  </div>
</details>

Code Example:

```js
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
```

---

### Is there a way to check for an omitted function parameter and return a new value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use a conditional statement using the strict equality or logical OR to check for the omitted parameter.</div><br />
  <div><strong>Technical Response:</strong> Yes, you can run a conditional statement or check in the function body. The most common way to do this is a conditional if statement or by simply using the logical || OR operator. Modern JavaScript engines support the nullish coalescing operator ??, it’s better when falsie values, such as 0, are considered regular.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
function showMessage(text) {

if (text === undefined) {
    text = 'empty message';
}

alert(text);
}

showMessage(); // empty message

// Or we could use the || operator

// if text parameter is omitted or "" is passed, set it to 'empty'

function showMessage(text) {

text = text || 'empty';

...

}
```

---

### Can you implement multiple occurrences of the return statement in a single function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use a conditional statement to handle multiple return statements, but this is not the recommended approach.</div><br />
  <div><strong>Technical Response:</strong> Yes, you can implement multiple occurrences of the return statement in a single function. There are better ways to implement code without multiple return statements, because it can reduce application performance.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
  alert('Access granted');
} else {
  alert('Access denied');
}
```

---

### Is it possible to use a return statement without a value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use a return statement without a value. It is called an empty return statement. An empty return statement will exit a program and return undefined in the place it is called.
</div>
  </div>
</details>

Code Example:

```js
function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert('Showing you the movie'); // (*)

  // ...
}
```

---

### What does a return statement with an empty value output?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A function with an empty return or without it returns undefined.
</div>
  </div>
</details>

Code Example:

```js
function doNothing() {
  /* empty */
}

alert(doNothing() === undefined); // true
// An empty return is also the same as return undefined:

function doNothing() {
  return;
}

alert(doNothing() === undefined); // true
```

---

### Caution should be used when using the return statement. What is the most important thing to remember when using a return statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most important thing to remember when using the return statement is add a semi-colon and never add a newline between return and the value.</div><br />
  <div><strong>Technical Response:</strong> The most important thing to remember when using the return statement is add a semi-colon and never add a newline between return and the value.<br /><br />
  </div>
  </div>
</details>

:::tip Hint:

If you want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses.

:::

Code Example:

```js
return some + long + expression + or + whatever * f(a) + f(b);
```

---

### What are good naming practices for function names?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Functions should start with a verb as an action word as prefix. For example, a function that returns a user’s name should use “getUserName()” as the function name.</div><br />
  <div><strong>Technical Response:</strong> It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes. For example, functions that get something usually start with get like “getUserName()”.
  </div><br />
  <div> It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.
  </div>
  </div>
</details>

Code Example:

```js
showMessage(..)     // shows a message

getAge(..)          // returns the age (gets it somehow)

calcSum(..)         // calculates a sum and returns the result

createForm(..)      // creates a form (and usually returns it)

checkPermission(..) // checks a permission, returns true/false
```

---

### What are best practices for the creation of a function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A function should do exactly what is suggested by its name, no more. Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).
</div>
  </div>
</details>

---

### Should there be a separation of the concerns in functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it is particularly important to make every effort to apply separate actions in each function. Sometimes following this rule may not be that easy, but it is a good thing.
</div>
  </div>
</details>

Code Example: Show Prime Numbers using a label (No Separation)

```js
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i); // a prime
  }
}
```

Code Example: Show Prime Numbers (Separation of Concerns using separate functions)

```js
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}
```

---
