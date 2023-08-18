---
title: Constructor Design Pattern
description: The constructor pattern is a class or function-based pattern used in the creation of specific types of objects. JavaScript interview questions and answers.
sidebar_position: 4
sidebar_label: Constructor
keywords:
  - constructor pattern
  - constructor design pattern
  - design patterns
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
  - constructor pattern
  - constructor design pattern
  - design patterns
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ConstructorSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Constructor Design Pattern | JavaScript Interview Questions</title>
</head>

**Creational: Constructor Pattern**

---

<AdSense />

---

<CloseAllAnswers />

### What is the constructor design pattern in JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The constructor pattern is a creational design pattern in JavaScript that allows creating multiple instances of an object using a constructor function, with each instance sharing properties and methods.
    </div><br />
    <div>
      <strong>Technical Response:</strong> The constructor pattern is a design pattern that uses a class or function to create unique types of objects. A constructor is a one-of-a-kind method for initializing a newly created object after allocated memory.<br/><br/>The "Constructor Pattern" in JavaScript is one of the most commonly used design patterns in the language. The constructor pattern is a special method that is used to initialize a newly created object once memory has been allocated for it. It's the way JavaScript creates an 'object' to keep track of values.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.displayCar = function() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

const myCar = new Car('Toyota', 'Corolla', '2006');
console.log(myCar.displayCar());  // Outputs: 2006 Toyota Corolla
```

In this example, `Car` is a constructor function. When you call `new Car(...)`, JavaScript creates a new object, and then calls the `Car` function with `this` set to the new object.

The properties `make`, `model`, and `year` are data properties of the new object. The `displayCar` function is a method of the new object: it's a property whose value is a function.

The `new` keyword is very important when using the constructor pattern. If you forget it, `this` inside the constructor will not refer to the newly created object.

While this traditional approach works fine, it has some issues:

1. It's not efficient. Each time we create an object using `new Car(...)`, we're creating a new copy of the `displayCar` method. It would be more memory-efficient if all `Car` objects shared a single copy of that method.

2. There's no easy way to create "private" properties or methods.

To address these issues, you might want to consider the "Prototype Pattern" or "Module Pattern", which are other JavaScript design patterns that are more complex but offer additional features. However, for simple cases, the constructor pattern can be quite useful.

  </div>
  </div>
</details>

---

### Why use the constructor pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The constructor pattern facilitates code reuse, encapsulates code into manageable units, provides initial setup for object instances, and enhances readability by establishing clear, structured blueprints for object creation.
  </div>
  </div>
</details>

---

### What kinds of objects can we create with the constructor pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> In JavaScript, the constructor pattern can create any type of object, such as Books, Students, Employees, Cars, Animals, Products, or any custom objects as per the requirements. Basically, you can use this pattern to create any object that has specific characteristics or behaviors.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

**1. Book Object**

```javascript
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  
  this.getSummary = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
  }
}

let book1 = new Book('Harry Potter', 'J.K. Rowling', 500);
console.log(book1.getSummary()); // Outputs: Harry Potter by J.K. Rowling, 500 pages
```

**2. Student Object**

```javascript
function Student(name, grade, subject) {
  this.name = name;
  this.grade = grade;
  this.subject = subject;

  this.introduction = function() {
    return `Hello, my name is ${this.name}. I am in grade ${this.grade} and I am studying ${this.subject}.`;
  }
}

let student1 = new Student('John', '10', 'Mathematics');
console.log(student1.introduction()); // Outputs: Hello, my name is John. I am in grade 10 and I am studying Mathematics.
```

**3. Employee Object**

```javascript
function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
  
  this.displayEmployee = function() {
    return `${this.name} works as a ${this.position} and earns $${this.salary} per year.`;
  }
}

