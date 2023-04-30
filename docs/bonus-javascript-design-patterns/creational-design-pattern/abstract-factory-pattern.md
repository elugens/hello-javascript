---
title: Abstract Factory - Design Pattern
description: The abstract factory pattern is a creational design pattern that produces families of related objects without specifying their concrete classes.
sidebar_position: 2
sidebar_label: Abstract Factory
keywords:
  - abstract factory pattern
  - abstract factory design pattern
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
  - abstract factory pattern
  - abstract factory design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/AbstractFactorySchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Abstract Factory Pattern | JavaScript Interview Questions</title>
</head>

**Creational: Abstract Factory Pattern**

<CloseAllAnswers />

---

### Can you explain the abstract factory design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The abstract factory design pattern provides an interface for creating families of related objects without specifying their concrete classes, promoting flexibility and maintainability in software design.<br/>
    </div><br />
    <div>
      <strong>Technical Response:</strong> It's also a good idea to be familiar with the Abstract Factory design. Which seeks to encapsulate a set of independent factories with a similar purpose, and it separates the details of implementing a set of objects from their general usage.<br/><br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/javascript-abstract-factory.jpg" /><br /><br />

**The objects participating in this pattern are:**

**AbstractFactory** -- _not used in JavaScript_

- declares an interface for creating products

**ConcreteFactory** -- In example code: _EmployeeFactory, VendorFactory_

- a factory object that manufactures new products
- the create() method returns new products

**Products** -- In example code: _Employee, Vendor_

- the factory-created product instances

**AbstractProduct** -- _not used in JavaScript_

- declares an interface for the created products

<br />

:::note

Though the definition particularly mentions that an interface needs to be defined, we don’t have interfaces in _Vanilla JavaScript_. Therefore, we must implement it in a way that JavaScript translates into an interface.

:::

</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

  <div></div>

```js
function Employee(name) {
  this.name = name;

  this.say = function () {
    console.log('I am employee ' + name);
  };
}

function EmployeeFactory() {
  this.create = function (name) {
    return new Employee(name);
  };
}

function Vendor(name) {
  this.name = name;

  this.say = function () {
    console.log('I am vendor ' + name);
  };
}

function VendorFactory() {
  this.create = function (name) {
    return new Vendor(name);
  };
}

function run() {
  let persons = [];
  let employeeFactory = new EmployeeFactory();
  let vendorFactory = new VendorFactory();

  persons.push(employeeFactory.create('Joan DiSilva'));
  persons.push(employeeFactory.create("Tim O'Neill"));
  persons.push(vendorFactory.create('Gerald Watson'));
  persons.push(vendorFactory.create('Nicole McNight'));

  for (let i = 0, len = persons.length; i < len; i++) {
    persons[i].say();
  }
}

run();

/*

OUTPUT:

I am employee Joan DiSilva
I am employee Tim O'Neill
I am vendor Gerald Watson
I am vendor Nicole McNight

*/
```

  </div>

  <br />
  <div><strong className="codeExample">Code Example #2:</strong><br /><br />

  <div></div>

```js
function Car() {
  this.name = 'Car';
  this.wheels = 4;
}

function Tractor() {
  this.name = 'Tractor';
  this.wheels = 4;
}

function Bike() {
  this.name = 'Bike';
  this.wheels = 2;
}
const vehicleFactory = {
  createVehicle: function (type) {
    switch (type.toLowerCase()) {
      case 'car':
        return new Car();
      case 'tractor':
        return new Tractor();
      case 'bike':
        return new Bike();
      default:
        return null;
    }
  },
};
var car = vehicleFactory.createVehicle('Car');
console.log(car);

/*

 output: 

 Car { name: "Car", wheels: 4 }

 */
```

  </div>

  </div>
</details>

---

### The Abstract Factory pattern belongs to which pattern family?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The abstract factory pattern belongs to the creational design pattern category, which is used to create objects in a flexible and extensible manner.
    </div>
  </div>
</details>

---

### Why would you want to delegate the responsibility of object construction to others rather than directly calling a constructor function with the new keyword?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Delegating object construction to an abstract factory allows for greater flexibility in object creation and decouples object creation from object usage, enabling more modular and maintainable code.
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> When object creation is tightly coupled to object usage, changes to object construction logic can have a ripple effect throughout the codebase. Delegating this responsibility to an abstract factory promotes loose coupling, allowing for easier maintenance, testing, and swapping out of object implementations, while also enabling the creation of related object families with a unified interface.
    </div>
  </div>
</details>

---

### What are the objects participants used in the Abstract Factory Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Technical Response:</strong> The objects participants used in the Abstract Factory Pattern include the AbstractFactory, ConcreteFactory, Products, and AbstractProduct.
    </div><br />
    <div>
      <strong>Technical Response:</strong> The objects participants used in the Abstract Factory Pattern include the AbstractFactory, ConcreteFactory, Products, and AbstractProduct. The AbstractFactory, not used in JavaScript, declares an interface for creating products. The ConcreteFactory is a factory object that manufactures new products, and products are simply instances created by the factory. The AbstractFactory participant, not used in JavaScript, declares an interface for the produced products.
    </div><br />

:::note

Though the definition particularly mentions that an interface needs to be defined, we don’t have interfaces in _Vanilla JavaScript_. Therefore, we must implement it in a way that JavaScript translates into an interface.

:::

  </div>
</details>

---

### What are some of the benefits of using the Abstract factory pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The abstract factory pattern offers various advantages, which we can describe in the following fashion.
    </div>
    <br />
    <div></div>

- We ensure the compatibility of items produced by the same factory class.
- Open-closed Concept: Clean code, since we introduce new product families without affecting the current code structure, ensuring the open-closed concept.
- Cleaner code since the single responsibility principle (SRP) gets followed because the obligation for generating the concrete product gets passed to the concrete creator class rather than the client class.

<br />
  </div>
</details>

---

### What are some of the disadvantages of implementing the Abstract Factory pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Some disadvantages of using the abstract factory pattern include increased complexity and overhead compared to simpler object creation methods, as well as potential difficulty in extending the pattern to accommodate new object types.<br />
    </div>
  </div>
</details>

---

### Are there any alternatives besides using the Abstract Factory?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> There are several alternative patterns that can be used instead of the Abstract Factory pattern, depending on the specific requirements of the application. Some examples include the Factory Method pattern, the Builder pattern, and the Prototype pattern. Each of these patterns has its own strengths and weaknesses and can be used to solve different problems related to object creation and instantiation.<br />
    </div>
  </div>
</details>

---
