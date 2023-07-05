---
title: Class Checking "instanceof"
description: Class Checking instanceof is the syntax for checking if an object is an instance of a class. The instanceof allows us to check if an object belongs to a  class.
sidebar_position: 6
sidebar_label: Class Checking
keywords:
  - class checking
  - instanceof
  - instanceOf operator
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
  - class checking
  - instanceof
  - instanceOf operator
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/InstanceofSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Class Checking instanceof | Frontend Phone Interview Answers</title>
</head>

**Classes: Class Checking**

<CloseAllAnswers />

---

### What is class checking in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, classes are special functions that are used to create objects. Class checking typically refers to the practice of checking the type or constructor of an object to ensure it was instantiated from a specific class.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Let's say we have a `Car` class, and we want to confirm if a given object is an instance of `Car`. Here's how we might perform class checking in JavaScript:

```javascript
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

// Create a new instance of Car
let myCar = new Car('Tesla Model 3', 2022);

// Check if myCar is an instance of Car
if (myCar instanceof Car) {
    console.log('myCar is an instance of Car');
} else {
    console.log('myCar is not an instance of Car');
}
```

In this example, `myCar instanceof Car` will return `true` because `myCar` was created as an instance of the `Car` class. So, the output of this code would be "myCar is an instance of Car".

---

:::note
This is a simple form of class checking. It is important to note that JavaScript is a prototype-based language, and class checking can become more complex when inheritance and other advanced features are used. But for most practical purposes, the `instanceof` operator will serve you well.
:::

  </div>
  </div>
</details>

---

### What operator is typically used for class checking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `instanceof` operator is typically used in JavaScript for class checking. It checks the prototype chain for the constructor reference.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const myArray = [1, 2, 3, 4, 5];
console.log(myArray instanceof Array);  // Returns true
```

  </div>
  </div>
</details>

---

### What does the instanceof operator do in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `instanceof` operator in JavaScript tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object. In simpler terms, it checks if an object is an instance of a specific class or constructor.
</div><br />
  <div><strong>Technical Response:</strong> The instanceof operator allows us to check whether an object belongs to a certain class. It also takes inheritance into account. Such a check may be necessary in many cases, and it can be used for building a polymorphic function, the one that treats arguments differently depending on their type.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

class Bike {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

let myCar = new Car('Tesla Model 3', 2022);
let myBike = new Bike('Yamaha MT-15', 2020);

console.log(myCar instanceof Car);  // Returns true
console.log(myCar instanceof Bike); // Returns false
console.log(myBike instanceof Car); // Returns false
console.log(myBike instanceof Bike); // Returns true
```

In this code:

- `myCar instanceof Car` checks if `myCar` is an instance of the `Car` class, and returns `true`.
- `myCar instanceof Bike` checks if `myCar` is an instance of the `Bike` class, and returns `false`.
- `myBike instanceof Car` checks if `myBike` is an instance of the `Car` class, and returns `false`.
- `myBike instanceof Bike` checks if `myBike` is an instance of the `Bike` class, and returns `true`.

As you can see, `instanceof` allows you to confirm the class of an object in JavaScript.

  </div>
  </div>
</details>

---

### Is an Array an instance of an Object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, arrays are a type of object and can be considered instances of the `Object` class. We can confirm this using the `instanceof` operator.
</div><br />
  <div><strong>Technical Response:</strong> Yes, an Array belongs to the Object class, because Array prototypically inherits from Object. At the base of JavaScript, all native objects like Array and even Function inherit from the Object class. The instanceof operator examines the prototype chain to render a result as true or false.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let myArray = [1, 2, 3, 4, 5];

console.log(myArray instanceof Array);  // Returns true
console.log(myArray instanceof Object); // Also returns true
```

In this code:

- `myArray instanceof Array` checks if `myArray` is an instance of the `Array` class, and returns `true`.
- `myArray instanceof Object` checks if `myArray` is an instance of the `Object` class, and also returns `true`.

As you can see, an Array is indeed considered an instance of an Object in JavaScript, due to JavaScript's object-based nature where almost everything is an object.

  </div>
  </div>
</details>

---

### Is it possible to make a custom obj instanceof Class algorithm?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it is possible to customize the behavior of the `instanceof` operator in modern JavaScript (ES6 and beyond) using the `Symbol.hasInstance` method. This method is a static method that defines how an object should behave with the `instanceof` operator.
</div><br />
  <div><strong className="codeExample">Here's an example that demonstrates this:</strong><br /><br />

  <div></div>

```javascript
class MyCustomClass {
    static [Symbol.hasInstance](instance) {
        return Array.isArray(instance);
    }
}