let employee1 = new Employee('Alice', 'Software Engineer', 120000);
console.log(employee1.displayEmployee()); // Outputs: Alice works as a Software Engineer and earns $120000 per year.
```

Remember, you can create any type of object using the constructor pattern. Just define a constructor function for that type, and use the `new` keyword to create instances of that type.

  </div>
  </div>
</details>

---

### In what pattern category does the Constructor pattern belong?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The constructor pattern is categorized as a creational design pattern, as it deals with object creation mechanisms.
    </div>
  </div>
</details>

---

### What ES6 object do we use in the constructor pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Constructor pattern in ES6 is usually implemented using "classes". The class syntax in ES6 is a more advanced and succinct way of creating constructors and dealing with inheritance.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayCar() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

const myCar = new Car('Toyota', 'Corolla', '2006');
console.log(myCar.displayCar());  // Outputs: 2006 Toyota Corolla
```

In this ES6 example, `class Car` is basically a constructor function. The `constructor` keyword is used to create and initialize an object created from a class. Also, methods are added directly to the class and are part of the prototype. This is more efficient than the earlier example where each new object would get its own copy of the method.

  </div>
  </div>
</details>

---

### When should you use the constructor pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The constructor pattern should be used when you need to create multiple instances of a complex object, each with its own state and methods, yet sharing a common structure and behavior.
    </div>
  </div>
</details>

---

### What are some of the issues related to constructor pattern and instance checking?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> JavaScript's dynamic typing can cause issues with instance checking. An object created by a constructor might not be recognized as an instance of it, especially when inheritance or different contexts are involved.
    </div><br />

  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function Phone(brand, model, countryDesignedIn, countryMadein) {
  this.brand = brand;
  this.model = model;
  this.countryDesignedIn = countryDesignedIn;
  this.countryMadein = countryMadein;

  this.toString = function () {
    return `${this.brand} ${this.model} manufactured in ${this.countryMadein}`;
  };
}

Phone.prototype.toStringAlt = function () {
  return `${this.brand} ${this.model} designed in ${this.countryDesignedIn}`;
};

yourPhone = new Phone('Nokia', '3310', 'Denmark', 'Denmark');
myPhone = new Phone('iPhone', '7', 'USA', 'China');

// Test if toString method works
console.log(yourPhone.toString()); // Output: Nokia 3310 manufactured in Denmark
console.log(myPhone.toString()); // Output: iPhone 7 manufactured in China

// Test if toString function are not duplicated (let's say the same object)
console.log(
  `toString functions are the same object: ${
    yourPhone.toString === myPhone.toString
  }`
);

// Test if toStringAlt method works
console.log(yourPhone.toStringAlt()); // Output: Nokia 3310 designed in Denmark
console.log(myPhone.toStringAlt()); // Output: iPhone 7 designed in USA

// Test if toStringAlt function are not duplicated (let's say the same object)
console.log(
  `toStringAlt functions are the same object: ${
    yourPhone.toStringAlt === myPhone.toStringAlt
  }`
);
// Output: toStringAlt functions are the same object: true

// Checking Instance Equality
console.log(yourPhone === myPhone); // false
```

  </div>
  </div>
</details>

---

### What are the benefits of using the constructor pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The constructor pattern promotes reusability and encapsulation. It's efficient for creating multiple instances of an object with the same structure and behavior, providing consistency and organization.
    </div>
    </div>
</details>

---

### What are the drawbacks of using the constructor pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The constructor pattern can be memory inefficient, as each instance gets its own copy of methods. It can also have issues with instance recognition when inheritance is involved.
    </div>
    </div>
</details>

---

### How do the constructor pattern and prototype pattern differ?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The primary difference between the constructor and prototype pattern is the reusability of components. The constructor pattern creates new objects with each instance having its own methods. The prototype pattern uses a shared prototype to conserve memory, where all instances share a common set of methods.
    </div><br />
    <strong>Constructor Pattern:</strong><br />
    When you create a new constructor, it creates a new instance of everything, and any changes made to the instantiated object do not affect the others.<br /><br />
    <strong>Prototype Pattern:</strong><br />
    Creating a new object using the prototype reuses the logic, and any change to the prototype chain affects everyone else.
    <div>
    </div>
  </div>
</details>

---

### How does the new keyword work in the constructor pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'new' keyword in JavaScript creates an instance of an object type. It calls the constructor function, sets 'this' to the new object, and automatically returns the new object if the constructor doesn't explicitly.
  </div>
  </div>
</details>

---

### What is a downside of the constructor pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Every instance gets its own copy of methods, which can be inefficient for memory usage.
  </div>
  </div>
</details>

---

### What's a way to mitigate the downside of the constructor pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A common mitigation technique is the use of Prototypes. Instead of defining methods inside the constructor function, they're attached to the constructor's prototype. This avoids method duplication across instances.
  </div><br/>
  <div><strong>Technical Response:</strong> One of the downsides of the constructor pattern in JavaScript is that it is not very efficient. Each time we create an object using the constructor, we're creating a new copy of all methods. This can be mitigated by using JavaScript's prototype, which allows us to add methods and properties shared across all instances of a constructor.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.displayCar = function() {
  return `${this.year} ${this.make} ${this.model}`;
}

const myCar = new Car('Toyota', 'Corolla', '2006');
console.log(myCar.displayCar());  // Outputs: 2006 Toyota Corolla
```

