---
title: Native Prototypes
description: Native Prototypes in JavaScript are a property of the Object.prototype object. It is used to store the Object's properties and methods.
sidebar_position: 3
sidebar_label: Native Prototypes
keywords:
  - native prototypes
  - native built-ins
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - native prototypes
  - native built-ins
  - interview answers
  - interview questions
---


import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/NativeSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Function Object NFE | JavaScript Frontend Phone Interview</title>
</head>

**Prototypes / Inheritance: Native Prototypes**

---

<AdSense />

---

<CloseAllAnswers />

### What is a native prototype in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> "Native prototype" refers to the prototypes that are built into JavaScript itself, like `Array.prototype`, `Object.prototype`, `String.prototype`, etc. They provide methods that you can use on instances of those types.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Below is an example of extending a native prototype. In this case, we are adding a new method to the JavaScript String native prototype.

```javascript
// Define a new method on the String prototype
String.prototype.sayHello = function() {
    return `Hello, ${this}!`;
};

// Use the new method on a string
let name = "World";
console.log(name.sayHello());  // Outputs: Hello, World!
```

In the above example, we're adding a new method `sayHello` to the native `String` prototype. This allows us to call `sayHello` on any string. The `this` keyword inside the function refers to the string on which the method is called.

The example is illustrative of how prototypes work in JavaScript, but as mentioned earlier, modifying native prototypes in a real-world application is generally considered a bad practice.

---

:::warning
Please remember that extending native prototypes can be dangerous. You can unintentionally break code that relies on the standard behavior. But for academic purposes, it can serve as an example to understand what prototypes are in JavaScript.
:::

  </div>
  </div>
</details>

---

### Can you give me a high-level overview of JavaScript's native prototypes and objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The prototype property is present in all custom and built-in native objects, and we can improve their usefulness by adding additional attributes and methods. Native prototypes may only be changed or new ones added, but we cannot remove them.
</div>
  </div>
</details>

---

### What future issues can happen with native prototype extensions (custom property) in web applications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If future browser versions implement Array.prototype.myExtension, their implementation gets overwritten by our extended method, which will not only be less efficient but may also produce a different, nonstandard result. Whether internal or external, conflicts between libraries are another issue that emerges.</div><br />
  <div><strong>Technical Response:</strong> If future browser versions implement Array.prototype.myExtension (either as part of an upgrade to the EcmaScript standard or on their initiative), their implementation gets overridden by the custom one, which will not only be less productive (we can't change browser engine internals in the service of method optimization), but may also produce a different, nonstandard result. However, there is a technique to reduce the danger by testing for the presence of the native property. This choice might result in varying results between browser versions and device platforms. Whether internal or external, conflicts between libraries are another issue that emerges.
  </div>

---

:::note
Although, there is a way to mitigate the risk by checking for the existence of native properties. This behavior could lead to different results in different browsers versions and across device platforms.
:::

  </div>
</details>

---

### What is a specific case for native prototype extensions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You should only use a native prototype extension when you need to create a Polyfill for a method that exists in the JavaScript standard but is not yet supported by a particular JavaScript engine.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
if (!String.prototype.repeat) {
  // if there's no such method
  // add it to the prototype

  String.prototype.repeat = function (n) {
    // repeat the string n times

    // actually, the code should be a little bit more complex than that
    // (the full algorithm is in the specification)
    // but even an imperfect polyfill is often considered good enough
    return new Array(n + 1).join(this);
  };
}

console.log('La'.repeat(3)); // LaLaLa
```

  </div>
  </div>
</details>

---

### Can you borrow functionality from native prototypes in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you may borrow a native prototype method if you require the same functionality. The basic concept is to copy and paste a method from one object into another. We should note that some native prototype approaches often get copied.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Borrowing the Array Join method…<br /><br />

  <div></div>

```js
let obj = {
  0: 'Hello',
  1: 'JavaScript!',
  length: 2,
};

obj.join = Array.prototype.join;

console.log(obj.join(', ')); // Hello, JavaScript!
```

  </div>
  </div>
</details>

---

### Why would you extend native prototypes in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Extending native prototypes can provide additional functionality to built-in JavaScript types, making it easier to perform common tasks on objects of these types across the entire application. However, it should be used cautiously due to potential risks.
  </div>

---

:::warning
Please remember that extending native prototypes can be dangerous. You can unintentionally break code that relies on the standard behavior. But for academic purposes, it can serve as an example to understand what prototypes are in JavaScript.
:::

  </div>
</details>

---

### Why can modifying native prototypes be dangerous?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Modifying native prototypes can be dangerous because if multiple libraries or parts of your code try to define the same method, they may conflict and lead to unpredictable behavior.
  </div><br />
  <div><strong className="codeExample">Here's an illustrative example:</strong><br /><br />

  <div></div>

```javascript
// Library A extends the Array prototype
Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0);
};

