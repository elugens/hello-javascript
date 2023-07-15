---
title: Prototype Methods
description: Prototype Methods in JavaScript are a property of the prototype object. It is used to store the function's properties and methods. Interview Questions
sidebar_position: 4
sidebar_label: Prototype Methods
keywords:
  - Prototype Methods
  - prototype methods
  - native built-ins
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
  - function object
  - functions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/PropMethodsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Prototype Methods | JavaScript Frontend Phone Interview</title>
</head>

**Prototypes / Inheritance: Prototype Methods**

<CloseAllAnswers />

---

### What are prototype methods in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Prototype methods are functions defined on the prototype of a constructor function. Instances of the constructor inherit these methods, enabling code reuse and memory efficiency.
  </div>
  </div>
</details>

---

### Is there a way to implement prototypal inheritance without calling proto accessor property (deprecated) in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use `Object.create()`. This function creates a new object, using the existing object as the prototype of the newly created object.
</div><br />
  <div><strong className="codeExample">Simple Code Example:</strong><br /><br />

  <div></div>

```js
let parent = {
  greet: function() {
    console.log("Hello");
  }
};

let child = Object.create(parent);

child.greet(); // Outputs: "Hello"
```

  </div>
  </div>
</details>

---

### Can you explain the function the Object.create(obj) method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "Object.create()" function generates a new object by utilizing an existing object as the prototype.
  </div><br />
  <div><strong>Technical Response:</strong> The "Object.create()" function generates a new object by utilizing an existing object as the prototype. It contains two parameters: the prototype and the descriptors (propertiesObject in the specification). The proto parameter specifies the object that will serve as the prototype for the newly formed object. The descriptors (propertiesObject) are defined as an object whose enumerable own properties (those defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly created object, along with the corresponding property names, if specified and not undefined. These are the properties defined by the second parameter to Object.defineProperties(). Descriptors function similarly to property flags.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Object.create(proto, [descriptors]);<br /><br />

  <div></div>

Absolutely, here's a simple example:

```javascript
let animal = {
  species: "animal",
  describe: function() {
    return `This is a ${this.species}`;
  }
};

let dog = Object.create(animal);
dog.species = "dog";

console.log(dog.describe()); // Outputs: "This is a dog"
```

`Object.create(animal)` creates a new object `dog` with `animal` as its prototype.

  </div>
  </div>
</details>

---

### What is the function of the Object.getPrototypeOf() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Object.getPrototypeOf(obj) method returns the prototype of the specified object. If there are no inherited properties, null gets returned.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Object.getPrototypeOf(obj);<br /><br />

  <div></div>

```js
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// expected output: true
```

  </div>
  </div>
</details>

---

### What is the function of the Object.setPrototypeOf(obj, proto) method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Object.setPrototypeOf() method sets the prototype of a specified object to another object or null. According to the MDN, its advised to use Object.create(obj) instead of this method.
</div><br />

<strong>Syntax: </strong> Object.setPrototypeOf(obj, proto);

---

:::warning
According to the MDN, its advised to use Object.create(obj) instead of this method.
:::

  </div>
</details>

---

### Why was `__proto__` replaced by the functions getPrototypeOf / setPrototypeOf?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> According to the MDN, the creators replaced it with getPrototypeOf and setPrototypeOf, because of the performance issues related to its use. The MDN has also warned against using setPrototypeOf for the same reason.
</div>

---

:::warning
If you care about performance, you should avoid setting the [[Prototype]] of an object. Instead, create a new object with the desired [[Prototype]] using Object.create() instead of Object.setPrototypeOf().
:::

  </div>
</details>

---

### How do prototype and a regular methods differ in an object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regular methods are specific to individual instances of an object. Prototype methods are shared between all instances of an object, reducing memory usage and promoting code reusability.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Regular method
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.display = function() {
        return this.make + ' ' + this.model;
    }
}
var myCar = new Car("Toyota", "Corolla");
console.log(myCar.display()); // Toyota Corolla

// Prototype method
function Bike(make, model) {
    this.make = make;
    this.model = model;
}
Bike.prototype.display = function() {
    return this.make + ' ' + this.model;
}
var myBike = new Bike("Yamaha", "FZ");
console.log(myBike.display()); // Yamaha FZ
```

In the first case, each new Car object will have its own `display` method. In the second, all Bike objects share the same `display` method.

  </div>
  </div>
</details>

---

### How do prototype methods help with memory management in JavaScript applications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Prototype methods are shared among all object instances, using only one memory allocation for the function. Regular methods are replicated per instance, causing more memory usage. Thus, prototype methods save memory.
  </div>
  </div>
</details>

---

### How do you add a prototype method to an existing object constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In modern JavaScript, you can use the `Object.defineProperty` function to add a prototype method to an existing object constructor, which also allows you to control its properties.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
Object.defineProperty(Constructor.prototype, 'newMethod', {
  value: function() {
    // Method body
  },
  writable: true,
  configurable: true,
  enumerable: false
});
```