In this example, we've added `displayCar` method to the prototype of the `Car` constructor. All instances of `Car` now share this single `displayCar` method, which makes this approach more memory-efficient. This technique is often used in JavaScript to add methods to an object after the constructor has been defined.

  </div>
  </div>
</details>

---

### Can you modify a constructor's prototype after it has been created?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can modify a constructor's prototype even after instances have been created from it. The changes will apply to all instances, including those that were created before the modification. This is possible because objects in JavaScript are linked to their prototype, not a copy of the prototype.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car('Toyota', 'Corolla', '2006');

// Let's add a method to the Car prototype
Car.prototype.displayCar = function() {
  return `${this.year} ${this.make} ${this.model}`;
}

// Even though myCar was created before we added displayCar method, it can still use it
console.log(myCar.displayCar());  // Outputs: 2006 Toyota Corolla

// Let's now add another method to the Car prototype
Car.prototype.getAge = function() {
  const currentYear = new Date().getFullYear();
  return currentYear - this.year;
}

// Again, myCar can use the new method, even though it was created before the method was added
console.log(myCar.getAge());  // Outputs: the age of the car, depending on the current year
```

In this example, even though `myCar` was created before the methods `displayCar` and `getAge` were added to the `Car` prototype, `myCar` can still use those methods. This is because `myCar` has a live link to the `Car` prototype.

  </div>
  </div>
</details>

---

### Can we have private variables in a constructor pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript allows for private variables in a constructor pattern through closure, although it's not as straightforward as it is in languages like Java or C++. However, as of ECMAScript 2020, JavaScript also introduced true private class fields using a hash `#` prefix.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is how to achieve private variables in a constructor pattern:

```javascript
function Car(make, model, year) {
  // public variables
  this.make = make;
  this.model = model;

  // private variable
  let _year = year;

  // public method accessing private variable
  this.getCarYear = function() {
    return _year;
  }
}

const myCar = new Car('Toyota', 'Corolla', '2006');
console.log(myCar.getCarYear());  // Outputs: 2006
```

In this example, `_year` is a private variable, because it's not accessible outside the `Car` constructor. You can't access it directly with something like `myCar._year`. However, it can be accessed through the `getCarYear` method, which is defined in the same scope as `_year`.

Now, here is how you can create private fields in JavaScript classes as of ECMAScript 2020:

```javascript
class Car {
  #year; // private field

  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.#year = year;
  }

  getCarYear() {
    return this.#year;
  }
}

const myCar = new Car('Toyota', 'Corolla', '2006');
console.log(myCar.getCarYear());  // Outputs: 2006
```

In this example, `#year` is a private field. You can't access it directly with `myCar.#year`, even though it's defined on the object. However, you can still access it through the `getCarYear` method, which is part of the `Car` class.

  </div>
  </div>
</details>

---

### What happens if we forget to use the new keyword with a constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If you forget to use 'new' with a constructor in JavaScript, 'this' inside the constructor will reference the global object, likely leading to unintended side effects and potential errors.
  </div>
  </div>
</details>

---

### How does inheritance work with the constructor pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can implement inheritance using the constructor pattern and the prototype property. You can set up inheritance by assigning an instance of the parent constructor to the child's prototype.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Parent constructor
function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

