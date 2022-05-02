---
title: Extending built-in classes
description: Extending built-in classes is a process of creating a new class that inherits from an existing class. Frontend Developer Phone Interview Questions
sidebar_position: 5
sidebar_label: Extending Natives
keywords:
  - built-in classes
  - native classes
  - extending classes
  - native built-in classes
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - class objects
  - interview questions
  - interview answers
  - js
tags:
  - built-in classes
  - native classes
  - extending classes
  - native built-in classes
  - interview answers
  - interview questions
---

<head>
  <title>Extending Native built-in classes | Frontend Phone Interview</title>
</head>

**Classes: Extending Natives**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### When extending built-in classes, what is used in their internal implementation to extend the built-in class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Built-in methods like an array, filter, map, and others return new objects of the inherited type. Their internal implementation uses the object’s constructor property for that. If you test the strict equality between the newly created object and child class on the constructor, it returns true.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);

// Strict Equality Test
console.log(arr.constructor === PowerArray); // returns true
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the Symbol.species accessor property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Subclasses can override the default constructor for objects using the species accessor attribute. When we wish to retrieve Array instances in our derived array class, we utilize Symbol.species. When utilizing methods that return the default constructor, such as map(), we may wish these methods to return a parent Array object rather than the extending object.</div><br />
  <div><strong>Technical Response:</strong> The symbol Symbol.species specifies a function-valued property that the constructor function uses to create derived objects. Subclasses can override the default constructor for objects using the species accessor attribute. Symbol.species gets used when you may want to return Array objects in your derived array class. When utilizing methods that return the default constructor, such as map(), you want these methods to return a parent Array object rather than the extending object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> [Symbol.species]() &#123; return Array; &#125;<br /><br />

  <div></div>

```js
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}
let a = new MyArray(1, 2, 3);
let mapped = a.map((x) => x * x);  We are using map to return the object constructor

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true

console.log(mapped[1]); // returns value at index 1 times 2 - value = 4

console.log(a); // returns Array - [ 1, 2, 3 ]
```

:::note
To guarantee that you are accessing the correct array, maintain track of the supplied object (Array). If the method returns a new array like the filter() method, it may unexpectedly negatively affect your application when used in conjunction with the species Symbol. There are benefits to this behavior that allow us to customize specific interactions within the inheriting class.
:::

  </div>
  </div>
</details>

---

### How does static inheritance work between native built-in classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Normally, static and non-static methods are inherited when one class extends another. But built-in classes are an exception, and they do not inherit statics from each other.</div><br />
  <div><strong>Example:</strong> Both Array and Date inherit from Object, so their instances have methods from Object.prototype. But Array.[[Prototype]] does not reference Object, so there’s no, for instance, Array.keys() (or Date.keys()) static method.
  </div>
  </div>
</details>

---
