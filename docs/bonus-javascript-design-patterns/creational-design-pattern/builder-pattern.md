---
title: Builder - Design Pattern
description: Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.
sidebar_position: 3
sidebar_label: Builder
---

**Creational: Builder Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the builder design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Builders allow us to construct complex objects by only specifying the type and content of the object, shielding us from the process of creating or representing the object explicitly.<br/><br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/javascript-builder-pattern.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Director** -- In example code: _Shop_

- uses the Builder's multistep interface to build products

**Builder** -- _not used in JavaScript_

- asserts a multi - step interface for the creation of a complex product

**ConcreteBuilder** -- In example code: _CarBuilder_ and _TruckBuilder_ are two examples of code.

- implements the Builder interface with multiple steps
- maintains the product's integrity during the assembly process
- offers the ability to retrieve the newly created product

**Products** -- In example code: _Car, Truck_

- represents the complicated objects that must be assembled

<br />

</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function Shop() {
  this.construct = function (builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  };
}

function CarBuilder() {
  this.car = null;

  this.step1 = function () {
    this.car = new Car();
  };

  this.step2 = function () {
    this.car.addParts();
  };

  this.get = function () {
    return this.car;
  };
}

function TruckBuilder() {
  this.truck = null;

  this.step1 = function () {
    this.truck = new Truck();
  };

  this.step2 = function () {
    this.truck.addParts();
  };

  this.get = function () {
    return this.truck;
  };
}

function Car() {
  this.doors = 0;

  this.addParts = function () {
    this.doors = 4;
  };

  this.say = function () {
    console.log('I am a ' + this.doors + '-door car');
  };
}

function Truck() {
  this.doors = 0;

  this.addParts = function () {
    this.doors = 2;
  };

  this.say = function () {
    console.log('I am a ' + this.doors + '-door truck');
  };
}

function run() {
  let shop = new Shop();
  let carBuilder = new CarBuilder();
  let truckBuilder = new TruckBuilder();
  let car = shop.construct(carBuilder);
  let truck = shop.construct(truckBuilder);

  car.say();
  truck.say();
}

run();

/*

OUTPUT:

I am a 4-door car
I am a 2-door truck

*/
```

  </div>

  <br />

  </div>
</details>

---

### In what pattern category does the Builder Pattern belong?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Builder Pattern belongs to the Creational design pattern category.
    </div>
  </div>
</details>

---

### What is the most common reason to use the Builder Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Builder design pattern's goal is to decouple the construction of a complex object from its representation. It is a design pattern from the Gang of Four.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> The most common reason for using Builder is to make client code that creates complex objects that are simpler to comprehend. The client can still direct the Builder's actions without knowing how the actual work is completed. Because the procedures involved are frequently repetitive and complex, builders frequently encapsulate the construction of Composite objects (another GoF design pattern).<br/><br/>It is usually the last step that returns the newly created object, making it simple for a Builder to participate in fluent interfaces where multiple method calls separated by dot operators are chained next to each other.<br/><br/>
    </div>

  </div>
</details>

---

### Can you name the objects participating in the Builder Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The objects participating in the Builder Pattern include the Director, Builder, ConcreteBuilder, and Products objects.
    </div><br />
    <div>
      <strong>Technical Response:</strong> The objects participating in the Builder Pattern include the Director, Builder, ConcreteBuilder, and Products objects. The director object constructs products by using the Builder’s multi-step interface. The Builder object, not used in JavaScript, declares a multi-step interface for creating a complex product. The ConcreteBuilder implements the multi-component Builder interface, keeps the product in position during the assembly process, and enables you to retrieve the newly created product. The Products object represents the complex objects being assembled.
    </div><br />

:::note

Though the definition particularly mentions that an interface needs to be defined, we don’t have interfaces in _Vanilla JavaScript_. Therefore, we must implement it in a way that JavaScript translates into an interface.

:::

  </div>
</details>

---

### Why is the AbstractBuilder Object participant not used in JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The AbstractBuilder is not used because Vanilla JavaScript does not support abstract classes. However, the different Builders must implement the same multi-step interface for the Director to be able to step through the assembly process.
      </div><br />

  </div>
</details>

---

### What are some of the benefits of using the Builder pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The builder pattern has several advantages, which can be summarized as follows:
      </div><br/>

<div></div>

- Objects can be built in stages.
- The creation of an object can be delayed until all necessary information for its construction is available. The object will not be acquired until the Builder class's build function is invoked.
- Clean code: The Single Responsibility Principle (SRP) is used because the object's intricate construction is separated from its core functionality.

<br />

  </div>
</details>

---

### What is the primary disadvantage of employing the Builder pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The main disadvantage of the builder pattern is the increased code complexity and the number of classes required. This is a well-known drawback of using design patterns — the cost of gaining abstraction in the code.<br />
    </div>
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
