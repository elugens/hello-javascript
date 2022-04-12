---
title: Abstract Factory - Design Pattern
description: Abstract Factory is a Creational design pattern that lets you produce families of related objects without specifying their concrete classes.
sidebar_position: 2
sidebar_label: Abstract Factory
---

**Creational: Abstract Factory Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the abstract factory design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> It is also helpful to know the Abstract Factory pattern, which aims to encapsulate a group of individual factories with a common goal. It separates the details of the implementation of a set of objects from their general usage.<br/><br/>
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

### In what pattern category does the Abstract factory pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The abstract factory pattern belongs to the Creational design pattern category.
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
      <strong>Interview Response:</strong> The reason is that constructor functions are limited in their control over the overall creation process. Sometimes, you will need to hand over power to a factory with broader knowledge. This approach includes scenarios where the creation process involves object caching, sharing or re-using of objects, complex logic, or applications that maintain object and type counts and objects that interact with different resources or devices. If your application needs more control over the object creation process, we should consider using a Factory.
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
      <strong>Interview Response:</strong> The objects participants used in the Abstract Factory Pattern include the AbstractFactory, ConcreteFactory, Products, and AbstractProduct.
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
      <strong>Interview Response:</strong> The abstract factory pattern has several advantages that can be summarized in the following points:
    </div>
    <br />
    <div></div>

- Compatibility between products created by the same factory class is guaranteed.
- Clean code because the open-closed principle is guaranteed since new product families can be introduced without breaking the existing code.
- Cleaner code because the single responsibility principle (SRP) is respected since the responsibility of creating the concrete product is transferred to the concrete creator class instead of the client class having this responsibility.

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
      <strong>Interview Response:</strong> The main drawback of the abstract factory pattern, like most design patterns, is an increase in complexity in the code and an increase in the number of classes required for the code. However, this disadvantage is well known when applying design patterns, for it is the price to pay for gaining abstraction in the code.<br />
    </div>
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---