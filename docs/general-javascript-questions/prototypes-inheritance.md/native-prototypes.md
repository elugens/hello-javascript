---
title: Native Prototypes
sidebar_position: 3
---

# Native Prototypes

**Prototypes / Inheritance: Native Prototypes**

<head>
  <title>Native Prototypes - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Can you give a general overview about native prototypes and objects in JavaScript?

**Interview Answer:** All the custom and built-in native objects have the prototype property which can be used to extend their functionality by adding new properties and methods to them. The native prototypes can only be edited, or new ones can be added to them, but they cannot be deleted.

Source: <https://www.tutorialspoint.com/explain-native-prototypes-in-javascript>

### What future issues can happen with native prototype extensions (custom property) in web applications?

**Interview Answer:** If future browser versions implement Array.prototype.myExtension, their implementation will be overridden by our custom one, which will not only be less efficient, but more importantly, they might have a different, nonstandard outcome. Another issue that arises is conflicts between libraries either internally or externally.

**Note:** Although, there is a way to mitigate the risk by checking for the existence of a native property. This could lead to different results in different browsers versions and across device platforms.

**Technical Answer:** If future browser versions implement Array.prototype.myExtension (either because of an upgrade to the EcmaScript standard, or through their own volition), their implementation will be overridden by our custom one, which will not only be less efficient (we can’t manipulate browser engine internals in the service of method optimization) but more importantly, they might have a different, nonstandard outcome. Although, there is a way to mitigate the risk by checking for the existence of a native property. This could lead to different results in different browsers versions and across device platforms. Another issue that arises is conflicts between libraries either internally or externally.

Source: <https://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/>

### What is a specific case for native prototype extensions in JavaScript?

**Interview Answer:** The only time it is recommended to create a native prototype extension is when you need to create a Polyfill for a method that exists in the JavaScript specification, but is not yet supported by a particular JavaScript engine.

Example:

```js
if (!String.prototype.repeat) {
  // if there's no such method

  // add it to the prototype

  String.prototype.repeat = function (n) {
    // repeat the string n times

    // actually, the code should be a little bit more complex than that

    // (the full algorithm is in the specification)

    // but even an imperfect polyfill is often considered good enough

    return new Array(n + 1).join(this);
  };
}

alert('La'.repeat(3)); // LaLaLa
```

Source: <https://javascript.info/native-prototypes#native-prototype-change>

### Can you borrow functionality from native prototypes in JavaScript?

**Interview Answer:** Yes, when you need the same functionality of a native prototype method, you can borrow it. The basic gist of it is taking a method from one object and copying it into another. Some methods of native prototypes are often borrowed.

Example: Borrowing the Array Join method…

```js
let obj = {
  0: 'Hello',

  1: 'world!',

  length: 2,
};

obj.join = Array.prototype.join;

alert(obj.join(',')); // Hello,world!
```

Source: <https://javascript.info/native-prototypes#borrowing-from-prototypes>