Vehicle.prototype.display = function() {
  return `${this.make} ${this.model}`;
}

// Child constructor
function Car(make, model, year) {
  Vehicle.call(this, make, model);  // call the parent constructor
  this.year = year;
}

// Set up inheritance
Car.prototype = Object.create(Vehicle.prototype);

// Make sure the constructor property points back to Car
Car.prototype.constructor = Car;

Car.prototype.displayCar = function() {
  return this.display() + `, Year: ${this.year}`;
}

const myCar = new Car('Toyota', 'Corolla', '2006');
console.log(myCar.displayCar());  // Outputs: Toyota Corolla, Year: 2006
```

  </div>
  </div>
</details>

---

### How does the constructor pattern compare to the factory pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The constructor pattern requires 'new' for object creation, provides 'instanceof' checks, but can cause issues if 'new' is forgotten. The factory pattern avoids 'new' issues, and returns objects directly, but lacks 'instanceof' checks.
  </div>
  </div>
</details>

---

### What is a "pseudo-classical" pattern in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The pseudo-classical pattern in JavaScript involves creating constructors, using 'new' to instantiate objects, and setting methods on the constructor's prototype, mimicking traditional class-based languages like Java.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getDetails = function() {
    return this.make + ' ' + this.model + ' (' + this.year + ')';
}

var myCar = new Car('Toyota', 'Corolla', 2007);
console.log(myCar.getDetails()); // Toyota Corolla (2007)
```

In this example, `Car` is a constructor function that creates new objects with `make`, `model`, and `year` properties. The `getDetails` function is added to the `Car`'s prototype, meaning all instances of `Car` will have access to this method.

The introduction of ES6 brought the `class` syntax, which simplifies the process of defining constructor functions and their prototypes. Here's how you'd implement the same functionality using JavaScript classes:

```javascript
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return this.make + ' ' + this.model + ' (' + this.year + ')';
    }
}

const myCar = new Car('Toyota', 'Corolla', 2007);
console.log(myCar.getDetails()); // Toyota Corolla (2007)
```

Whether you should use the pseudo-classical pattern or JavaScript classes really depends on your project and team preferences. JavaScript classes, being newer and more similar to classes in other programming languages, are often considered more readable and are generally preferred in modern codebases. However, it's worth noting that under the hood, they do the same thing: both are using JavaScript's prototypal inheritance.

For browsers or environments that don't support ES6 syntax, you might need to use the pseudo-classical pattern, or transpile your ES6 code to ES5 using tools like Babel.

  </div>
  </div>
</details>

---

### How are static properties and methods used in the constructor pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Static properties and methods are attached directly to the constructor function, not instances. They're shared across all instances and typically used for functionality not tied to a specific instance.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Instance method
Car.prototype.getDetails = function() {
    return this.make + ' ' + this.model + ' (' + this.year + ')';
}

// Static property
Car.numberOfWheels = 4;

// Static method
Car.isCar = function(obj) {
    return obj instanceof Car;
}

var myCar = new Car('Toyota', 'Corolla', 2007);
console.log(myCar.getDetails()); // Toyota Corolla (2007)
console.log(Car.numberOfWheels); // 4
console.log(Car.isCar(myCar)); // true
```

In the example above, `numberOfWheels` is a static property, meaning it is a property of the `Car` function itself, not of instances created with `new Car()`. Similarly, `isCar` is a static method.

You can do the same with ES6 classes:

```javascript
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return this.make + ' ' + this.model + ' (' + this.year + ')';
    }

    static isCar(obj) {
        return obj instanceof Car;
    }
}

// Static property
Car.numberOfWheels = 4;

const myCar = new Car('Toyota', 'Corolla', 2007);
console.log(myCar.getDetails()); // Toyota Corolla (2007)
console.log(Car.numberOfWheels); // 4
console.log(Car.isCar(myCar)); // true
```

In this code, `numberOfWheels` and `isCar()` are still static properties and methods, respectively, but the class syntax makes it clear that `isCar()` is a method that does not depend on a particular instance of the `Car` class.

  </div>
  </div>
</details>

---
