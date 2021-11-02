---
title: String Evaluation
sidebar_position: 2
---

# String Evaluation

**Miscellaneous: String Evaluation**

<head>
  <title>String Evaluation - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is the eval functions’ purpose in JavaScript?

**Interview Answer:** The honest answer is that you should never use eval in your applications, according to the MDN. However, the purpose for eval is to evaluate JavaScript code represented as a string value. There is one string parameter used in the eval built-in function. It returns the completion value of evaluated code. If the completion value is empty, undefined is returned.

Example:

```js
let code = 'alert("Hello")';

eval(code); // alerts Hello
```

Source: <https://javascript.info/eval>

### Should you use the eval built-in JavaScript function property JavaScript? Why or why not?

**Interview Answer:** We should never use eval in modern applications. There are many problems including security, optimization, speed, and minification compatibility issues. The MDN does not recommend its use in modern programming.

**Technical Answer:** In modern programming eval is used very sparingly. It is often said that “eval is evil”. The reason is simple: long, long time ago JavaScript was a much weaker language, many things could only be done with eval. But that time passed a decade ago. There is pretty much no reason to use eval because it is not optimized by the JavaScript engine. If someone is using it, there is a good chance they can replace it with a modern language construct or a JavaScript Module. Evil, I mean eval has several issues including speed and code minification compatibility issues. The main issue is that it creates a security issue for the user, and it use is not recommended.

Using outer local variables inside eval is also considered a bad programming practice, as it makes maintaining the code more difficult. If your code needs some data from the outer scope, use new Function and pass it as arguments.

**Warning:** Executing JavaScript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when you use eval().

Source: <https://javascript.info/eval#using-eval>

### Is there a better option or built-in JavaScript object than eval that you can use?

**Interview Answer:** Yes, the recommended option is to use the built-in Function() object. The benefits include increased application security and engine optimization. If your code needs some data from the outer scope, use new Function and pass it as arguments.

Example: Converting from eval to a Function() object.

```js
// Bad code with eval():

function looseJsonParse(obj) {
  return eval('(' + obj + ')');
}

console.log(looseJsonParse('{a:(4-1), b:function(){}, c:new Date()}'));

// Better code without eval():

function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ')')();
}

console.log(looseJsonParse('{a:(4-1), b:function(){}, c:new Date()}'));
```

Source: <https://javascript.info/eval#using-eval>