const myArray = [1, 2, 3, 4, 5];
const myObject = {foo: 'bar'};

console.log(myArray instanceof MyCustomClass);  // Returns true
console.log(myObject instanceof MyCustomClass); // Returns false
```

In this code:

- We define a `MyCustomClass` class with a `Symbol.hasInstance` method.
- This method checks if the `instance` is an Array using the `Array.isArray` method.
- `myArray instanceof MyCustomClass` checks if `myArray` is an "instance" of `MyCustomClass` as per our custom definition, and returns `true` because `myArray` is an array.
- `myObject instanceof MyCustomClass` checks if `myObject` is an "instance" of `MyCustomClass` as per our custom definition, and returns `false` because `myObject` is not an array.

So, you can indeed customize the behavior of the `instanceof` operator in modern JavaScript. Note that this can lead to some surprising results, so use this feature with caution!

  </div>
  </div>
</details>

---

### Can you explain what happens with an instanceof class check?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The obj instanceOf Class checks whether Class.prototype is equal to one of the prototypes in the obj prototype chain. If any answer is true, return true. If it does not reach true as a result and reaches the end of the chain, return false. The Class constructor itself does not participate in the check! Only the chain of prototypes and Class.prototype matters.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Rabbit extends Animal {}

let rabbit = new Rabbit();
alert(rabbit instanceof Animal); // true

// rabbit.__proto__ === Rabbit.prototype
// rabbit.__proto__.__proto__ === Animal.prototype (match! return true)
```

  </div>
  </div>
</details>

---

### We already know that plain objects are converted to string as [object Object]. Is there a way to create a custom toString result for our custom objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the behavior of Object toString can be customized using a special object property Symbol.toStringTag. The Symbol.toStringTag also works for environment-specific objects like the window and XMLHttpRequest objects.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  [Symbol.toStringTag]: 'User',
};

alert({}.toString.call(user)); // [object User]

// toStringTag for the environment-specific object and class:
alert(window[Symbol.toStringTag]); // Window
alert(XMLHttpRequest.prototype[Symbol.toStringTag]); // XMLHttpRequest

alert({}.toString.call(window)); // [object Window]
alert({}.toString.call(new XMLHttpRequest())); // [object XMLHttpRequest]
```

  </div>
  </div>
</details>

---

### Is typeof operator useful for class checking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, the `typeof` operator in JavaScript is not useful for class checking. It can check the type of a variable (e.g., 'string', 'number'), but it cannot check if an object is an instance of a specific class.
  </div>
  </div>
</details>

---

### Can you use instanceof with built-in JavaScript classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the `instanceof` operator can be used with built-in JavaScript classes like `Array`, `String`, `Number`, `Date`, `Object` to check an object's type.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myDate = new Date();
console.log(myDate instanceof Date); // Returns true

let myArray = [1, 2, 3];
console.log(myArray instanceof Array); // Returns true
```

  </div>
  </div>
</details>

---

### What will instanceof return if the object is not of a specific class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `instanceof` operator in JavaScript will return `false` if the object is not an instance of the specified class.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class MyClass {}

let myInstance = new MyClass();
let myNumber = 5;

console.log(myInstance instanceof MyClass); // logs true
console.log(myNumber instanceof MyClass); // logs false
```

  </div>
  </div>
</details>

---

### Is instanceof reliable across different windows or frames?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, `instanceof` is not always reliable across different windows or frames, as each has its own execution environment and constructor instances. It can lead to unexpected results.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example that illustrates the potential issue with `instanceof` across different windows or frames.

```javascript
// Assume we have two windows or frames: window1 and window2
let array1 = window1.Array; 
let array2 = window2.Array;

let instance1 = new array1();
let instance2 = new array2();

