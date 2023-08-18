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

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ExtendNativeSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Extending Native built-in classes | Frontend Phone Interview</title>
</head>

**Classes: Extending Natives**

---

<AdSense />

---

<CloseAllAnswers />

---

### What is a native built-in class in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A native built-in class in JavaScript is a class provided by the language itself, such as Array, String, Object, Map, Set, etc. These classes are predefined and available for use in any JavaScript environment.
  </div>
  </div>
</details>

---

### What does it mean to extend a native built-in class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Extending a built-in class means creating a new class that inherits the properties and methods of the built-in class, allowing you to add or override functionality.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class MyArray extends Array {
    get first() {
        return this[0];
    }

    get last() {
        return this[this.length - 1];
    }
}

let myArr = new MyArray();
myArr.push(1, 2, 3, 4, 5);
console.log(myArr.first);  // Output: 1
console.log(myArr.last);   // Output: 5
```

  </div>
  </div>
</details>

---

### How do you extend a built-in class in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can extend a built-in class by using the class keyword, followed by the extends keyword and the name of the built-in class you want to inherit from. </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class MyArray extends Array {
  // Custom methods and properties
}
```

  </div>
  </div>
</details>

---

### Can you provide an example of a custom method added to a built-in class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An example of a custom method added to a built-in class is extending the String class with a reverse() method that returns the reversed string.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class MyString extends String {
  reverse() {
    return this.split('').reverse().join('');
  }
```

  </div>
  </div>
</details>

---

### Are there any limitations when extending built-in classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Some built-in objects like Error, Array, and HTMLElement have special behaviors that may not be inherited by their subclasses. Additionally, extending built-in classes can make the code harder to understand and maintain, as developers might not be familiar with the custom functionality.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Using composition instead extending the built-in Array class.<br /><br />

  <div></div>

```javascript
class MyArray {
    constructor() {
        this.array = []; // using array literal
    }

    push(value) {
        this.array.push(value);
    }

    pop() {
        return this.array.pop();
    }

    get first() {
        return this.array[0];
    }

    get last() {
        return this.array[this.array.length - 1];
    }

    // ... any other methods you want to expose
}

let myArr = new MyArray();
myArr.push(1);
myArr.push(2);
myArr.push(3);
myArr.push(4);
myArr.push(5);

console.log(myArr.first);  // Output: 1
console.log(myArr.last);   // Output: 5
```

In this example, we're defining a new class `MyArray` that mimics some of the functionality of the `Array` class (`push` and `pop` methods), but also adds custom properties `first` and `last`. Note that `MyArray` is not a subclass of `Array`, but rather uses an `Array` instance internally (`this.array`). This can often be a safer and more flexible approach than subclassing built-in classes directly.

  </div>
  </div>
</details>

---

### When should you extend built-in classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can extend built-in classes when adding or modifying their behavior for specific use cases. However, we should use composition or utility functions in most cases for better flexibility, maintainability, and performance.
  </div>
  </div>
</details>

---

### Can you provide an example of when it's better to use a utility function instead of extending a built-in class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Instead of extending the Array class to add a sum() method, you can create a utility function as an independent action. This approach is more flexible and easier to maintain, as it doesn't rely on inheritance and can be used with any array-like object.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function sum(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const result = sum([1, 2, 3, 4]); // 10
```

  </div>
  </div>
</details>

---

### Can you explain the internal constructor implementation when extending built-in classes in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When extending built-in classes, JavaScript internally calls the superclass constructor (super()) to initialize the instance with the built-in class's properties, ensuring proper inheritance and preserving special behavior. Built-in methods like an array, filter, map, and others return new objects of the inherited type. Their internal implementation uses the object’s constructor property for that. If you test the strict equality between the newly created object and child class on the constructor, it returns true.
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

### Can you explain the function of the Symbol.species accessor property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Symbol.species accessor property provides a way to define a constructor for derived objects when sub-classing built-in classes, ensuring the new instances inherit from the correct prototype, and preserving intended behavior.</div><br />
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

  sum() {
    return this.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

const myArrayInstance = new MyArray(1, 2, 3, 4);
const sliced = myArrayInstance.slice(1, 3); // creates a new Array instance, not MyArray

console.log(sliced instanceof Array); // true
console.log(sliced instanceof MyArray); // false
```

In this example, the Symbol.species accessor property is used to ensure that the slice method returns a new instance of the built-in Array class, instead of a MyArray instance.

---

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
  <div><strong>Interview Response:</strong> In JavaScript, static methods are not inherited from native built-in classes. To use them in a subclass, you need to reference them directly from the superclass, e.g., Array.isArray().</div><br />
  <div><strong>Example:</strong> Both Array and Date inherit from Object, so their instances have methods from Object.prototype. But Array.[[Prototype]] does not reference Object, so there’s no, for instance, Array.keys() (or Date.keys()) static method.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class ExtendedArray extends Array {
    static greet() {
        console.log("Hello, World!");
    }
}

// Calling static method from subclass
ExtendedArray.greet(); // Output: Hello, World!

// Built-in static method is not inherited, needs direct reference
console.log(ExtendedArray.isArray([])); // Output: Error
console.log(Array.isArray([])); // Output: True
```

  </div>
  </div>
</details>

---
