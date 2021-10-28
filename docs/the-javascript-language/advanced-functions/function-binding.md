---
title: Function Binding
sidebar_position: 10
---

# Function binding - Q&A

**Question:** **Explain, what are the three types of bind techniques in JavaScript?**

**Interview Answer:** In JavaScript, there are three types of binding techniques including Window, Implicit, and Explicit function binding.

Source: <https://javascript.info/bind>

**Question:** **Explain, what is explicit function binding is in JavaScript?**

**Interview Answer:** In JavaScript, there are three types of binding techniques including Window, Implicit, and Explicit function binding. Explicit binding forces a function call to bind to a particular context object, by using either call, apply, or bind. These are predefined JavaScript methods inherited by all function through the function prototype. Functions provide a built-in method bind that allows us to fix “this”. Binding is perfect solution for sealing the context to the proper object and not losing “this”.

Example:

```js
let user = {
  firstName: 'John',
};

function func() {
  console.log(this.firstName);
}

let funcUser = func.bind(user);

funcUser(); // John
```

Source: <https://javascript.info/bind>

**Question:** **Explain, the function and syntax of the function bind() method?**

**Interview Answer:** The bind method creates a new function that, when called, has its “this” keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. Bind returns a new function that can be invoked later in the code, while maintaining the desired context binding.

**Note:** this is useful for passing functions into other functions, like setTimeout(), which will invoke it later and won’t necessarily bind the invoked function to the correct object without being coerced. The first parameter is the context object and all other parameters are individually listed, like with the call method.

**Syntax:** let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]])

Example:

```js
const module = {
  x: 42,

  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;

console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);

console.log(boundGetX());

// expected output: 42
```

Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind>

**Question:** **Can you explain, what is a partial function application is in JavaScript?**

**Interview Answer:** A partial function application in JavaScript, refers to the process of fixing several arguments to a function, and in the process producing another function of smaller arity.

Example:

```js
function mul(a, b) {

    return a \* b;

}

let triple = mul.bind(null, 3);

alert( triple(3) ); // = mul(3, 3) = 9

alert( triple(4) ); // = mul(3, 4) = 12

alert( triple(5) ); // = mul(3, 5) = 15
```

Source: <https://javascript.info/bind#partial-functions>
