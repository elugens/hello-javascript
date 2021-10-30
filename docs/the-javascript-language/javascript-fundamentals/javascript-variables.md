---
title: JS Variables
sidebar_position: 4
---

# JavaScript Variables

### What is the definition of a variable in JavaScript?

**Interview Answer:** A variable is a “named storage” for data. We can use variables to store values, visitor information, and other data.

Source: <https://javascript.info/variables#a-variable>

### What are the keywords used to declare a variable in JavaScript?

**Interview Answer:** let, const and the “old” var.

**Answer:** There are three variable declaration keywords used in JavaScript. They include let, const, and the “old var keyword”. In modern JavaScript, development let and const are recommended to optimize your application.

Source: <https://javascript.info/variables#a-variable>

### Can you declare multiple variables on one line?

**Interview Answer:** Yes, but it is not recommended, for the sake of readability and consistency.

Code Example:

```js
// Example: one-line

let user = 'John',
  age = 25,
  message = 'Hello';

// The multiline variant is a bit longer, but easier to read:

let user = 'John';

let age = 25;

let message = 'Hello';
```

Source: <https://javascript.info/variables#a-variable>

### Is there a way to copy stored data from one variable to another?

**Interview Answer:** Yes, declare two variables and copy data from one into the other. Better known as copy by reference.

Code Example:

```js
let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into the message

message = hello;

// now two variables hold the same data

alert(hello); // Hello world!
alert(message); // Hello world!
```

Source: <https://javascript.info/variables#a-real-life-analogy>

### Does JavaScript allow you to change the value of a variable?

**Interview Answer:** Yes, by declaring the variable equals the new value. A declaration of a const on a variable does not have this capability, because it’s a constant value.

Code Example:

```js
let message;

message = 'Hello!';

message = 'World!'; // value changed
console.log(message); // returns 'World!'
```

Source: <https://javascript.info/variables#a-real-life-analogy>

### Can you declare a variable twice in JavaScript?

**Interview Answer:** No, it will result in a syntax error.

Example:

```js
let message = 'This';

// repeated 'let' leads to an error

let message = 'That'; // SyntaxError: 'message' has already been declared
```

Source: <https://javascript.info/variables#a-real-life-analogy>

### What are the two limitations on variable names in JavaScript?

**Interview Answer:** The variable must contain only letters, digits, dollar sign, or an underscore. The first character must not be a digit.

**Technical Answer:**

There are two limitations on variable names in JavaScript.

1. The name must contain only letters, digits, or the symbols $ and \_.
1. The first character must not be a digit.

Examples of valid names:

```js
let userName;

let test123;
```

These names are also valid, but not recommended in the format below:

```js
let $ = 1; // declared a variable with the name "$"

let _ = 2; // and now a variable with the name "_"

alert($ + \_); // 3
```

Source: <https://javascript.info/variables#variable-naming>

### What stylization rule is used in naming multi-word variables?

**Interview Answer:** When the name contains multiple words, camelCase is commonly used.

Code Example:

```js
let myUserName;
```

Source: <https://javascript.info/variables#variable-naming>

### Does variable case matter in JavaScript?

**Interview Answer:** Yes, variables named **myUser** and **myuser** are two different variables, because variables in JavaScript are case-sensitive.

Example:

```js
let myUserName;
```

Source: <https://javascript.info/variables#variable-naming>

### Are Non-Latin letters allowed in naming variables?

**Interview Answer:** Yes, but it is not recommended.

**Technical Answer:** Yes, it is possible to use any language, including Cyrillic letters or even hieroglyphs, but it is not recommended.

Example: Technically, this can be achieved, but it is not recommended.

```js
let имя = '...';

let 我 = '...';
```

Source: <https://javascript.info/variables#variable-naming>

### Is it possible to declare a variable without let, const, or the “Old var”?

**Interview Answer:** Yes, it is possible outside of strict mode, but it is not recommended. It may be found in older applications.

Example: Technically, this can be achieved, but it is not recommended in modern JavaScript.

```js
// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist
alert(num); // 5
```

Source: <https://javascript.info/variables#variable-naming>

### What is the difference between var and let in JavaScript?

**Interview Answer:** The difference is that var is function scoped and let is block scoped. If it is used outside of a function, it is considered a global variable.

**Technical Answer:** JavaScript var and let are both used for variable declaration, but the difference between them is that var is function scoped and let is block scoped. It can be said that a variable declared with var is defined throughout the program as compared to let.

Source: <https://www.geeksforgeeks.org/difference-between-var-and-let-in-javascript/>

### Can you reassign a value in a variable declared with const?

**Interview Answer:** No, it will result in a syntax error because constants cannot be reassigned.

Code Example:

```js
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!
```

Source: <https://javascript.info/variables#constants>

### When should you use a constant as an alias in JavaScript?

**Interview Answer:** Aliases should be used for constant variable values that are hard to remember. They should use capital letters and underscores.

Code Example: Hexadecimal Colors

```js
const COLOR_RED = '#F00';

const COLOR_GREEN = '#0F0';

const COLOR_BLUE = '#00F';

const COLOR_ORANGE = '#FF7F00';

// ...when we need to pick a color

let color = COLOR_ORANGE;

alert(color); // #FF7F00
```

Source: <https://javascript.info/variables#constants>

### What are the benefits of using a constant as an alias?

**Interview Answer:** Aliases are easy to remember than numeric identifiers, like hexadecimal numbers.

Source: <https://javascript.info/variables#constants>

### When should we use capitals for a constant and when should we name it normally?

**Interview Answer:** Capital-named constants are only used as aliases for “hard-coded” values.

**Technical Answer:** When constants that are known before execution (like a hexadecimal value for red) and some constants are calculated in run-time, during the execution, but do not change after their initial assignment. In other words, capital-named constants are only used as aliases for “hard-coded” values.

Source: <https://javascript.info/variables#constants>

### What are some good rules when it comes to variable naming conventions?

**Interview Answer:** A variable name should have a clean, obvious meaning, describing the data that it stores, like currentUser or newUser. A variable name should always be camelCase and begin with a noun, unlike functions.

**Technical Answer:**

Some good-to-follow rules are:

1. Use human-readable names like userName or shoppingCart.
1. Stay away from abbreviations or short names like a, b, c, unless you know what you’re doing (Ninja Coder – not a good way to write code).
1. Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing. It is only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
1. Agree on terms within your team. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.
1. A variable name is always camelCase and should begin with a noun to differentiate variables from functions, which normally should begin with a verb.

Source: <https://javascript.info/variables#name-things-right>

### What differentiates variable and function naming conventions?

**Interview Answer:** A variable name is always camelCase and should begin with a noun to differentiate variables from functions, which normally should begin with a verb.

Source: <https://javascript.info/variables#constants>