// Your code uses this extension
let arr = [1, 2, 3];
console.log(arr.sum()); // Outputs: 6

// Library B also extends the Array prototype with a different implementation
Array.prototype.sum = function() {
    // This version simply adds 1 to each element
    return this.map(x => x + 1);
};

// Now, the behavior of your code changes unexpectedly
console.log(arr.sum()); // Outputs: [2, 3, 4]
```

In the above example, the method `.sum()` gets redefined by another piece of code or library, leading to unexpected results in your own code. This is why it's generally discouraged to modify native prototypes.

  </div>
  </div>
</details>

---

### How can extending native prototypes affect performance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Extending native prototypes can degrade performance by disabling certain JavaScript engine optimizations, leading to slower code execution. Moreover, extra prototype methods could increase memory usage if not handled carefully.
  </div>
  </div>
</details>

---

### Can every built-in object's prototype be extended in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, every built-in object's prototype can be extended, but some objects like null or undefined don't have prototypes. However, it's not recommended to do so due to potential conflicts and performance issues.
  </div><br />
  <div><strong className="codeExample">Here's an example of extending the `Date` prototype:</strong><br /><br />

  <div></div>

```javascript
// Extend the Date prototype
Date.prototype.getDayName = function() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[this.getDay()];
};

// Use the new method
let date = new Date();
console.log(date.getDayName());  // Outputs the current day of the week
```

In this example, we're adding a new method `getDayName` to the `Date` prototype, which allows us to get the day of the week as a string from any `Date` object. As mentioned, while this is possible, it is not recommended in production code due to the potential for conflicts and performance issues.

  </div>
  </div>
</details>

---

### What are the alternatives to extending native prototypes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A safer alternative to extending native prototypes is to use utility functions or classes. These encapsulate the behavior you want without changing the behavior of built-in types.
  </div><br />
  <div><strong className="codeExample">Here's an example using a utility function:</strong><br /><br />

  <div></div>

```javascript
function getDayName(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

let date = new Date();
console.log(getDayName(date));  // Outputs the current day of the week
```

In this code, instead of adding a method to the `Date` prototype, we define a separate function that takes a `Date` object as an argument and returns the day of the week. This avoids the potential issues with modifying native prototypes.

  </div>
  </div>
</details>

---

### How would you restore a modified native prototype in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If you want to restore a modified native prototype, you can delete the added property. This will revert it back to its original state.
  </div><br />
  <div><strong className="codeExample">Let's take the example of `Array.prototype` where an extra method `sum` was added:</strong><br /><br />

  <div></div>

```javascript
// Extending the Array prototype
Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0);
};

// An array instance now has `sum` method
let arr = [1, 2, 3];
console.log(arr.sum());  // Outputs: 6

// Deleting the added property
delete Array.prototype.sum;

// Now, `sum` method is not available anymore
try {
    console.log(arr.sum());
} catch(e) {
    console.log(e.message);  // Outputs: arr.sum is not a function
}
```

In this code, after adding a `sum` method to the `Array.prototype`, we later delete it using the `delete` operator. After that, trying to call `sum` on an array will throw an error, indicating that the method no longer exists.

  </div>
  </div>
</details>

---

### Is it a good practice to extend native prototypes in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, it's generally not considered good practice to extend native prototypes in JavaScript due to potential conflicts, performance issues, and unexpected behavior across different parts of your application or libraries.
  </div>
  </div>
</details>

---

:::warning
Please remember that extending native prototypes can be dangerous. You can unintentionally break code that relies on the standard behavior. But for academic purposes, it can serve as an example to understand what prototypes are in JavaScript.
:::
