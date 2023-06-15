---
title: Factory Method - Design Pattern
description: The factory pattern offers an interface for producing objects in a superclass while allowing subclasses to change the type of objects created.
sidebar_position: 1
sidebar_label: Factory Method
keywords:
  - factory method
  - factory design pattern
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
  - factory method
  - factory design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FactoryMethodSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Factor Method | JavaScript Interview Questions</title>
</head>

**Creational: Factory Pattern**

<CloseAllAnswers />

---

### What is the Factory Pattern in JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The factory design pattern is a programming pattern that provides a way to create objects without specifying their concrete classes. It uses a factory method to instantiate objects based on a set of rules or criteria.<br/>
    </div><br />
    <div>
      <strong>Technical Response:</strong> A Factory Method creates new objects as instructed by the client. One way to create new objects in JavaScript is by invoking a constructor function with the new operator. There are times when the client should not or does not know which of numerous candidates objects to instantiate. The Factory Method enables the client to delegate object creation while maintaining control over the type to be instantiated.<br/><br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/structure-factory-method.png" /><br /><br />

**The objects participating in this pattern are:**

**Creator** -- In example code: _Factory_

- the Factory object that creates new products
- implements factory method which returns newly created products

**AbstractProduct** -- _not used in JavaScript_

- declares an interface for products

**ConcreteProduct** -- In example code: _Employees_

- the manufactured product
- All products support the same interface (properties and methods)

<br />

:::note

Though the definition particularly mentions that an interface needs to be defined, we do not have interfaces in JavaScript. Therefore, we must implement it so that JavaScript translates into an interface.

:::

</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

  <div></div>

```js
let Factory = function () {
  this.createEmployee = function (type) {
    let employee;

    if (type === 'fulltime') {
      employee = new FullTime();
    } else if (type === 'parttime') {
      employee = new PartTime();
    } else if (type === 'temporary') {
      employee = new Temporary();
    } else if (type === 'contractor') {
      employee = new Contractor();
    }

    employee.type = type;

    employee.say = function () {
      console.log(this.type + ': rate ' + this.hourly + '/hour');
    };

    return employee;
  };
};

let FullTime = function () {
  this.hourly = '$12';
};

let PartTime = function () {
  this.hourly = '$11';
};

let Temporary = function () {
  this.hourly = '$10';
};

let Contractor = function () {
  this.hourly = '$15';
};

function run() {
  let employees = [];
  let factory = new Factory();

  employees.push(factory.createEmployee('fulltime'));
  employees.push(factory.createEmployee('parttime'));
  employees.push(factory.createEmployee('temporary'));
  employees.push(factory.createEmployee('contractor'));

  for (let i = 0, len = employees.length; i < len; i++) {
    employees[i].say();
  }
}

run();

/*

OUTPUT:

fulltime: rate $12/hour
parttime: rate $11/hour
temporary: rate $10/hour
contractor: rate $15/hour

*/
```

  </div>

  <br />
  <div><strong className="codeExample">Code Example #2:</strong><br /><br />

  <div></div>

```js
//Factory method for creating new shape instances
function shapeFactory() {
  this.createShape = function (shapeType) {
    var shape;
    switch (shapeType) {
      case 'rectangle':
        shape = new Rectangle();
        break;
      case 'square':
        shape = new Square();
        break;
      case 'circle':
        shape = new Circle();
        break;
      default:
        shape = new Rectangle();
        break;
    }
    return shape;
  };
}

// Constructor for defining new Rectangle
var Rectangle = function () {
  this.draw = function () {
    console.log('This is a Rectangle');
  };
};

// Constructor for defining new Square
var Square = function () {
  this.draw = function () {
    console.log('This is a Square');
  };
};

// Constructor for defining new Circle
var Circle = function () {
  this.draw = function () {
    console.log('This is a Circle');
  };
};

var factory = new shapeFactory();
//Creating instance of factory that makes rectangle,square,circle respectively
var rectangle = factory.createShape('rectangle');
var square = factory.createShape('square');
var circle = factory.createShape('circle');

rectangle.draw();
square.draw();
circle.draw();

/*
  OUTPUT
  
  This is a Rectangle
  This is a Square
  This is a Circle
 
*/
```

  </div>

  </div>
</details>

---

### In what pattern category does the factory pattern belong?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The factory pattern belongs to the "Creational" design pattern category, which is used to create objects in a flexible and extensible manner.
    </div>
  </div>
</details>

---

### What is a factory method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A factory method in JavaScript is a creational design pattern that provides an interface for creating objects. It encapsulates object creation logic within a method, allowing subclasses or implementing objects to determine the type of object to be created.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of a factory method in JavaScript:

```javascript
// Product interface
class Product {
  constructor(name) {
    this.name = name;
  }
  // ...
}

// Concrete products
class ConcreteProductA extends Product {
  // ...
}

class ConcreteProductB extends Product {
  // ...
}

// Factory
class Factory {
  createProduct(type) {
    switch (type) {
      case 'A':
        return new ConcreteProductA('Product A');
      case 'B':
        return new ConcreteProductB('Product B');
      default:
        throw new Error('Invalid product type.');
    }
  }
}

// Usage
const factory = new Factory();

const productA = factory.createProduct('A');
console.log(productA.name); // Output: Product A

const productB = factory.createProduct('B');
console.log(productB.name); // Output: Product B
```

In this example, the `Factory` class provides a `createProduct` method that takes a type parameter and returns a new instance of the appropriate `ConcreteProduct` based on the type provided. The factory encapsulates the creation logic, allowing the client code to create products without being aware of the specific implementation details.

  </div>
  </div>
</details>

---