This approach provides better control over method properties.

  </div>
  </div>
</details>

---

### What is method sharing in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Method sharing in JavaScript refers to the practice of defining methods on the prototype of a constructor function. This allows all instances of the object to share the same method, improving memory efficiency.
  </div>
  </div>
</details>

---

### What is method shadowing in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, method shadowing occurs when a property or method in an object's own properties shadows a property with the same key in the object's prototype.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function Vehicle() {
}

Vehicle.prototype.drive = function() {
    console.log("Vehicle is driving");
};

function Car() {
}

Car.prototype = Object.create(Vehicle.prototype);  // Car inherits from Vehicle

var myCar = new Car();

myCar.drive();  // Output: "Vehicle is driving"

// Now let's shadow the drive method

myCar.drive = function() {
    console.log("Car is driving");
};

myCar.drive();  // Output: "Car is driving"
```

In this example, `myCar` initially uses the `drive` method from the `Vehicle` prototype. After we define `drive` directly on `myCar`, it shadows (or overrides) the prototype method. Now, when we call `myCar.drive()`, it uses the shadowed method and outputs "Car is driving".

  </div>
  </div>
</details>

---

### What are some common performance considerations when using prototype methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Performance considerations when using prototype methods include avoiding deep prototype chains, preventing shadowing of inherited methods, and minimizing object traversal when searching for properties or methods.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

While using prototype methods is generally good for memory efficiency since they're shared among all instances, there are considerations around lookup time and shadowing:

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.display = function() {  // Prototypical method
  return this.make + ' ' + this.model;
}

let car1 = new Car("Toyota", "Corolla");
let car2 = new Car("Honda", "Civic");

console.time('Prototype Method');
console.log(car1.display());  // Looks up the chain to find display method on prototype
console.timeEnd('Prototype Method');

console.time('Shadowed Method');
car2.display = function() {  // Shadows prototype's method; closer in scope
  return this.make + ' ' + this.model;
}
console.log(car2.display());  // Finds method on the object itself
console.timeEnd('Shadowed Method');
```

In this example, we create a `Car` constructor function with a prototype method `display`. For `car1`, when we call `display`, JavaScript has to look up the prototype chain to find the method which can be slightly slower than calling a method defined directly on the object. For `car2`, we shadow the prototype method with an own method. This can be faster, as shown by the timing logs, but it defeats the purpose of using prototype methods for memory efficiency.

  </div>
  </div>
</details>

---

### How do ES6 classes relate to the concept of prototypes and prototype methods in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> ES6 classes are syntactic sugar over JavaScript's prototype-based inheritance. Methods defined inside a class are essentially prototype methods. They're placed on the prototype object of the constructor under the hood.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a comparison between ES6 classes and constructor functions with prototype methods.

Using ES6 classes:

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  display() {
    return this.make + ' ' + this.model;
  }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.display()); // Toyota Corolla
```

Equivalent code using constructor functions and prototype methods:

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.display = function() {
  return this.make + ' ' + this.model;
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.display()); // Toyota Corolla
```

In both cases, the `display` method behaves as a prototype method, shared among all instances of `Car`. The ES6 class syntax is cleaner and more intuitive, but under the hood, it's still using JavaScript's prototype system.

  </div>
  </div>
</details>

---

### Can you explain the purpose of Object.create() and how it is related to prototypes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `Object.create(proto)` creates a new object with `proto` as its prototype. This enables prototype-based inheritance, where the new object inherits properties and methods from the `proto` object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let animal = {
  type: 'Animal',
  describe() {
    return `Type: ${this.type}`;
  }
};

let dog = Object.create(animal); 
dog.type = 'Dog';

console.log(dog.describe()); // "Type: Dog"
```

In this example, `Object.create(animal)` creates a new object with `animal` as its prototype. The new `dog` object has access to the `describe` method via prototype inheritance. When we change `dog.type` to `'Dog'`, the `describe` method reflects that change.

  </div>
  </div>
</details>

---

### Can you name the five primitive wrapper objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the hasOwnProperty method to check if an object has a specific property/method. However, it doesn't check the prototype chain. To also check prototypes, we can use the in operator.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.display = function() {
  return this.make + ' ' + this.model;
}

let myCar = new Car("Toyota", "Corolla");

console.log('display' in myCar); // true
console.log(myCar.hasOwnProperty('display')); // false
```

