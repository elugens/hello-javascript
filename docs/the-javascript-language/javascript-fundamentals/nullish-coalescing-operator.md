---
title: Nullish Coalescing Operator
sidebar_position: 12
---

# Nullish coalescing operator '??' - Q&A

**JavaScript Fundamentals: NULLISH COALESCING OPERATOR (??)**

### Explain how the nullish coalescing operator works.

**Interview Answer:** The nullish coalescing operator returns the first argument if it is not null or undefined. Otherwise, the second one.

**Technical Answer:** In simple terms, the ?? returns the first argument if it is not null/undefined. Otherwise, the second one.

Example: The nullish coalescing operator is written as two question marks (??).

The result of a ?? b is:

- if a is defined, then a,
- if a is not defined, then b.

Code Example:

```js
const foo = null ?? 'default string';

console.log(foo);

// expected output: "default string"

const baz = 0 ?? 42;

console.log(baz);

// expected output: 0
```

Source: <https://javascript.info/nullish-coalescing-operator>

### Is there another way to achieve the same results as the nullish coalescing operator?

**Interview Answer:** The not equals operator checks the first value to see if it is null or undefined if it is null or undefined it returns the second value.

**Technical Answer:** Yes, you can use the NOT ! equal operator to check to see if the first value is not equal to null or undefined else return the second value.

Code Example:

```js
// We can rewrite result = a ?? b using the NOT equal (!==) operator.

result = a !== null && a !== undefined ? a : b;
```

Source: <https://javascript.info/nullish-coalescing-operator>

### What is a common use case for nullish coalescing operator?

**Interview Answer:** A common use case for the nullish coalescing operator is to provide a default value for a potentially undefined variable.

Example:

```js
// here we show Anonymous if user is not defined

let user;

alert(user ?? 'Anonymous'); // Anonymous

// if the user has any value except null or undefined

let user = 'John';

alert(user ?? 'Anonymous'); // John
```

Source: <https://javascript.info/nullish-coalescing-operator>

### Can you use a chain or sequence of nullish coalescing operators?

**Interview Answer:** Yes, we can use a sequence of nullish coalescing operator to select the first value from a list that is not null or undefined.

Example:

```js
let firstName = null;

let lastName = null;

let nickName = 'Supercoder';

// shows the first defined value:

alert(firstName ?? lastName ?? nickName ?? 'Anonymous'); // Supercoder
```

Source: <https://javascript.info/nullish-coalescing-operator>

### Is there another operator that can be used to perform the same task as the nullish coalescing operator?

**Interview Answer:** The OR operator can be used in the same way as nullish coalescing operator.

Example:

```js
let firstName = null;

let lastName = null;

let nickName = 'Supercoder';

// shows the first truthy value:

alert(firstName || lastName || nickName || 'Anonymous'); // Supercoder
```

Source: <https://javascript.info/nullish-coalescing-operator#comparison-with>

### What is the main difference between the Nullish Coalescing Operator and the Logical OR operator?

**Interview Answer:** The difference is that OR operator returns the first truthy value and nullish operator returns the first defined value.

**Technical Answer:** The important difference is that OR operator returns the first truthy value and nullish operator returns the first defined value.

In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we will get the second argument as the result.

In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is unknown/not set.

Example:

```js
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

Source: <https://javascript.info/nullish-coalescing-operator#comparison-with>

### Does the nullish coalescing operator have a high or low operator precedence?

**Interview Answer:** The precedence of the nullish coalescing operators is low according to the MDN.

**Technical Answer:** The precedence of the ?? operator is rather low: 5 in the MDN table. So ?? is evaluated before = and ?, but after most other operations, such as +, \*. So if we’d like to choose a value with ?? in an expression with other operators, consider adding parentheses.

Example:

```js
let height = null;

let width = null;

// important: use parentheses

let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

Source: <https://javascript.info/nullish-coalescing-operator#comparison-with>

### What is the proper way to use the Nullish Coalescing Operator with the AND (&&) and OR (||) operator?

**Interview Answer:** It is not recommended to use the AND operator directly in line with the nullish coalescing operator. You should wrap the AND and OR operator in parentheses as a work around.

**Technical Answer:** Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.

Code Example:

```js
// this will cause a syntax error

let x = 1 && 2 ?? 3; // Syntax error

// Use explicit parentheses to work around it

let x = (1 && 2) ?? 3; // Works

alert(x); // 2
```

Source: <https://javascript.info/nullish-coalescing-operator#using-with-or>
