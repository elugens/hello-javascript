---
title: Extending built-in classes
description: Extending built-in classes is a process of creating a new class that inherits from an existing class.
sidebar_position: 5
sidebar_label: Extending Natives
---

**Classes: Extending Natives**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### When extending built-in classes, what is used in their internal implementation to extend the built-in class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Built-in methods like array, filter, map, and others return new objects of exactly the inherited type. Their internal implementation uses the object’s constructor property for that. If you test the strict equality between the newly created object and child class on the constructor, it will return true.
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
  <div><strong>Interview Response:</strong> The species accessor property allows subclasses to override the default constructor for objects. Symbol.species is used when we may want to return Array objects in our derived array class. When using methods such as map() that return the default constructor, we may want these methods to return a parent Array object, instead of the extending object.</div><br />
  <div><strong>Technical Response:</strong> The symbol Symbol.species specifies a function-valued property that the constructor function uses to create derived objects. The species accessor property allows subclasses to override the default constructor for objects. Symbol.species is used when you may want to return Array objects in your derived array class. when using methods such as map() that return the default constructor, you want these methods to return a parent Array object, instead of the extending object. It is important to keep track of the specified object (Array) to ensure you are accessing the right array. If the method returns a new array like the filter() method it may unexpected result in your application, when used in conjunction with the species Symbol. There are benefits to this behavior that allow use customize specific an interaction within the inheriting class.
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
It is important to keep track of the specified object (Array) to ensure you are accessing the right array. If the method returns a new array like the filter() method it may unexpected result in your application, when used in conjunction with the species Symbol. There are benefits to this behavior that allow us to customize specific an interaction within the inheriting class.
:::

  </div>
  </div>
</details>

---

### How does static inheritance work between native built-in classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Normally, when one class extends another, both static and non-static methods are inherited. But built-in classes are an exception. They do not inherit statics from each other.</div><br />
  <div><strong>Example:</strong> Both Array and Date inherit from Object, so their instances have methods from Object.prototype. But Array.[[Prototype]] does not reference Object, so there’s no, for instance, Array.keys() (or Date.keys()) static method.
  </div>
  </div>
</details>

---