In this code, `'display' in myCar` checks if the `display` method exists anywhere in the prototype chain of `myCar` (returns `true`). On the other hand, `myCar.hasOwnProperty('display')` only checks if `display` is a direct property of `myCar`, not in its prototype (returns `false`).

  </div>
  </div>
</details>

---

### Why is it recommended to put methods on the prototype, and not in the constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It promotes efficiency and memory use. When methods are on the prototype, they are shared among instances, unlike methods in constructors, which create a new copy for each instance.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Sure, here's an example illustrating why it's better to put methods on the prototype:

```javascript
// Bad practice: Method in constructor
function Car1(make, model) {
  this.make = make;
  this.model = model;
  this.display = function() {
    return this.make + ' ' + this.model;
  };
}

// Good practice: Method on prototype
function Car2(make, model) {
  this.make = make;
  this.model = model;
}
Car2.prototype.display = function() {
  return this.make + ' ' + this.model;
};

let car1a = new Car1("Toyota", "Corolla");
let car1b = new Car1("Honda", "Civic");

let car2a = new Car2("Toyota", "Corolla");
let car2b = new Car2("Honda", "Civic");

console.log(car1a.display === car1b.display); // false
console.log(car2a.display === car2b.display); // true
```

In this code, `Car1` defines the `display` method within the constructor, meaning every instance of `Car1` gets its own copy of `display`. This is inefficient memory-wise, as shown by the `false` output of the comparison `car1a.display === car1b.display`.

In contrast, `Car2` defines `display` on its prototype, so all instances of `Car2` share the same method, saving memory. This is confirmed by the `true` output of the comparison `car2a.display === car2b.display`.

  </div>
  </div>
</details>

---

### Can we modify built-in/native prototype methods in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it's possible, but it's generally discouraged as it can lead to unpredictable behavior and compatibility issues across different environments.
  </div>
  </div>
</details>

---

### How can you check if a property is directly on an object or its prototype?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  You can use the hasOwnProperty() method. It returns true if the property is directly on the object, and false if it's on the prototype.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.display = function() {
  return this.make + ' ' + this.model;
}

let myCar = new Car("Toyota", "Corolla");

// Check if property is directly on object
console.log(myCar.hasOwnProperty('make')); // true

// Check if property is on prototype
console.log(myCar.hasOwnProperty('display')); // false
console.log('display' in myCar); // true
```

In this code, `hasOwnProperty` checks if the property is directly on the object (returns `true` for `make`), while the `in` operator checks whether the property is on the object or its prototype (returns `true` for `display`).

  </div>
  </div>
</details>

---

### How do you access an object's prototype in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In modern JavaScript, you can access an object's prototype with Object.getPrototypeOf(obj), where obj is the object whose prototype you want to access. This returns the object's prototype.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.display = function() {
  return this.make + ' ' + this.model;
}

let myCar = new Car("Toyota", "Corolla");

let carPrototype = Object.getPrototypeOf(myCar);

console.log(carPrototype); // { display: [Function: display], constructor: [Function: Car] }
```

In this code, `Object.getPrototypeOf(myCar)` returns the prototype of the `myCar` object, which includes the `display` method and `constructor` property.

  </div>
  </div>
</details>

---

### How do you add a method to an object's prototype?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To add a method to an object's prototype in JavaScript, you directly assign the method to the prototype property of the object's constructor function. This allows all instances of the constructor to access that method.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

You can add a method to an object's prototype by simply assigning it to the prototype of the constructor function.

```javascript
Constructor.prototype.newMethod = function() {
  // Method body
};
```

This makes `newMethod` available to all instances of `Constructor`.

  </div>
  </div>
</details>

---

### How do you create an object without a prototype in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can create an object without a prototype in JavaScript using the `Object.create` method with `null` as an argument.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let obj = Object.create(null);
```

This creates `obj` with no prototype.

  </div>
  </div>
</details>

---

### Can you add new methods to existing JavaScript objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can add new methods to existing JavaScript objects by extending their prototype. This will make the method available to all instances.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let obj = {
  prop1: 'property 1'
};

// Add a new method
obj.newMethod = function() {
  return 'This is a new method!';
}

console.log(obj.newMethod()); // "This is a new method!"
```

In this code, `obj` is an existing object with a property `prop1`. We then add a new method `newMethod` to `obj` by direct assignment. When we call `obj.newMethod()`, it executes the newly added method and outputs "This is a new method!".

  </div>
  </div>
</details>

---
