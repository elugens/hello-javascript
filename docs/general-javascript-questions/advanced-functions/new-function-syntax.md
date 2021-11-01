---
title: The "new" Function Syntax
sidebar_position: 7
---

# The "new" Function Syntax - Q&A

### Explain, the new Function constructor syntax in JavaScript?

**Interview Answer:** The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically but suffers from security and similar (but far less significant) performance issues to eval. However, unlike eval, the Function constructor creates functions which execute in the global scope only. One thing that should be noted, is that the new Function syntax does not require a function body to work. The major difference from other ways to build a function is that the function is created literally from a string, that is passed at run time. In fact, we can receive a string from an external source and use it in a function constructor. It is used in specific cases, like when we receive code from a server, or to dynamically compile a function from a template, in complex web-applications.

**Syntax:** `new Function([arg1 [, arg2 [, ...argN]] ,] functionBody)`

Example:

```js
let sum = new Function('a', 'b', 'return a + b');

console.log(sum(1, 2)); // 3
// new Function without a function body

let sayHi = new Function('alert("Hello, JavaScript")');

sayHi(); // Hello, JavaScript
```

Source: <https://javascript.info/new-function#syntax>

### Explain, what happens when a function is created using the new Function constructor?

**Answer:** When a function is created using new Function, its [[Environment]] is set to reference not the current Lexical Environment, but the global one. So, such function does not have access to outer variables, only to the global ones. This special feature of new Function looks strange but appears especially useful in practice. Hence, they cannot use outer variables. But that is good, because it insures us from errors. Passing parameters explicitly is a much better method architecturally and causes no problems with minifiers.

Source: <https://javascript.info/new-function#closure>