### What is the primary goal of the factory method?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The primary goal of a Factory Method is to provide a common interface for creating objects, allowing subclasses or implementing objects to decide the exact type of object to be instantiated, promoting flexibility and loose coupling.
    </div>
  </div>
</details>

---

### What are the object participants in the factory pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The object participants in the factory pattern include the Creator, which defines the factory method, the ConcreteCreator, which implements the factory method, and the Product, which is the object being created.
    </div><br />
    <div>
      <strong>Technical Response:</strong> There are three participants in the factory pattern, including the Creator, AbstractProduct, and ConcreteProduct. The Creator is the factory object that creates new products and implements “factoryMethod” which returns newly manufactured products. The AbstractProduct declares an interface for the products, except in JavaScript. The ConcreteProduct is the product getting created, and all ConcreteProducts support the same interface.
    </div><br />

  </div>
</details>

---

### Can you name a use case for the factory pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> A use case for the factory pattern is in any application where object creation needs to be decoupled from the calling code, allowing for greater flexibility and extensibility in the codebase. This can improve code maintainability and reduce duplication of code.
      </div>
      <br/>
    <div>
      <strong>Technical Response:</strong> Use Cases and Applicability of the Factory Pattern
      </div>

<div></div>

- You should use the Factory Method when you don’t know the exact types and dependencies of the objects your code should work within your application.

- When you want to give users of your library or framework the ability to extend its internal components, we use the Factory Method to meet this specification.

- The Factory Method may be used to save system resources by reusing existing objects rather than constructing them each time.

<br />

  </div>
</details>

---

### What are the benefits of using the Factory Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Factory Pattern promotes loose-coupling, code reusability, and enables the creation of similar objects without exposing the creation logic to the client.
    </div>
    <br />
    <div>
      <strong>Technical Details:</strong> Some benefits of using the factory pattern include decoupling object creation from the calling code, providing a flexible and extensible way to create objects, and improving code maintainability and reusability.<br/><br/>Benefits of the Factory Pattern.
    </div>
    <br />
    <div></div>

- You avoid a close relationship between the Creator and the concrete products.
- **Single Responsibility Principle (S.R.P.):** The principle of single responsibility. You can consolidate the product creation code into a single location in the program, making it easier to support.
- **Open/Closed Principle:** You can integrate new products into the system without busting the current client code.

<br />
  </div>
</details>

---

### What are some of the factory pattern's drawbacks?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Factory Pattern.<br /><br />
      The code may become more complicated as you introduce large numbers of new subclasses to implement the pattern. It can make the code more complex, obscure object types, and it can be overkill for simple object creation. The best-case scenario is incorporating the design into an existing creator class hierarchy.<br /><br />
    </div>
  </div>
</details>

---

### Can you name some alternatives to the factory pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Alternatives to using the factory pattern in JavaScript include using the constructor function directly, using a class with static methods, or using a dependency injection library.<br /><br />
    </div>

Here is a list of alternatives to the Factory Pattern:

1. Object literals
2. Constructor functions
3. Dependency injection
4. Abstract factory pattern
5. Builder pattern
6. Singleton pattern
7. Prototype pattern
8. Module pattern

These alternatives provide various ways to handle object creation and instantiation in JavaScript, each with its own benefits and use cases.

  </div>
</details>

---

### How is the Factory Pattern different from the Constructor Pattern in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Factory Pattern uses a separate factory method to create objects, allowing subclasses or implementing objects to determine the type, while the Constructor Pattern directly creates objects using constructor functions or classes. The constructor in the pattern is instantiated using the "new" operator.
  </div>
  </div>
</details>

---

### Is the Factory Pattern the best pattern for creating a large number of identical objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, a Factory Pattern is not optimal for creating many identical objects; it's best used for creating similar but not identical objects. The Prototype Pattern is more suitable for creating a large number of identical objects because it allows objects to be cloned from a prototype, avoiding the overhead of repeated object construction in the Factory Pattern.
  </div>
  </div>
</details>

---

### How can the Factory Pattern help with encapsulation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It encapsulates the creation of objects, hiding the complexities of instantiation and making it easier to manage dependencies.
  </div>
  </div>
</details>

---

### What is a Simple Factory Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A simple Factory Pattern is a subset of the Factory Pattern that returns an instance of one of several possible classes based on provided data.
  </div>
  </div>
</details>

---

### Can you name a real-world example where the Factory Pattern is useful?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's useful in a logging system where objects represent different types of logs, like error logs, info logs, debug logs, etc.
  </div>
  </div>
</details>

---

### How does the Factory Pattern contribute to the SOLID principles?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It adheres to the Dependency Inversion Principle, as higher-level modules are not dependent on lower-level modules, promoting code flexibility.
  </div>
  </div>
</details>

---

### What is the difference between a Factory Method and the Factory Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Factory Pattern is a broader concept that includes multiple factory methods to create objects, while the Factory Method is a specific implementation of this pattern, focusing on a single method.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here are simple code examples for both patterns in JavaScript:

1. Factory Method:

```javascript
class PizzaFactory {
    createPizza(type) { // createPizza is a Factory Method
        if (type === 'cheese') {
            return new CheesePizza();
        } else if (type === 'pepperoni') {
            return new PepperoniPizza();
        }
    }
}

```

In this example, `createPizza` is a Factory Method. It creates different types of Pizza objects based on the input `type`.

2. Factory Pattern:

```javascript
class PizzaFactory {
    static createCheesePizza() {
        return new CheesePizza();
    }
    
    static createPepperoniPizza() {
        return new PepperoniPizza();
    }
}

```

In this Factory Pattern example, we have a `PizzaFactory` class with two static methods: `createCheesePizza` and `createPepperoniPizza`. Each of these methods creates a specific type of Pizza object.

  </div>
  </div>
</details>

---