console.log(instance1 instanceof array1); // logs true
console.log(instance2 instanceof array1); // logs false even though instance2 is an Array object
```

In this case, `instance2` is an instance of `Array`, but `instanceof` returns `false` because it's from a different window or frame.

  </div>
  </div>
</details>

---

### What is a drawback of instanceof in Modern JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A drawback of `instanceof` in modern JavaScript is that it doesn't work reliably with objects from different execution contexts (like iframes or different windows), which have their own global scope.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

The following example demonstrates this drawback of `instanceof`. Consider two iframes, each with their own execution environment.

Assume we have two iframes with their separate JavaScript execution contexts:

```html
<iframe id="iframe1" srcdoc="<script>window.onload = function() { parent.array1 = new Array(); };</script>"></iframe>
<iframe id="iframe2" srcdoc="<script>window.onload = function() { parent.array2 = new Array(); };</script>"></iframe>
```

Then in the parent frame:

```javascript
window.onload = function() {
    console.log(array1 instanceof Array); // logs true
    console.log(array2 instanceof Array); // logs true
    console.log(array1 instanceof array2.constructor); // logs false
}
```

In the above code, `array1` and `array2` are both instances of `Array`, but `array1 instanceof array2.constructor` returns `false` because `array1` and `array2` were created in different execution contexts (iframes), each with its own `Array` constructor.

  </div>
  </div>
</details>

---

### How can you perform class checking across iframes in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To perform class checking across iframes in modern JavaScript, you can use `Object.prototype.toString.call(instance)`. This method returns a string representing the object's class.

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a simple code example. Instead of using `instanceof`, you can use `Object.prototype.toString.call()` to perform class checking across iframes:

```javascript
<iframe id="iframe1" srcdoc="<script>window.onload = function() { parent.arrayFromIframe = new Array(); };</script>"></iframe>

<script>
window.onload = function() {
    console.log(Object.prototype.toString.call(arrayFromIframe) === '[object Array]'); // logs true
}
</script>
```

In the above example, even though `arrayFromIframe` was created in a different execution context (an iframe), `Object.prototype.toString.call(arrayFromIframe)` still correctly identifies it as an Array.

  </div>
  </div>
</details>

---

### What would Object.prototype.toString.call() return for an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `Object.prototype.toString.call()` for an array in JavaScript would return "[object Array]". This string indicates that the object is an Array.
  </div>
  </div>
</details>

---

### What is duck typing in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Duck typing in JavaScript is a programming concept where the semantics of an object are determined by its capabilities (methods and properties) rather than its class or inheritance hierarchy.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let Duck = function() {};
Duck.prototype.quack = function() {
    console.log('Quack!');
};

let NotADuck = function() {};

let duck = new Duck();
let notADuck = new NotADuck();

function makeItQuack(possiblyADuck) {
    if (typeof possiblyADuck.quack === 'function') {
        possiblyADuck.quack();
    } else {
        console.log('This is not a duck!');
    }
}

makeItQuack(duck); // logs 'Quack!'
makeItQuack(notADuck); // logs 'This is not a duck!'
```

In this example, we don't care about the type of `possiblyADuck`. We only care that it has a `quack` method. This is the essence of duck typing: "If it quacks like a duck, it's a duck."

  </div>
  </div>
</details>

---

### Can instanceof be used with custom classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the `instanceof` operator can be used with custom classes in JavaScript. It checks whether an object is an instance of a specific class.
  </div>
  </div>
</details>

---

### How does instanceof differ from typeof?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, `instanceof` checks if an object is an instance of a specific class, while `typeof` returns a string indicating the type of the operand, like 'string', 'number', or 'object'.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class MyClass {}

let myInstance = new MyClass();
let myNumber = 5;

console.log(myInstance instanceof MyClass); // logs true
console.log(myNumber instanceof MyClass); // logs false

console.log(typeof myInstance); // logs "object"
console.log(typeof myNumber); // logs "number"
```

  </div>
  </div>
</details>

---

### Why can't we rely on the constructor property for class checking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can't always rely on the `constructor` property for class checking in JavaScript because it can be overwritten or it might be undefined if the object was created using `Object.create(null)`.
  </div>
  </div>
</details>

---

### Can class checking be used to identify null or undefined values?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, class checking methods like `instanceof` cannot be used to identify `null` or `undefined` values. Instead, you should directly compare the variable to `null` or `undefined`.
  </div>
  </div>
</details>

---

### Does instanceof work with primitive types in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, class checking methods like `instanceof` cannot be used to identify `null` or `undefined` values. Instead, you should directly compare the variable to `null` or `undefined`.
  </div>
  </div>
</details>

---
